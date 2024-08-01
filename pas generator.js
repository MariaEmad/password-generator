const lenghtSlider = document.querySelector(".pass-length input")
const generateBtn = document.querySelector(".generate-btn")
const options = document.querySelectorAll(".option input")
const passwordInput = document.querySelector(".input-box input")
const passIndicator = document.querySelector(".pass-indicator")
const copyIcon =document.querySelector(".input-box span")
lenghtSlider.addEventListener("input", updateSlider)
let characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    symbols:"^!$%&|[](){}:;.,*+-#@<>~"
}
function generatePassword() {
    let staticpas = ""
    let randomPass = ""
    let excludeDoublecate = false
    passlenght =lenghtSlider.value
    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticpas += characters[option.id]
                
            } else if (option.id === "exc-duplicate") {

                excludeDoublecate= true
            } else { option.id === "spaces" }
            staticpas +=`  ${staticpas} `

        }
    });
    for (let i = 0; i < passlenght; i++) {
       let randomchar = staticpas[Math.floor(Math.random() * staticpas.length)]
        if (excludeDoublecate) {
            !randomPass.includes(randomchar) || randomchar == " " ? randomPass += randomchar : i--;
        } else {
            randomPass += randomchar
        }
        
    }

    passwordInput.value = randomPass
}
function upadatePassIndicator() {
    passIndicator.id = lenghtSlider.value <= 8? "weak" : lenghtSlider. value <= 16? "medium" :"strong"
}
copyIcon.onclick = function(){
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.innerHTML ="coppied"
    setTimeout(function () {
        
        copyIcon.innerHTML =`<i class="fa-solid fa-copy">`
    },1500)
}
function updateSlider () {
    document.querySelector(".pass-length span").innerHTML = lenghtSlider.value
    generatePassword()
    upadatePassIndicator()
}
updateSlider() 
generateBtn.addEventListener("click",generatePassword)
//https://www.youtube.com/watch?v=fD8gm-DhjXk&list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3&index=8
//20