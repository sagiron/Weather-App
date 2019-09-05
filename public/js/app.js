

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') 
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
  /// the .textContent is setting a string value to the variable which is going to be present in the index.hbs page
    messageOne.textContent = 'Loading...' // Showing  in the main page 
    messageTwo.textContent = '' // Clearing what have been showed in the main page

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error   // Printing the error message to the main page screen
            } else {
                messageOne.textContent = data.location //Setting the first message  to show the location followed by the 2nd message that 
                messageTwo.textContent = data.forecast // printing the forecast to the main screen
            }
        })
    })
})