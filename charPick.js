let allChar = [];
fetch('character.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        allChar = data;
    })
const charRoleResult = document.getElementById("charRoleResult");
const charNameResult = document.getElementById("charNameResult");
const maxLoops = 30;

function charPick() {
    const selectedRole = document.getElementById("roleSelect").value;
    let charList = allChar;
    let delay = 50;
    let totalLoops = 0;
    
    if (selectedRole == "tank") {
        charList = allChar.filter(char => char.role == "タンク");
    } else if (selectedRole == "dmg") {
        charList = allChar.filter(char => char.role == "ダメージ");
    } else if (selectedRole == "sup") {
        charList = allChar.filter(char => char.role == "サポート");
    }
    spin(charList, delay, totalLoops);
}

function spin (charList, delay, totalLoops) {
    let randNum = Math.floor(Math.random() * charList.length);
    charRoleResult.innerHTML = charList[randNum].role;
    charNameResult.innerHTML = charList[randNum].charName;
    
    let latest_randNum = randNum;
    while (latest_randNum === randNum) {
        randNum = Math.floor(Math.random() * charList.length);
    }
    totalLoops++;
    if (totalLoops < maxLoops) {
        delay += delay * 0.07;
        setTimeout(spin, delay, charList, delay, totalLoops);
    } else {
        charRoleResult.innerHTML = charList[randNum].role;
        charNameResult.innerHTML = charList[randNum].charName;
        pickHistoryDisplay(charList[randNum].role, charList[randNum].charName);
    }
}