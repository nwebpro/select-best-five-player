const playerArray = [];

function displayPlayer(selectPlayer){
    const tableBody = document.getElementById('select-players');
    tableBody.innerHTML = '';

    for (let i = 0; i < selectPlayer.length; i++) {
        const name = playerArray[i];
        
        // Create tr element
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th class="pr-5">${i + 1}</th>
            <td>${name}</td>
        `
        tableBody.appendChild(tr);
    }

}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    
    displayPlayer(playerArray);
}
