const form = document.querySelector("form")
const input = document.querySelector("input")
const errorText = document.querySelector("form .error p")
const errorImg = document.querySelector("form .error img")

function validateEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(input).toLowerCase())
}

function alertMsg() {
  input.style.borderColor = "hsl(0, 93%, 68%)"
  errorText.style.display = "block"
  errorImg.style.display = "block"
}

function clearAlert() {
  input.style.borderColor = "hsl(0, 36%, 70%)"
  errorText.style.display = "none"
  errorImg.style.display = "none"
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(input.value)) {
    alertMsg()
  } else {
    alert("Thank You For Subscribing!")
  }
})

input.addEventListener("keypress", () => {
  clearAlert()
})
