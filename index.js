let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
            e.fadeIn(100).fadeOut(100);
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector("input").value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});
