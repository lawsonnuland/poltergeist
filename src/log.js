let messages = []

function displayMessages() {
    const messageDisplay = document.querySelector('.log');
    while (messageDisplay.firstChild) {
        messageDisplay.removeChild(messageDisplay.firstChild)
    }
    for (let i=0;i<messages.length && i<10; i++) {
        let currentMessage = document.createElement('div');
        currentMessage.innerHTML = `<p>${messages[i]}</p>`
        messageDisplay.appendChild(currentMessage);
    }
}

export {messages, displayMessages}