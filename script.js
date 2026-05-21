async function getFlights() {
  const res = await fetch("https://opensky-network.org/api/states/all");
  const data = await res.json();

  const flights = data.states;
  const container = document.getElementById("result");

  container.innerHTML = "";

  flights.slice(0, 5).forEach(f => {
    const div = document.createElement("div");
    div.className = "flight";

    div.innerHTML = `
      ✈️ ${f[1]} <br>
      🌍 ${f[2]} <br>
      🛫 Altitude: ${f[7] || "N/A"}
    `;

    container.appendChild(div);
  });
}
