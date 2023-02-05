import { saveData } from "./save";
import { messages, displayMessages } from "./log";

function buttonManager() {
    const buildForce = document.querySelector('.build-force');
    const forceBar = document.querySelector('.force-bar');
    const log =document.querySelector('.log');
    
    let buildForceState =0;

    buildForce.addEventListener('click', ()=>{
        buildForceState += 10;
        forceBar.style.width = buildForceState + '%';
        messages.unshift(`${buildForceState}`);
        displayMessages();
    })
}

export {buttonManager}