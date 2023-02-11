import { saveData } from "./save";
import { messages, displayMessages } from "./log";

const buildForce = document.querySelector('.build-force');
const forceBar = document.querySelector('.force-bar');
const log = document.querySelector('.log');

function buttonManager() {
    let buildForceState = 0;

    buildForce.addEventListener('click', ()=>{
        if(buildForceState<100) {
            buildForceState += 10;
            forceBar.style.width = buildForceState + '%';
            displayMessages(buildForceState);
        }
    })
}

function passives() {

}

export {buttonManager, passives}