function obtenerDatos() {
  setTimeout(() => {
    console.log("Datos obtenidos correctamente");

    fetch("https://rickandmortyapi.com/api/character/220")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, 2000);
}

obtenerDatos();
