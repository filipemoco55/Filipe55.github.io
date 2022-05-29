// Ficheiro JS da aplicação
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(function () {
        console.log("Service Worker is registered!");
    });
}

let products= [

]
//cria o objeto para guardar as variaveis em localstorage
let localproducts = [

]

//procura na localstorage se existe algum elemento
//caso exista escreve a lista de produtos no ecrâ
localproducts = JSON.parse(localStorage.getItem("products"));
if(localproducts != null){
    let ul = document.getElementById("lista");
    localproducts.forEach(row => {
        let li1 = document.createElement("li");
        li1.classList.add("linha");
        li1.innerHTML = `${row.name} (${row.quantity}) Bought: <input type="checkbox" class="form-check-input"> <button type="button" class="btn btn-outline-primary" onclick="copyToClipboard()">Copy</button>`;
        ul.append(li1);
    });
}


//mostra na lista os produtos colocados no form e guarda os em localStorage
function lista(){
    let nome = document.getElementById("nome");
    let quantidade = document.getElementById("quantidade");
    let ul = document.getElementById("lista");
    let li1 = document.createElement("li");
    li1.classList.add("linha");
    li1.innerHTML = `${nome.value} (${quantidade.value}) Bought: <input type="checkbox" class="form-check-input"> <button type="button" class="btn btn-outline-primary" onclick="copyToClipboard()">Copy</button>`;
    ul.append(li1);
    
    products.push({
        "name": nome.value,
        "quantity": quantidade.value
    })
    localStorage.setItem("products", JSON.stringify(products));

    quantidade.innerHTML='';
}

//Copia o texto da linha pretendida para o clipboard
//Não está a funcionar corretamente
function copyToClipboard(){
    if(localproducts != null){
        let copyName = localproducts[0].name;
        navigator.clipboard.writeText(copyName).then(() => {
            console.log("Copied to clipboard");
        });
    }else
    {
        let copyName = document.getElementById("nome").value;
        navigator.clipboard.writeText(copyName).then(() => {
            console.log("Copied to clipboard");
        });
    }

    
}

//remove todos os items em localStorage e da lista
function removeAll(){
    document.getElementById("lista").innerHTML='';
    document.getElementById("nome").innerHTML='';
    localStorage.removeItem('products');
}