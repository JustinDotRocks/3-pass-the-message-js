
    const form = document.getElementById('message-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        const messageInput = document.getElementById('messaging-input')
        const noInputAlert = document.getElementById('message-error-alert')
        const messageOutput = document.getElementById('message-output')
    
        if (messageInput.value === '') {
            noInputAlert.classList.add('show')
            setTimeout(() => {
                noInputAlert.classList.remove('show')
            }, 2000)
            console.log('Dont show')
        } else {
            messageOutput.textContent = messageInput.value
            messageInput.value = ''
            console.log('show')
        }
    
    });