// Ficheiro JS da aplicação
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(function () {
        console.log("Service Worker is registered!");
    });
}

function getPlayers() {
    let a = "https://www.balldontlie.io/api/v1/players?search="
    let b = document.getElementById("search").value

    let url = a + b;

    let r = document.getElementById("players");
    
    let no = "No Information";

    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(player => {

            r.innerHTML = ""

            player.data.forEach(result => {

                if (result.height_feet == null) {
                    result.height_feet = no
                }
                if (result.height_inches == null) {
                    result.height_inches = no
                }
                if (result.position == null || result.position === "") {
                    result.position = no
                }
                if (result.weight_pounds == null) {
                    result.weight_pounds = no
                }

                let y = document.createElement("div");

                y.innerHTML = `

                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${result.first_name} ${result.last_name}</h5>
                        <p class="card-text">
                        <p>About
                            <p>Name: ${result.first_name} ${result.last_name}</p>
                            <p>Position: ${result.position}</p>
                            <p>Height in feet: ${result.height_feet}</p>
                            <p>Height in Inches: ${result.height_inches}</p>
                            <p>Weight Pounds: ${result.weight_pounds}</p>
                            <p>Team: ${result.team.full_name}, ${result.team.abbreviation}</p>
                        </p>
                        <p class="sss" id="id">ID: ${result.id}
                    </div>
                </div>

                `
                r.append(y);
            });
        });
    }