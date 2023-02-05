import { saveData, loadFromLocal, saveToLocal} from "./save";
import { buttonManager } from "./ghostActions";
import './style.css';

console.log(saveData.force)

window.addEventListener('load', () => {
    loadFromLocal()
    buttonManager();
})

let saveGameLoop = window.setInterval(function() {
    saveToLocal()
}, 30000)