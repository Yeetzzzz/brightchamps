function load() {
    const INPUT_SCREEN = document.querySelector("#screen");
    const BTNS = document.querySelectorAll("#calculator span");

    let operators = ["+", "-", "x", "/"];

    for (let i = 0; i < BTNS.length; i++) {
        let element = BTNS[i];

        element.addEventListener("click", function () {
            let buttonValue = element.innerHTML;
            let input = INPUT_SCREEN.innerHTML;

            console.log(buttonValue);

            switch (buttonValue) {
                case "C":
                    INPUT_SCREEN.innerHTML = "";
                    break;
                case "=":
                    INPUT_SCREEN.innerHTML = eval(INPUT_SCREEN.innerHTML);
                    break;
                default:
                    INPUT_SCREEN.innerHTML += buttonValue.toString();
                    break;
            }
        });
    }
}