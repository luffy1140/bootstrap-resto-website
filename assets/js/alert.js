


function fn() {
    var personne="";
    while(personne==""){
        personne = prompt("Entrez votre prénom");
        var x=document.getElementById("prenom").innerHTML = "Bonjour" + " " +personne +".";
    }

    return personne;

}


personne = fn();
