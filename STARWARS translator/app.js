var txtButton = document.querySelector("#btn");
var txtTranslate = document.querySelector("#usrinput");
var txtoutput =  document.querySelector('#output');
var yodaUrl='https://api.funtranslations.com/translate/yoda.json';
var mandaUrl='https://api.funtranslations.com/translate/mandalorian.json';
var sithUrl='https://api.funtranslations.com/translate/sith.json';
var apiSelection = document.querySelector('#api');

function getTranslation(input)
{
   if(apiSelection.value == 'yoda'){
        return yodaUrl + "?"+"text=" + input}
   else if(apiSelection.value == 'mandalorian')
   {  
       return mandaUrl + "?"+"text=" + input}
   else{
       return sithUrl + "?"+"text=" + input
   }
}

function errorHandler(error)
{
    var errorType= error;
    console.log("error occured",error);
    alert("something wrong with server. error occured " + errorType);
}

function clickHandler()
{

    var inputText=txtTranslate.value;

    fetch(getTranslation(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        txtoutput.innerHTML= translatedText;
    })
    .catch(errorHandler)
};

txtButton.addEventListener("click",clickHandler);