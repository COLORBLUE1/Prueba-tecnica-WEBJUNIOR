function obtenerDatos() {

  console.log("Espera 2 segundos");

//Temporizador de 2 segundos
  setTimeout(() => {
    console.log("Datos obtenidos correctamente");

    fetch("https://rickandmortyapi.com/api/character/220")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, 2000);
}

obtenerDatos();
