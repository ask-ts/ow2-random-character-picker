const allChar = [
    {role:"タンク", charName:"ラインハルト"},
    {role:"タンク", charName:"D.Va"},
    {role:"タンク", charName:"ウィンストン"},
    {role:"タンク", charName:"オリーサ"},
    {role:"タンク", charName:"ザリア"},
    {role:"タンク", charName:"シグマ"},
    {role:"タンク", charName:"ジャンカー・クイーン"},
    {role:"タンク", charName:"ドゥームフィスト"},
    {role:"タンク", charName:"ハザード"},
    {role:"タンク", charName:"マウガ"},
    {role:"タンク", charName:"ラマットラ"},
    {role:"タンク", charName:"レッキングボール"},
    {role:"タンク", charName:"ロードホッグ"},
    {role:"ダメージ", charName:"アッシュ"},
    {role:"ダメージ", charName:"ウィドウメイカー"},
    {role:"ダメージ", charName:"エコー"},
    {role:"ダメージ", charName:"フレイヤ"},
    {role:"ダメージ", charName:"キャスディ"},
    {role:"ダメージ", charName:"ゲンジ"},
    {role:"ダメージ", charName:"シンメトラ"},
    {role:"ダメージ", charName:"ジャンクラット"},
    {role:"ダメージ", charName:"ソジョーン"},
    {role:"ダメージ", charName:"ソルジャー76"},
    {role:"ダメージ", charName:"ソンブラ"},
    {role:"ダメージ", charName:"トールビョーン"},
    {role:"ダメージ", charName:"トレーサー"},
    {role:"ダメージ", charName:"ハンゾー"},
    {role:"ダメージ", charName:"バスティオン"},
    {role:"ダメージ", charName:"ファラ"},
    {role:"ダメージ", charName:"ベンチャー"},
    {role:"ダメージ", charName:"メイ"},
    {role:"ダメージ", charName:"リーパー"},
    {role:"サポート", charName:"アナ"},
    {role:"サポート", charName:"イラリー"},
    {role:"サポート", charName:"キリコ"},
    {role:"サポート", charName:"ジュノ"},
    {role:"サポート", charName:"ゼニヤッタ"},
    {role:"サポート", charName:"バティスト"},
    {role:"サポート", charName:"ブリギッテ"},
    {role:"サポート", charName:"マーシー"},
    {role:"サポート", charName:"モイラ"},
    {role:"サポート", charName:"ライフウィーバー"},
    {role:"サポート", charName:"ルシオ"}
];

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
    console.log("charRoleResult", charRoleResult);
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
    }
}