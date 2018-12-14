// Assign variables to the important HTML elements.
const theForm = document.getElementsByTagName("form")[0]
const theDiv = document.getElementsByClassName("builder")[0]
const ageInput = document.getElementsByTagName("input")[0]
ageInput.type = "number" // Requires user to input a number
const relationshipInput = document.getElementsByTagName("select")[0]
const smokerInput = document.getElementsByName("smoker")[0]
const addButton = document.getElementsByClassName("add")[0]
addButton.type = 'button' // prevents add button from submitting form.

// Add alert element to the DOM
const alert = document.createElement("h2")
theDiv.insertBefore(alert, theDiv.firstChild)

// Add output div to the DOM to display the family members
const outputDiv = document.createElement("div")
theForm.appendChild(outputDiv)

// Define our ID counter for later ID tracking of family members
let idCounter = 0

// Define our object that will later be used for our JSON API call.
const familyObject = { family: [] }

// Define the function for deleting family members.
const deleteEntry = function (event) {
  let objectToDelete = familyObject.family.find(person => person.id == event.target.parentElement.id)
  // This deletes the entry from the familyObject.
  familyObject.family.splice(familyObject.family.indexOf(objectToDelete), 1)
  // This removes the entry from the DOM.
  event.target.parentElement.remove()
}

addButton.addEventListener("click", (event) => {
  // Verify the age input is greater than 0.
  if(+ageInput.value <= 0) {
      alert.innerHTML = "Please enter an age that is greater than 0."
      return false
  // Verify the relationship has been input.
  } else if (!relationshipInput.value) {
      alert.innerHTML = "Please select a relationship."
      return false
  } else {
      // Increase the ID counter for later assigning to this entry.
      idCounter++
      // Remove any extraneous alerts.
      alert.innerHTML = ''
      // Create new elements to display the new member's information.
      let newPersonDiv = document.createElement("div")
      newPersonDiv.setAttribute("style", "border: 3px solid black; padding: 4px;")
      let outputAge = document.createElement("p")
      let outputRelationship = document.createElement("p")
      let outputSmoker = document.createElement("p")
      // Create this div's delete button.
      let deleteButton = document.createElement("button")
      // Add the click listener that runs our deleteEntry function.
      deleteButton.addEventListener('click', deleteEntry, false)
      // Populate our new elements with the data input by the user.
      outputAge.innerHTML = "Age: " + ageInput.value
      outputRelationship.innerHTML = "Relationship: " + relationshipInput.value
      outputSmoker.innerHTML = "Smoker? " + smokerInput.checked
      outputDiv.appendChild(newPersonDiv)
      newPersonDiv.appendChild(outputRelationship)
      newPersonDiv.appendChild(outputAge)
      newPersonDiv.appendChild(outputSmoker)
      // Add details to delete button and append it to the DOM.
      deleteButton.type = 'button' // Prevents delete buttom from submitting form
      deleteButton.innerHTML = 'Delete'
      newPersonDiv.appendChild(deleteButton)
      // Assign our id to our div for use in our deleteEntry function
      newPersonDiv.id = idCounter
      // Add the new entry to the familyObject
      familyObject.family.push({ id: idCounter, age: ageInput.value, relationship: relationshipInput.value, smoker: smokerInput.checked})
      // Clear the input form so it's ready for another entry
      ageInput.value = null
      relationshipInput.value = null
      smokerInput.checked = false
  }
})

// Submit form event listener
theForm.addEventListener("submit", (event) => {
  event.preventDefault()
  // Convert familyObject to JSON and store it in a variable.
  let familyJSON = JSON.stringify(familyObject)
  // Populate the debug element with the resulting JSON.
  document.getElementsByClassName('debug')[0].innerHTML = familyJSON
})
