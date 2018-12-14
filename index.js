'use strict'

const theForm = document.getElementsByTagName("form")[0]
const theDiv = document.getElementsByClassName("builder")[0]
const alert = document.createElement("h2")
const ageInput = document.getElementsByTagName("input")[0]
const relationshipInput = document.getElementsByTagName("select")[0]
theDiv.appendChild(alert)

console.log(relationshipInput)

theForm.addEventListener("submit", (event) => {
  event.preventDefault()
  if(+ageInput.value <= 0) {
      alert.innerHTML = "Please enter an age greater than 0."
  } else {
      alert.innerHTML = ''
      if (!relationshipInput.value) {
        alert.innerHTML = "Please select a relationship status."
      } else {
        alert.innerHTML = ''
  }
  console.log(relationshipInput.value)
  console.log('Form Submitted')

}
})
