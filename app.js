const inputBox = document.querySelector('.input-field');
const outputBox = document.querySelector('.output-field');
const translationButton = document.querySelector('.translate-btn');

const getURI = "https://api.funtranslations.com/translate/dothraki.json";

function translateURI(text){
    return `${getURI}?text=${text}`
}

function errorHandler(error){
    console.log("Error occured of following type:",error);
    outputBox.innerText = "404 Not Found! Please try again later."
    outputBox.style.color = "red"
    outputBox.style.fontSize = "1.2em";
}


function translateText(){
 let inputText = inputBox.value;
 let completeURI = translateURI(inputText);

 fetch(completeURI)
 .then(response=>response.json())
 .then(json=> {outputBox.innerText = json.contents.translated;
                outputBox.style.color = "#3e1404";
                outputBox.style.fontSize = "1.2em";})
 .catch(errorHandler);

}

translationButton.addEventListener('click',translateText);