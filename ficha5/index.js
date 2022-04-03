// Ficheiro JS da aplicação
 if ("serviceWorker" in navigator) {
     navigator.serviceWorker.register("./sw.js").then(function () {
         console.log("Service Worker is registered!");
     });
 }

    fetch('https://api.chucknorris.io/jokes/categories', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(jokes => {
        jokes.forEach(user => {
            let a = document.getElementById("categories");
            let b = document.createElement("button");
            b.classList.add("btn","btn-danger","mx-1");
            b.addEventListener("click", function(){
                GetJokes(user)
            });
            b.innerHTML = user;
            a.append(b);
        });
    });

    function GetJokes(arg){
        let a = "https://api.chucknorris.io/jokes/random?category="
        let b = arg
        
        let url = a + b;

        fetch(url, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(j => {
        let joke = document.getElementById("jokes");
        let d = document.createElement("div");
        joke.innerHTML = j.value;
        joke.append(d);
        
    });
    }