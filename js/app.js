/*Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine 
grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente 
servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente
clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva,
come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura,
tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.*/


//commento la parte relativa alle immagini nell'html
//mi copio le path delle immagini in una array

const imgArray = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
//console.log(imgArray);
//devo accedere a tutti gli elementi dell'array
//creo un ciclo for per leggere tutta la array
// fuori dal ciclo for mi prendo l'elemento del dom dove inserire l'html
const divContainerDOMElment = document.querySelector('.items-container');


//qui gli elementi che servono dentro il ciclo for:
//tutti gli items del DOM
//const imgItemArrayDOMElement = document.getElementsByClassName('item')
//console.log(imgItemDOMElement);
//il primo item della lista
//let firstImgItem = imgItemArrayDOMElement[0];

let currentImgItem = 0;
//let beforeCurrentItem = currentImgItem--;

for (let index = 0; index < imgArray.length; index++) {
    //console.log(imgArray[i]) 
    // con i ciclo for inserisco nell'html le immagini
    divContainerDOMElment.innerHTML += `
    <div class="item">
        <img src="${imgArray[index]}" alt="">
    </div>`
}

// Ho creato gli elementi
const imgItemArrayDOMElement = document.getElementsByClassName('item');
//firstImgItem = imgItemArrayDOMElement[0];
//ora gli elementi sono presenti ma sono in display none
//devo fare in modo che il primo elemento che vedo sia in classe active per avere display block
//devo recuperare gli elementi con classe item
//dichiaro tutto fuori dal ciclo for per renderlo leggebile all'interno ma non replicare più volte la stessa cosa
//a questo punto al primo item devo aggiungere la classe active
imgItemArrayDOMElement[currentImgItem].classList.add("active");

// prendo nel dom il pulsante (div) next
const nextButtonDOMElement = document.querySelector('.next');
// gli dò una funzione al click
nextButtonDOMElement.addEventListener('click', function () {
    
   
//al click dico che l'index di imgarray aumenta di uno

    currentImgItem = currentImgItem + 1;
    let beforeImg = currentImgItem - 1;
    //gli aggiungo la classe active

    if(currentImgItem === imgItemArrayDOMElement.length--){
        currentImgItem = 0;
    }

    imgItemArrayDOMElement[currentImgItem].classList.add('active');
    imgItemArrayDOMElement[beforeImg].classList.remove('active');
  
    //imgItemArrayDOMElement[beforeCurrentItem].classList.remove('active');
    // con lo stesso click devo togliere la classe active dal index precedente
    //devo dirgli che al click la classe active si toglie dal primo item e passa a quello successivo
    // for(let i = 0; i < imgItemArrayDOMElement.length; i++){
    //    firstImgItem = firstImgItem + imgItemArrayDOMElement[i]
    //}
    //creo un ciclo for che incrementa il primo item di 1 
    //for(firstImgItem; firstImgItem < imgItemArrayDOMElement.length; firstImgItem++)
});
const prevButtonDOMElement = document.querySelector('.prev');
// gli dò una funzione al click


prevButtonDOMElement.addEventListener('click', function () {
 
//al click dico che se l'indice è zero cliccando deve diventare 5

 let beforeImg = currentImgItem;

 if(currentImgItem === 0){
    currentImgItem = imgItemArrayDOMElement.length--;
   
 } console.log(currentImgItem);
 currentImgItem = currentImgItem - 1;
   
    //dico che l'indice deve andare a diminuire
   

    //dichiaro la variabile before che sarà uguale all'indice +1
    
   //dico che quando l'indice deve essere visibile
    imgItemArrayDOMElement[currentImgItem].classList.add('active');
    imgItemArrayDOMElement[beforeImg].classList.remove('active');

    //imgItemArrayDOMElement[beforeCurrentItem].classList.remove('active');
    // con lo stesso click devo togliere la classe active dal index precedente
    

    //devo dirgli che al click la classe active si toglie dal primo item e passa a quello successivo
    // for(let i = 0; i < imgItemArrayDOMElement.length; i++){
    //    firstImgItem = firstImgItem + imgItemArrayDOMElement[i]
    //}
    //creo un ciclo for che incrementa il primo item di 1 
    //for(firstImgItem; firstImgItem < imgItemArrayDOMElement.length; firstImgItem++)
});