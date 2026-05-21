async function fetchFlights() {
  const result = document.getElementById("result");
  result.innerHTML = "Loading...";

  try {
    const response = await fetch("https://opensky-network.org/api/states/all");

    const data = await response.json();

    if (!data.states || data.states.length === 0) {
      result.innerHTML = "No flights found 😢";
      return;
    }

    const flights = data.states.slice(0, 5);

    result.innerHTML = flights.map(flight => `
      <div>
        ✈️ Flight: ${flight[1] || "N/A"} <br>
        🌍 Country: ${flight[2] || "N/A"} <br><br>
      </div>
    `).join("");

  } catch (error) {
    result.innerHTML = "Error fetching flights 😭";
    console.error(error);
  }
}
