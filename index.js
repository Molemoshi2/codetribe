function handleFormSubmit(event) {
    console.log(event)
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")
    // here we check if the email input value is valid
    const isEmailValid = emailInput.value !== '' && emailInput.validity.valid
    // here we check if message is empty
    const isMessageValid = messageInput.value.trim() !== ''

    // check for the validity of both the email and the message
    const isFormValid = isEmailValid && isMessageValid

    //actions to take if the form is valid or not
    if (isFormValid) {

    }
    else {
        if(isEmailValid !== true) {
            //display the email span
            const emailSpan = document.getElementById('Email-span')
            emailSpan.classList.remove('hidden')
        }
        if (isMessageValid !== true){
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
}