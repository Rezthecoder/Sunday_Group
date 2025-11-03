async function weather() {
  const url =
    "https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "60bd5dc77amsh3afa4f017c59e8fp1553f4jsn3bfe955f6acc",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.city.name);
    console.log(result);
    document.getElementById("name").textContent = result.city.name;
    document.getElementById("lat").textContent = result.city.coord.lat;
    document.getElementById("identity").textContent = result.city.id;
    document.getElementById("longi").textContent = result.city.coord.lon;
    document.getElementById("population").textContent = result.city.population;
    // document.getElementById("temp").textContent = temp;
  } catch (error) {
    console.log(error);
  }
}
weather();
