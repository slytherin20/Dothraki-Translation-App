const inputBox = document.querySelector('.input-field');
const outputBox = document.querySelector('.output-field');
const translationButton = document.querySelector('translate-btn');

const getURI = "	https://api.funtranslations.com/translate/dothraki.json";

function translateURI(text){
    return `${text}?text=${text}`
}

function errorHandler(error){
    console.log("Error occured of following type:",error);
}


function translateText(){
 let inputText = inputBox.nodeValue;
 let completeURI = translateURI(inputText);

 fetch(completeURI)
 .then(res=>res.json())
 .then(json=> outputBox.value = json.contents.translated)
 .catch(errorHandler);

}

translationButton.addEventListener('click',translateText);