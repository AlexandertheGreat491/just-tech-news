// this function handles the login submission
//function can POST the username, email, and password from the form to the server
async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email, 
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        //checks the response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText)
        }
    }
}

//listens fro the submit even from the form
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);