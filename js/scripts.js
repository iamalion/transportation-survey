function handleForm (event) {
    event.preventDefault ();
    const userSelection = document.querySelectorAll("input[name=transportation-option]:checked");
    //add code here
}

window.addEventListener("load", function () {
    document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});