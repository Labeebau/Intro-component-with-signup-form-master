input = document.querySelectorAll(".inputs");
errorImage = document.querySelectorAll(".error-icon");
errorElement = document.querySelectorAll(".error-message");
document.getElementById("claim").addEventListener("click", function () {
    for (i = 0; i <= input.length; i++) {

        if (input[i].value === "") {
            input[i].style.border = "1px solid red";
            errorImage[i].classList.add("visible");
            errorElement[i].classList.add("visible");
        }
        else {
            input[i].style.border = "";
            errorImage[i].classList.remove("visible");
            errorElement[i].classList.remove("visible");
        }
    }

});
