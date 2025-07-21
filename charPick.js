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
let spinIntervalId;
let isPicking = false;
let isStopping = false;
let startSpin;
let latest_randNum;
const endSpinTime = 5000;
const endDelayTime = 500;
const defaultDelay = 50;

function charPick() {
    const selectedRole = document.getElementById("roleSelect").value;
    let charList = allChar;
    let delay = defaultDelay;
    
    if (selectedRole == "tank") {
        charList = allChar.filter(char => char.role == "タンク");
    } else if (selectedRole == "dmg") {
        charList = allChar.filter(char => char.role == "ダメージ");
    } else if (selectedRole == "sup") {
        charList = allChar.filter(char => char.role == "サポート");
    }
    if(!isPicking){
        startSpin = performance.now();
        spinIntervalId = setInterval(spin, delay, charList, delay);
    } else if(!isStopping){
        document.getElementById("pickButton").textContent = "停止中...";
        document.getElementById("pickButton").disabled = true;
        spinDelay(charList, delay);
    }
}

// ランダムピック開始関数
function spin (charList, delay) {
    spinningTime = performance.now();
    isPicking = true;
    document.getElementById("pickButton").textContent = "ストップ！";
    let randNum = Math.floor(Math.random() * charList.length);
    charRoleResult.textContent = charList[randNum].role;
    charNameResult.textContent = charList[randNum].charName;
    // 前回と同じキャラが選択されないようにする
    while (latest_randNum === randNum) {
        randNum = Math.floor(Math.random() * charList.length);
    };
    latest_randNum = randNum;
    if(spinningTime - startSpin > endSpinTime){
        document.getElementById("pickButton").textContent = "停止中...";
        document.getElementById("pickButton").disabled = true;
        spinDelay(charList, delay);
    };
}

// ランダムピックを徐々に遅くする関数
function spinDelay(charList, delay){
    isStopping = true;
    clearInterval(spinIntervalId);
    let randNum = Math.floor(Math.random() * charList.length);
    // 前回と同じキャラが選択されないようにする
    while (latest_randNum === randNum) {
        randNum = Math.floor(Math.random() * charList.length);
    };
    latest_randNum = randNum;
    charRoleResult.textContent = charList[randNum].role;
    charNameResult.textContent = charList[randNum].charName
    if(delay > endDelayTime){
        spinStop(charList);
    } else {
        delay *= 1.2;
        setTimeout(spinDelay, delay, charList, delay)
    }
}

// ランダムピック停止関数
function spinStop(charList){
    let randNum = Math.floor(Math.random() * charList.length);
    clearInterval(spinIntervalId);
    charRoleResult.textContent = charList[randNum].role;
    charNameResult.textContent = charList[randNum].charName;
    pickHistoryDisplay(charList[randNum].role, charList[randNum].charName);
    isPicking = false;
    isStopping = false;
    document.getElementById("pickButton").disabled = false;
    document.getElementById("pickButton").textContent = "ピック！";
}