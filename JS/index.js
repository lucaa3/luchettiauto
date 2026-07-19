// --- 1. INITIALIZE SUPABASE ---
const { createClient } = supabase;
const supabaseUrl = 'https://jgapbdkbfcdtckrnehbr.supabase.co';
const supabaseKey = 'sb_publishable_41ybzHBLDKkL22GGFigqRw_rRfpiJcA';
const db = createClient(supabaseUrl, supabaseKey);

// --- 2. NAVIGATION ---
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// --- 3. DYNAMIC VEHICLE DATA ---
let vehicles = [];
let currentVehicleIndex = 0;

// Fetch cars from Supabase
async function fetchVehicles() {
  try {
    const { data, error } = await db
      .from('vehicles')
      .select('*')
      .order('id', { ascending: false }); // Newest cars first

    if (error) throw error;

    if (data && data.length > 0) {
      vehicles = data.map(car => ({
        src: car.image_url,
        makeModel: car.make_model,
        year: car.year,
        fuel: car.fuel,
        km: car.km,
        price: car.price,
        description: car.description
      }));
      
      renderVehicle();
    }
  } catch (error) {
    console.error("Error loading vehicles:", error.message);
  }
}

// --- 4. RENDER LOGIC ---
function renderVehicle() {
  if (vehicles.length === 0) return; // Prevent errors if data is still loading

  const img = document.getElementById("vehicle_image");
  const makeModel = document.getElementById("vehicle_make_model");
  const year = document.getElementById("vehicle_year");
  const fuel = document.getElementById("vehicle_fuel");
  const km = document.getElementById("vehicle_km");
  const price = document.getElementById("vehicle_price");
  const description = document.getElementById("vehicle_description");
  
  const v = vehicles[currentVehicleIndex];
  
  if (img) {
    img.src = v.src;
    img.alt = v.makeModel;
  }
  if (makeModel) makeModel.textContent = v.makeModel;
  if (year) year.textContent = v.year;
  if (fuel) fuel.textContent = v.fuel;
  if (km) km.textContent = v.km + " km";
  if (price) {
    const rawNumber = Number(v.price);
    
    if (!isNaN(rawNumber)) {
      price.textContent = '€' + rawNumber.toLocaleString('it-IT'); 
    } else {
      // Fallback: If it's not a number (e.g., they typed "Call for Price"), just print the raw text
      price.textContent = v.price;
    }
  }
  if (description) description.textContent = v.description;
  
  renderDots();
}

function prevVehicle() {
  if (vehicles.length === 0) return;
  currentVehicleIndex = (currentVehicleIndex - 1 + vehicles.length) % vehicles.length;
  renderVehicle();
}

function nextVehicle() {
  if (vehicles.length === 0) return;
  currentVehicleIndex = (currentVehicleIndex + 1) % vehicles.length;
  renderVehicle();
}

function renderDots() {
  const dotContainer = document.getElementById('vehicleDots');
  if (!dotContainer) return;

  dotContainer.innerHTML = '';
  vehicles.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = index === currentVehicleIndex ? 'vehicle-dot active' : 'vehicle-dot';
    dot.setAttribute('aria-label', `View car ${index + 1}`);
    dot.addEventListener('click', () => {
      currentVehicleIndex = index;
      renderVehicle();
    });
    dotContainer.appendChild(dot);
  });
}

// --- 5. SWIPE & UI INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  const middleContainer = document.getElementById('middle-container');
  const imageCol = document.querySelector('.vehicle-image-col');

  if (!document.getElementById("vehicleDots")) {
    const dots = document.createElement("div");
    dots.id = "vehicleDots";
    dots.className = "vehicle-dots";
    if (imageCol) {
      imageCol.appendChild(dots);
    } else if (middleContainer) {
      middleContainer.appendChild(dots);
    }
  }

  const vehicleImage = document.getElementById('vehicle_image');
  if (vehicleImage) {
    vehicleImage.draggable = false;
    vehicleImage.addEventListener('dragstart', (event) => event.preventDefault());
  }

  const prevButton = document.getElementById('prevVehicleBtn');
  const nextButton = document.getElementById('nextVehicleBtn');
  if (prevButton) prevButton.addEventListener('click', prevVehicle);
  if (nextButton) nextButton.addEventListener('click', nextVehicle);

  // START THE DATA FETCH
  fetchVehicles();

  if (!middleContainer) return;

  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  const threshold = 50;
  const maxShift = 120;

  function setTranslate(amount) {
    middleContainer.style.transform = `translateX(${amount}px)`;
  }

  function resetTranslate() {
    middleContainer.style.transform = '';
  }

  function getClientX(event) {
    if (event.type.startsWith('touch')) {
      return event.touches && event.touches[0]
        ? event.touches[0].clientX
        : event.changedTouches && event.changedTouches[0]
        ? event.changedTouches[0].clientX
        : currentX;
    }
    return event.clientX;
  }

// --- Updated Swipe Logic Target ---
  function beginSwipe(event) {
    // Block desktop mouse swiping completely
    if (event.pointerType === 'mouse') return;
    if (event.type === 'touchstart' && event.touches?.length !== 1) return;
    
    event.preventDefault();
    isDragging = true;
    startX = getClientX(event);
    currentX = startX;
    
    middleContainer.classList.add('dragging');
    document.body.classList.add('no-select');
    
    // Change capture to the image
    if (event.pointerId != null && vehicleImage.setPointerCapture) {
      vehicleImage.setPointerCapture(event.pointerId);
    }
  }

  // updateSwipe stays exactly the same
  function updateSwipe(event) {
    if (!isDragging) return;
    currentX = getClientX(event);
    const delta = currentX - startX;
    const shift = Math.max(Math.min(delta, maxShift), -maxShift);
    setTranslate(shift);
  }

  function endSwipe(event) {
    if (!isDragging) return;
    isDragging = false;
    middleContainer.classList.remove('dragging');
    document.body.classList.remove('no-select');
    
    // Change release capture to the image
    if (event.pointerId != null && vehicleImage.releasePointerCapture) {
      try {
        vehicleImage.releasePointerCapture(event.pointerId);
      } catch (err) {}
    }
    
    currentX = getClientX(event);
    const delta = currentX - startX;
    resetTranslate();
    
    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        nextVehicle();
      } else {
        prevVehicle();
      }
    }
  }

  vehicleImage.addEventListener('pointerdown', beginSwipe);
  window.addEventListener('pointermove', updateSwipe);
  window.addEventListener('pointerup', endSwipe);
  window.addEventListener('pointercancel', endSwipe);
});

window.triggerInventoryView = () => {
  const container = document.getElementById('middle-container');
  
  container.scrollIntoView({ behavior: 'smooth' });
  
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    setTimeout(() => {
      container.classList.remove('swipe-nudge');
      void container.offsetWidth; // This forces the browser to restart the animation
      container.classList.add('swipe-nudge');
    }, 600);
  }
};