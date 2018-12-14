'use strict'

const theForm = document.getElementsByTagName("form")[0]
const theDiv = document.getElementsByClassName("builder")[0]
const ageInput = document.getElementsByTagName("input")[0]
ageInput.type = "number" // Requires user to input a number
const relationshipInput = document.getElementsByTagName("select")[0]
const smokerInput = document.getElementsByName("smoker")[0]
const addButton = document.getElementsByClassName("add")[0]
addButton.type = 'button' // prevents add button from submitting form.
const alert = document.createElement("h2")
const outputDiv = document.createElement("div")
theDiv.appendChild(alert)
theForm.appendChild(outputDiv)

addButton.addEventListener("click", (event) => {
  console.log('Add Button Clicked')
  if(+ageInput.value <= 0) {
      alert.innerHTML = "Please enter an age that is greater than 0."
      return false
  } else if (!relationshipInput.value) {
      alert.innerHTML = "Please select a relationship status."
      return false
  } else {
      console.log(typeof(+ageInput.value))
      alert.innerHTML = ''
      let newPersonDiv = document.createElement("div")
      newPersonDiv.setAttribute("style", "border: 3px solid black;")
      let outputAge = document.createElement("p")
      let outputRelationship = document.createElement("p")
      let outputSmoker = document.createElement("p")
      outputAge.innerHTML = "Age: " + ageInput.value
      outputRelationship.innerHTML = "Relationship: " + relationshipInput.value
      outputSmoker.innerHTML = "Smoker? " + smokerInput.value
      outputDiv.appendChild(newPersonDiv)
      newPersonDiv.appendChild(outputRelationship)
      newPersonDiv.appendChild(outputAge)
      newPersonDiv.appendChild(outputSmoker)
  }
})

theForm.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log('Form Submitted')
})
