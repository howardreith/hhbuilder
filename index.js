'use strict'

const theForm = document.getElementsByTagName("form")[0]

theForm.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log('Form Submitted')
})
