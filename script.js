function randColor(){
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    // Création d'un couleur aléatoire
}

function compColor(color){
    return '#'+ (0xffffff - ('0x'+(color.substring(1)))).toString(16)
}


for(let i=0; i<1; i++){
    let newCube = document.createElement('div');
    // Création d'un nouvel élément div
    let newCubeColor = randColor();
    // Création de la variable contenant la couleur
    newCube.textContent = newCubeColor;
    // Inscription de l'héxa de couleur
    newCube.style.backgroundColor = newCubeColor;
    // Application de la nouvelle couleur
    newCube.style.width = '25%';
    newCube.style.height = '25%';
    document.body.appendChild(newCube);
    // Ajout au DOM

    let newCubeComp = document.createElement('div');
    // Création d'un nouvel élément div
    let newCubeCompColor = compColor(newCubeColor);
    // Création de la variable contenant la couleur
    newCubeComp.textContent = newCubeCompColor;
    // Inscription de l'héxa de la couleur
    newCubeComp.style.backgroundColor = newCubeCompColor;
    // Application de la nouvelle couleur
    newCube.style.width = '25%';
    newCube.style.height = '25%';
    document.body.appendChild(newCubeComp);
    // Ajout au DOM


}