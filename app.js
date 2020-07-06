let span = document.querySelector(".output-text");
let input = document.querySelector(".input-text");
let form = document.querySelector(".form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    span.textContent = input.value;
    backToDefault();
})
function backToDefault(){
    input.value = "";
}
