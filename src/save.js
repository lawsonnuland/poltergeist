let saveData = {
    force: .01,
}

function loadFromLocal() {
    let gameData = JSON.parse(localStorage.getItem("ghostSave"));

    if (gameData !== null) {
        saveData = gameData;
    }
}
function saveToLocal() {
    localStorage.setItem("ghostSave", JSON.stringify(saveData));
}

export {saveData, loadFromLocal, saveToLocal}