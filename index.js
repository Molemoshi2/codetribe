// defining the function that will be called when the form is sumitted
function HandleEventSubmit(event)
{
    event.preventDefault();
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // check that the name input is not empty
    let isnameValid = false;
    if (fname.value.trim() !== '')
    {
        isnameValid = true
    }
    else
     {
        isnameValid = false
    }
    // validity of the email entered
    console.log(isnameValid)
    let isEmailValid = false;
    if (email.value !== '')
    {
        isEmailValid = true
    }
    else
    {
        isEmailValid = false
    }

    // check that the message input is entered
    let ismessageValid = false;
    if (message.value.trim() !== '')
    {
        ismessageValid = true
    }
    else
     {
        ismessageValid = false
     }

     //confirm the validity of the whole form
     const isformValid = isEmailValid && ismessageValid

     if (isformValid){
        //grab the data from the form, this part doesnt seem to be working im not sure where i went wrong
        const formData = new FormData(event.target)
        console.log(formData)
        fetch('https://formspree.io/f/mnqeloob',
        {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }

        }
    )
    .then(response => response.json())
    .then( data =>
    {
        if(data.ok){
            alert('Email sent')
        }
    })
     }
     else
     {
        //show error mssages
        if (isnameValid !== true){
            //display error msg
            const nameSpan = document.getElementById('name_error')
            nameSpan.classList.remove('error')
        }
        if (isEmailValid !== true){
            //display error msg
            const emailSpan = document.getElementById('Email-span')
            emailSpan.classList.remove('error')
        }
        if (ismessageValid !== true){
            //display error msg
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('error')
        }
     }
}


