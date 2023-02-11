let messages = []

function displayMessages(newMessage) {
    const messageDisplay = document.querySelector('.log');
    messages.unshift(newMessage);
    while (messageDisplay.firstChild) {
        messageDisplay.removeChild(messageDisplay.firstChild)
    }
    for (let i=0;i<messages.length && i<10; i++) {
        let currentMessage = document.createElement('div');
        currentMessage.classList.add('message')
        currentMessage.innerHTML = `<p>${messages[i]}</p>`
        messageDisplay.appendChild(currentMessage);
    }
}

export {messages, displayMessages}