window.onload = function() {
    var name = document.getElementById("name");
    name.addEventListener("invalid", function() {
        name.setCustomValidity("Please put your name. First name is required; surname is optional.");
    });
    name.addEventListener("input", function() {
        name.setCustomValidity("");
    });
    var email = document.getElementById("email");
    email.addEventListener("invalid", function() {
        email.setCustomValidity("Please put your valid email. I won't abuse it ;)");
    });
    email.addEventListener("input", function() {
        email.setCustomValidity("");
    });
    var number = document.getElementById("number");
    number.addEventListener("invalid", function() {
        number.setCustomValidity("Please put your phone number.");
    });
    number.addEventListener("input", function() {
        number.setCustomValidity("");
    });
}