function randColor(){
    let response = (Math.random()*0xFFFFFF<<0).toString(16);
    // Création d'une couleur aléatoire
    switch(response.length){
        case 6:
            break;
        case 5:
            response = '0' + response;
            break;
        case 4:
            response = '00' + response;
            break;
        case 3:
            response = '000' + response;
            break;
        case 2:
            response = '0000' + response;
            break;
        case 1:
            response = '00000' + response;
            break;
        case 0:
            response = '000000' + response;
            break;
    }
    // Creer une condition pour gerer les >6 chiffres.
    return '#'+ response;
}

function compColor(color){
    let response = (0xffffff - ('0x'+(color.substring(1)))).toString(16);
    switch(response.length){
        case 6:
            break;
        case 5:
            response = '0' + response;
            break;
        case 4:
            response = '00' + response;
            couple.style.border = 'medium solid red';
            break;
        case 3:
            response = '000' + response;
            break;
        case 2:
            response = '0000' + response;
            break;
        case 1:
            response = '00000' + response;
            break;
        case 0:
            response = '000000' + response;
            break;
    }
    // Creer une condition pour gerer les >6 chiffres.
    return '#' + response;
}

let book = document.createElement('div');
document.body.appendChild(book);
book.style.display = 'flex';
book.style.flexDirection = 'row';
book.style.flexWrap = 'wrap';
book.style.justifyContent = 'center';

for(let i=0; i<100; i++){
    let couple =  document.createElement('div');
    //
    couple.style.border = 'medium solid #000000';
    //
    document.body.appendChild(couple);
    //

    let newCube = document.createElement('div');
    // Création d'un nouvel élément div
    let newCubeColor = randColor();
    // Création de la variable contenant la couleur
    newCube.textContent = newCubeColor;
    // Inscription de l'héxa de couleur
    newCube.style.backgroundColor = newCubeColor;
    // Application de la nouvelle couleur
    newCube.style.width = '150px';
    newCube.style.height = '150px';
    document.body.appendChild(newCube);
    // Ajout au DOM
    couple.append(newCube);
    //

    let newCubeComp = document.createElement('div');
    // Création d'un nouvel élément div
    let newCubeCompColor = compColor(newCubeColor);
    // Création de la variable contenant la couleur
    newCubeComp.textContent = newCubeCompColor;
    // Inscription de l'héxa de la couleur
    newCubeComp.style.backgroundColor = newCubeCompColor;
    // Application de la nouvelle couleur
    newCubeComp.style.width = '150px';
    newCubeComp.style.height = '150px';
    
    document.body.appendChild(newCubeComp);
    // Ajout au DOM
    couple.appendChild(newCubeComp);
    //

    book.appendChild(couple);
}