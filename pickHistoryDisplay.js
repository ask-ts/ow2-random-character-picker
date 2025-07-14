let count = 0;
let pickHistory = [];
function pickHistoryDisplay(role, character){
    let nowPick = {role:role,character:character};
    pickHistory.push(nowPick);
    if(pickHistory.length > 10){
        pickHistory.shift();
    }
    document.getElementById("pickHistory").innerHTML = "";
    for(let i = 0; i < pickHistory.length; i++){
        document.getElementById("pickHistory").innerHTML += 
        `<tr>
            <td class="text-center">${i + 1}</td>
            <td class="text-center">${pickHistory[i].role}</td>
            <td class="text-center">${pickHistory[i].character}</td>
        </tr>`;
    }
}