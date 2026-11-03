// --- 1. INITIALIZE SUPABASE ---
const { createClient } = supabase
const supabaseUrl = "https://jgapbdkbfcdtckrnehbr.supabase.co"
const supabaseKey = "sb_publishable_41ybzHBLDKkL22GGFigqRw_rRfpiJcA"
const db = createClient(supabaseUrl, supabaseKey)

// --- 2. DYNAMIC VEHICLE DATA ---
let vehicles = []
let currentVehicleIndex = 0

async function fetchVehicles() {
  try {
    const { data, error } = await db
      .from("vehicles")
      .select("*")
      .eq("is_visible", true) // Only show visible cars on the public site
      .order("id", { ascending: false }) // Newest cars first

    if (error) throw error

    // This cleanly handles 0 cars without crashing
    vehicles = (data || []).map((car) => ({
      src: car.image_url,
      makeModel: car.make_model,
      year: car.year,
      fuel: car.fuel,
      km: car.km,
      price: car.price,
      description: car.description,
    }))

    // ALWAYS run render logic, even if vehicles is empty
    renderVehicle()
  } catch (error) {
    console.error("Error loading vehicles:", error.message)
  }
}

// --- 3. RENDER LOGIC ---
function renderVehicle() {
  const middleContainer = document.getElementById("middle-container")
  const viewInventory = document.getElementById("viewInventory")

  // Make sure the containers are visible
  if (middleContainer) middleContainer.style.removeProperty("display")
  if (viewInventory) viewInventory.style.removeProperty("display")

  const img = document.getElementById("vehicle_image")
  const makeModel = document.getElementById("vehicle_make_model")
  const year = document.getElementById("vehicle_year")
  const fuel = document.getElementById("vehicle_fuel")
  const km = document.getElementById("vehicle_km")
  const price = document.getElementById("vehicle_price")
  const description = document.getElementById("vehicle_description")

  if (vehicles.length === 0) {
    if (img) {
      img.src = "MEDIA/index/empty-inventory.jpg"
      img.alt = "Nuovi modelli in arrivo"
      img.style.cursor = "default"
    }
    if (makeModel)
      makeModel.textContent = "Nuovi modelli saranno presto disponibili!"

    if (price && price.parentElement) {
      price.parentElement.style.display = "none"
    }

    const statsGrid = document.querySelector(".vehicle-stats-grid")
    if (statsGrid) statsGrid.style.display = "none"

    const whatsappLink = document.getElementById("vehicle-whatsapp-link")
    if (whatsappLink) whatsappLink.hidden = true
    const noVehiclesWhatsappLink = document.getElementById(
      "no-vehicles-whatsapp-link",
    )
    if (noVehiclesWhatsappLink) noVehiclesWhatsappLink.hidden = false

    if (description) {
      description.textContent =
        "Abbiamo appena venduto le nostre ultime vetture. \n Nel frattempo, puoi contattarci se stai cercando un'auto specifica!"
    }

    renderDots()
    return // CRITICAL: Stop here so normal car logic doesn't try to run!
  }

  if (price && price.parentElement) price.parentElement.style.display = ""
  const statsGrid = document.querySelector(".vehicle-stats-grid")
  if (statsGrid) statsGrid.style.display = ""

  const noVehiclesWhatsappLink = document.getElementById(
    "no-vehicles-whatsapp-link",
  )
  if (noVehiclesWhatsappLink) noVehiclesWhatsappLink.hidden = true
  const whatsappLink = document.getElementById("vehicle-whatsapp-link")

  const v = vehicles[currentVehicleIndex]
  if (whatsappLink) {
    const message = `Ciao Luca, sono interessato all'auto "${v.makeModel}" che ho visto sul vostro sito. Potresti darmi maggiori informazioni?`
    whatsappLink.href = `https://wa.me/393314180195?text=${encodeURIComponent(message)}`
    whatsappLink.hidden = false
  }

  if (img) {
    img.src = v.src
    img.alt = v.makeModel
  }
  if (makeModel) makeModel.textContent = v.makeModel
  if (year) year.textContent = v.year
  if (fuel) fuel.textContent = v.fuel
  if (km) {
    const rawNumber = Number(v.km)

    if (!isNaN(rawNumber)) {
      km.textContent = rawNumber.toLocaleString("it-IT") + " km"
    } else {
      km.textContent = v.km
    }
  }
  if (price) {
    const rawNumber = Number(v.price)

    if (!isNaN(rawNumber)) {
      price.textContent = "€" + rawNumber.toLocaleString("it-IT")
    } else {
      price.textContent = v.price
    }
  }
  if (description) description.textContent = v.description

  renderDots()
}

function prevVehicle() {
  if (vehicles.length === 0) return
  currentVehicleIndex =
    (currentVehicleIndex - 1 + vehicles.length) % vehicles.length
  renderVehicle()
}

function nextVehicle() {
  if (vehicles.length === 0) return
  currentVehicleIndex = (currentVehicleIndex + 1) % vehicles.length
  renderVehicle()
}

function renderDots() {
  const dotContainer = document.getElementById("vehicleDots")
  const prevButton = document.getElementById("prevVehicleBtn")
  const nextButton = document.getElementById("nextVehicleBtn")

  if (!dotContainer) return

  dotContainer.innerHTML = ""

  if (vehicles.length <= 1) {
    if (prevButton) prevButton.style.display = "none"
    if (nextButton) nextButton.style.display = "none"
    return
  }

  if (prevButton) prevButton.style.display = ""
  if (nextButton) nextButton.style.display = ""

  vehicles.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.type = "button"
    dot.className =
      index === currentVehicleIndex ? "vehicle-dot active" : "vehicle-dot"
    dot.setAttribute("aria-label", `View car ${index + 1}`)
    dot.addEventListener("click", () => {
      currentVehicleIndex = index
      renderVehicle()
    })
    dotContainer.appendChild(dot)
  })
}

// --- 4. SWIPE & UI INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  const middleContainer = document.getElementById("middle-container")
  const imageCol = document.querySelector(".vehicle-image-col")

  if (!document.getElementById("vehicleDots")) {
    const dots = document.createElement("div")
    dots.id = "vehicleDots"
    dots.className = "vehicle-dots"
    if (imageCol) {
      imageCol.appendChild(dots)
    } else if (middleContainer) {
      middleContainer.appendChild(dots)
    }
  }

  const vehicleImage = document.getElementById("vehicle_image")
  if (vehicleImage) {
    vehicleImage.draggable = false
    vehicleImage.addEventListener("dragstart", (event) =>
      event.preventDefault(),
    )
  }

  const prevButton = document.getElementById("prevVehicleBtn")
  const nextButton = document.getElementById("nextVehicleBtn")
  if (prevButton) prevButton.addEventListener("click", prevVehicle)
  if (nextButton) nextButton.addEventListener("click", nextVehicle)

  // START THE DATA FETCH
  fetchVehicles()

  if (!middleContainer) return

  let isDragging = false
  let startX = 0
  let currentX = 0
  const threshold = 50
  const maxShift = 120

  function setTranslate(amount) {
    middleContainer.style.transform = `translateX(${amount}px)`
  }

  function resetTranslate() {
    middleContainer.style.transform = ""
  }

  function getClientX(event) {
    if (event.type.startsWith("touch")) {
      return event.touches && event.touches[0]
        ? event.touches[0].clientX
        : event.changedTouches && event.changedTouches[0]
          ? event.changedTouches[0].clientX
          : currentX
    }
    return event.clientX
  }

  // --- Updated Swipe Logic Target ---
  function beginSwipe(event) {
    // Block desktop mouse swiping completely
    if (event.pointerType === "mouse") return
    if (event.type === "touchstart" && event.touches?.length !== 1) return

    if (vehicles.length <= 1) return

    event.preventDefault()
    isDragging = true
    startX = getClientX(event)
    currentX = startX

    middleContainer.classList.add("dragging")
    document.body.classList.add("no-select")

    // Change capture to the image
    if (event.pointerId != null && vehicleImage.setPointerCapture) {
      vehicleImage.setPointerCapture(event.pointerId)
    }
  }

  function updateSwipe(event) {
    if (!isDragging) return
    currentX = getClientX(event)
    const delta = currentX - startX
    const shift = Math.max(Math.min(delta, maxShift), -maxShift)
    setTranslate(shift)
  }

  function endSwipe(event) {
    if (!isDragging) return
    isDragging = false
    middleContainer.classList.remove("dragging")
    document.body.classList.remove("no-select")

    // Change release capture to the image
    if (event.pointerId != null && vehicleImage.releasePointerCapture) {
      try {
        vehicleImage.releasePointerCapture(event.pointerId)
      } catch (err) {}
    }

    currentX = getClientX(event)
    const delta = currentX - startX
    resetTranslate()

    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        nextVehicle()
      } else {
        prevVehicle()
      }
    }
  }

  vehicleImage.addEventListener("pointerdown", beginSwipe)
  window.addEventListener("pointermove", updateSwipe)
  window.addEventListener("pointerup", endSwipe)
  window.addEventListener("pointercancel", endSwipe)
})

window.triggerInventoryView = () => {
  const container = document.getElementById("middle-container")
  if (!container) return

  // Always scroll down to the inventory, even if there is only 1 car
  container.scrollIntoView({ behavior: "smooth" })

  // ONLY trigger the mobile swipe nudge if there are 2 or more cars
  if (
    vehicles.length > 1 &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  ) {
    setTimeout(() => {
      container.classList.remove("swipe-nudge")
      void container.offsetWidth // Forces the browser to restart the animation
      container.classList.add("swipe-nudge")
    }, 600)
  }
}
