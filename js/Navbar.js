fetch("Navbar.html")
  .then((response) => response.text())
  .then((html) => {
    // Obtener el elemento <div> donde se mostrará la barra de navegación
    var contenedor = document.getElementById("contenedor");

    // Agregar el HTML de la barra de navegación al elemento <div>
    contenedor.innerHTML = html;
  })
  .catch((error) => console.error("Error al cargar la barra de navegación:", error));
