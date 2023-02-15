const button = document.querySelector(".btn");
button.addEventListener("click", result);

function result(e) {
e.preventDefault();
let point=0;

if(document.querySelector('#answer1').checked){	
point++;
}
if(document.querySelector('#answer2').checked){	
point++;
}
if(document.querySelector('#answer3').checked) {	
point++;
}
if(document.querySelector('#answer4').checked) {	
point++;
}
if(document.querySelector('#answer5').checked) {	
point++;
}
document.querySelector("#show").textContent = "Ваши очки: " + point + ".";
}
