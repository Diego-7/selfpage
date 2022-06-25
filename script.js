alert('Olá! Seja bem vindo a sua página inerativa!');

const backPageColor = document.querySelector('body'); 

function background(){
    let backColor = prompt('Vamos começar escolhendo a cor de fundo!');

    switch(backColor){
        case 'branco' : backPageColor.style.backgroundColor = '#fff'; break; 
        case 'azul' : backPageColor.style.backgroundColor = '#0264F5'; break; 
        case 'verde' : backPageColor.style.backgroundColor = '#25F21B'; break; 
        case 'amarelo' : backPageColor.style.backgroundColor = '#FCD41C'; break; 
        case 'rosa' : backPageColor.style.backgroundColor = '#F8A5FF'; break; 
        case 'marrom' : backPageColor.style.backgroundColor = '#91462F'; break; 
        case 'preto' : backPageColor.style.backgroundColor = '#000'; break; 
        default : backPageColor.style.backgroundColor = '#fff';
    };
}

background();

function chooseTitle(){
    const campTitle = document.getElementById('siteTitle');

pageTitle = prompt('Agora escolha um título para sua página:');

campTitle.innerHTML = pageTitle;

}

chooseTitle();

function backImg(){
    const image = document.getElementById('backgroundImg');

    let imgChoose = prompt('Hora de escolher a imagem de cabeçalho: 1: praia 2: floresta 3: montanha 4: ovelhinha');

    switch(imgChoose){
        case 'praia' : image.style.backgroundImage = "url('./assets/beach.jpg')";
                        image.style.backgroundRepeat = 'no-repeat'; 
        break;

        case 'floresta' : image.style.backgroundImage = "url('./assets/forest.jpg')";
                        image.style.backgroundRepeat = 'no-repeat';
                    break;

        case 'montanha' : image.style.backgroundImage = "url('./assets/mountain.jpg')"; 
                        image.style.backgroundRepeat = 'no-repeat';
        break;

        case 'ovelhinha' : image.style.backgroundImage = "url('./assets/lamb.jpg')";
                        image.style.backgroundRepeat = 'no-repeat';
        break;

        default : image.style.backgroundImage = "url('./assets/universe.jpg')";
                        image.style.backgroundRepeat = 'no-repeat';
    }  
}

backImg();

function writeText(){
    let textDiv = document.getElementById('textCamp');

    let textWriter = prompt('Por fim escreva um texto! Use a imaginação');

textDiv.innerHTML = textWriter;

}

writeText();

alert('Pronto! sua página está completa!');