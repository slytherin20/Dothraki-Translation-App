const inputBox = document.querySelector('.input-field');
const outputBox = document.querySelector('.output-field');
const translationButton = document.querySelector('.translate-btn');

const getURI = "https://api.funtranslations.com/translate/dothraki.json";

function translateURI(text){
    return `${getURI}?text=${text}`
}

function errorHandler(error){
    console.log("Error occured of following type:",error);
}


function translateText(){
 let inputText = inputBox.value;
 let completeURI = translateURI(inputText);

 fetch(completeURI)
 .then(response=>response.json())
 .then(json=> outputBox.value = json.contents.translated)
 .catch(errorHandler);

}

translationButton.addEventListener('click',translateText);