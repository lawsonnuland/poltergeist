import { saveData, loadFromLocal, saveToLocal} from "./save";
import { buttonManager, passives } from "./ghostActions";
import './style.css';

console.log(saveData.force)

window.addEventListener('load', () => {
    loadFromLocal()
    buttonManager();
})

let gameUpdate = window.setInterval(function() {
    passives();
}, 100)

let saveGameLoop = window.setInterval(function() {
    saveToLocal()
}, 30000)