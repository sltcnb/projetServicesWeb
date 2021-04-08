
let request = new XMLHttpRequest();


function test() {
    request.open("GET", "http://localhost:8080/mairie/resources/annuaire");
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            console.log(JSON.parse(request.response));
            document.getElementById("root").innerHTML = request.response;
        }
        else {
            Console.log(`error ${request.status} ${request.statusText}`)
        }
    }

}

function getBooksApi() {
    request.open("GET", "http://localhost:8080/mairie/resources/annuaire/booksbox/");
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            console.log(JSON.parse(request.response));
            document.getElementById("root").innerHTML = request.response;
        }
        else {
            Console.log(`error ${request.status} ${request.statusText}`)
        }
    }

}

function getBooksNameApi() {
    request.open("GET", "http://localhost:8080/mairie/resources/annuaire/booksbox/names");
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            console.log(JSON.parse(request.response));
            document.getElementById("root").innerHTML = request.response;
        }
        else {
            Console.log(`error ${request.status} ${request.statusText}`)
        }
    }

}

function getBookByNameApi() {
    if (document.getElementById("bookName").value != "") {
        var nom = document.getElementById("bookName").value
        console.log(nom)
        document.getElementById("root").innerHTML = nom;
        request.open("GET", "http://localhost:8080/mairie/resources/annuaire/booksbox/" + nom);
        request.send();
        request.onload = () => {
            console.log(request);
            if (request.status == 200) {
                console.log(JSON.parse(request.response));
                document.getElementById("root").innerHTML = request.response;
            }
            else {

                console.log(`error ${request.status} ${request.statusText}`)
                document.getElementById("root").innerHTML = request.status +'Un problème est survenu' +request.statusText ;
            }
        }
    }
    else {
        document.getElementById("root").innerHTML = "Veuillez entrer une valeur dans la zone de texte pour proceder à la recherche.";
    }
}

function postBookByNameApi() {
    if (document.getElementById("bookName").value != "") {
        var nom = document.getElementById("bookName").value
        console.log(nom)
        document.getElementById("root").innerHTML = nom;
        request.open("POST", "http://localhost:8080/mairie/resources/annuaire/booksbox/" + nom);
        request.send();
        request.onload = () => {
            console.log(request);
            if (request.status == 201) {
                console.log(JSON.parse(request.response));
                document.getElementById("root").innerHTML = "Succès";
            }
            else {

                console.log(`error ${request.status} ${request.statusText}`)
                document.getElementById("root").innerHTML = request.status +'Un problème est survenu' +request.statusText ;
            }
        }
    }
    else {
        document.getElementById("root").innerHTML = "Veuillez entrer une valeur dans la zone de texte pour proceder à la recherche.";
    }
}

function getBookByNameAndTitleApi() {
    if (document.getElementById("postBookTitle").value != "" && document.getElementById("postBookName").value != "") {
        var nom = document.getElementById("postBookName").value
        var titre = document.getElementById("postBookTitle").value
        // console.log(nom)
        document.getElementById("root").innerHTML = nom;
        request.open("GET", "http://localhost:8080/mairie/resources/annuaire/booksbox/" + nom + "/" + titre);
        request.send();
        request.onload = () => {
            console.log(request);
            if (request.status == 201) {
                console.log(JSON.parse(request.response));
                document.getElementById("root").innerHTML = request.response;
            }
            else {

                console.log(`error ${request.status} ${request.statusText}`)
                document.getElementById("root").innerHTML = request.status+ 'Un problème est survenu' +request.statusText;
            }
        }
    }
    else {
        document.getElementById("root").innerHTML = "Veuillez entrer un titre et un nom.";
    }


}

function postBookByNameAndTitleApi() {
    if (document.getElementById("postBookTitle").value != "" && document.getElementById("postBookName").value != "") {
        var nom = document.getElementById("postBookName").value
        var titre = document.getElementById("postBookTitle").value
        // console.log(nom)
        document.getElementById("root").innerHTML = nom;
        request.open("POST", "http://localhost:8080/mairie/resources/annuaire/booksbox/" + nom + "/" + titre);
        request.send();
        request.onload = () => {
            console.log(request);
            if (request.status == 200) {
                console.log(JSON.parse(request.response));
                document.getElementById("root").innerHTML = "Succés.";
            }
            else {

                console.log(`error ${request.status} ${request.statusText}`)
                document.getElementById("root").innerHTML = 'Erreur 404, veuillez rentrer des informations correctes.';
            }
        }
    }
    else {
        document.getElementById("root").innerHTML = "Veuillez entrer un titre et un nom.";
    }


}
