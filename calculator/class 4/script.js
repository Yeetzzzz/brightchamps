function load() {
    const INPUT_SCREEN = document.querySelector("#screen");
    const BTNS = document.querySelectorAll("#calculator span");

    let operators = ["+", "-", "x", "/"];

    for (let i = 0; i < 17; i++) {
        let element = BTNS[i];

        element.addEventListener("click", function () {
            let buttonValue = element.innerHTML;
            let input = INPUT_SCREEN.innerHTML;

            console.log(buttonValue);

            switch (buttonValue) {
                case "C":
                    break
                case "=":
                    break
                case "+":
                    break
                case "-":
                    break
                case "x":
                    break
                case "/":
                    break
                case "0":
                    break
                case "1":
                    break
                case "2":
                    break
                case "3":
                    break
                case "4":
                    break
                case "5":
                    break
                case "6":
                    break
                case "7":
                    break
                case "8":
                    break
                case "9":
                    break
            }
        });
    }
}