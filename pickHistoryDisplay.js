let count = 0;
function pickHistoryDisplay(role, character){
    count++;
    document.getElementById("pickHistory").innerHTML += 
    `<tr>
        <td class="text-center">${count}</td>
        <td class="text-center">${role}</td>
        <td class="text-center">${character}</td>
    </tr>`;
}