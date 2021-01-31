/**
 * The trambo is mandady
 * variables global
 */
var answer;
var colors;
var blue = getRandomInt(0,255);
var green = getRandomInt(0, 255);
var red = getRandomInt(0,255);
var result = document.getElementById('result');

var levelActive = document.getElementsByClassName('level');
var el1 = document.createElement('div');
var el2 = document.createElement('div');
var el3 = document.createElement('div');
var block = document.getElementById('block');

/**
 * fonction mi retourne valeur entre 0 à 255
 * @param {*} min 
 * @param {*} max 
 */
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * fonction mi-retourne anzay numero asina anle valiny 
 * 
 * @param {*} colors 
 * @param {*} red 
 * @param {*} green 
 * @param {*} blue 
 */
function colorBlock(colors,red,green,blue, min, max){
       var numberRandom = getRandomInt(min,max);
       colors[numberRandom].style.background="rgb("+red+","+green+","+blue+")";
       return numberRandom;
}

/**
 * fonction principale mi-initiliser ny composant grahique retraretra
 */
function main(min,max){

    blue = getRandomInt(0,255);
    green = getRandomInt(0, 255);
    red = getRandomInt(0,255);
    
    let rgb = document.getElementById('rgb');

    colors = document.querySelectorAll('.main .color');
    colors = Array.prototype.slice.call(colors); // transformena ho array le nodelist de amzay lasa afaka ajoutena elements
    //console.log(colors);
    answer = colorBlock(colors,red,green,blue,min,max);
    
    for(var i=0; i<colors.length;i++){
        if(i != answer){
            colors[i].style.background = "rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+")"
        }
    }
    rgb.textContent = 'RGB('+red+', '+green+', '+blue+')';
    
    
};

main(0,5); // appelle de la fonction main

/**
 * function afatarana oe le color tena izy ve le selectionnena sa non
 * 
 * @param {} number 
 */
function answerOrNot(number){
    var i = number;
    var replayTxt = document.getElementById('replay');
    var header = document.getElementById('header');

    if(answer == number){
        result.textContent = "Gagné";
        result.style.color = "green";

        for(var j =0; j< colors.length; j++){
            colors[j].style.opacity =1;
            colors[j].style.visibility = "visible";
            colors[j].style.background="rgb("+red+","+green+","+blue+")"; 
            
        }

        colors = [];
        answer = null;
        header.style.background = "rgb("+red+","+green+","+blue+")";
        replayTxt.textContent = "Rejouer";
                
        return;
    }
    else{
        if(colors[i] != undefined){
            colors[i].style.opacity = 0;
            colors[i].style.visibility = "hidden";
        }
    }
}

/**
 * fonction mamerina milalao indray
 * averina initializevana ny colors de averina visible
 */
function replay(){
    var replayTxt = document.getElementById('replay');
    
    replayTxt.textContent = "Nouveau coleur";
    result.textContent = "";
    colors = document.querySelectorAll('.main .color');
    
    for(var i = 0; i<colors.length; i++){
        colors[i].style.visibility = "visible";
        colors[i].style.opacity = 1;
    }

    if(colors.length > 6 ){
        main(0,8);
    }
    else{
        main(0,5);
    }
}

/**
 * function mi-gerer niveau
 * @param {*} niveau 
 */
function level(niveau){
    //console.log(levelActive);
    for(var i = 0; i<colors.length; i++){
        colors[i].style.visibility = "visible";
        colors[i].style.opacity = 1;
    }
    result.textContent = "";
    if(niveau === 1){
        
        var body = document.body;
        if(colors.length > 6){
            return;
        }
        el1.className = "color";
        el2.className = 'color';
        el3.className = 'color';
        levelActive.className ="active important!";
        
        block.appendChild(el1);
        block.appendChild(el2);
        block.appendChild(el3);
        
        console.log(el1.parentNode)
        colors.push(el1);
        colors.push(el2);
        colors.push(el3);

        el1.setAttribute('onclick', 'answerOrNot(6)');
        el2.setAttribute('onclick', 'answerOrNot(7)');
        el3.setAttribute('onclick', 'answerOrNot(8)');
        window.scrollTo(0,block.scrollHeight); // mi-scrolle automatique any ambany
        levelActive[1].classList.add('active');
        levelActive[0].classList.remove('active');
        main(0,8);
    }
    else{
        
        levelActive[0].classList.add('active');
        levelActive[1].classList.remove('active');
        el1.remove();
        el2.remove();
        el3.remove();
        main(0,5);
    }

}



