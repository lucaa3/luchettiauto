function loadComponent(filePath, placeholderId) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`)
      }
      return response.text()
    })
    .then((data) => {
      const placeholder = document.getElementById(placeholderId)
      if (placeholder) {
        placeholder.innerHTML = data
      }
    })
    .catch((error) => console.error("Error loading component:", error))
}

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("html_components/navbar.html", "navbar-placeholder")
  loadComponent("html_components/footer.html", "footer-placeholder")
})
