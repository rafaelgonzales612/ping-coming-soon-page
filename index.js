const notifyInput = document.getElementById("notify-input")
const notifyErrorEmpty = document.getElementById("notify-error-empty")
const notifyErrorIncorrect = document.getElementById("notify-error-incorrect")
const notifyValid = document.getElementById("notify-valid")
const notifyButton = document.getElementById("notify-button")

notifyButton.addEventListener("click", function() {
    let notifyInputValue = notifyInput.value
    let validEmail = validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (notifyInputValue == "") {
        notifyErrorEmpty.style.display = "block"
        notifyValid.style.display = "none"
        notifyErrorIncorrect.style.display = "none"
        notifyInput.style.border = "1px solid var(--color-lightred)"
        console.log("Button clicked!")
    } else if (!notifyInputValue.match(validEmail)) {
        notifyErrorIncorrect.style.display = "block"
        notifyValid.style.display = "none"
        notifyErrorEmpty.style.display = "none"
        notifyInput.style.border = "1px solid var(--color-lightred)"
        console.log("Invalid email address.")
    } else if (notifyInputValue.match(validEmail)) {
        notifyValid.style.display = "block"
        notifyErrorEmpty.style.display = "none"
        notifyErrorIncorrect.style.display = "none"
        notifyInput.style.border = "1px solid var(--color-lightgreen)"
        console.log("Email address is valid!")
    }
})