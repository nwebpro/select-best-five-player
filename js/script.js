const playerArray = [];

function displayPlayer(selectPlayer){
    const tableBody = document.getElementById('select-players');
    tableBody.innerHTML = '';

    let count = 0;

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
    if(playerArray.length <= 5){
        displayPlayer(playerArray);
    }else{
        alert('Sorry, you have already added 5 players 😶');
        return;
    }
    return playerArray;
}

// button disable after click
const buttons = document.getElementsByClassName('disabled');
for (const button of buttons) {
    button.addEventListener('click', function(event){
        event.target.classList.add('disabled-btn');
    });
}

document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerCost = getInputFieldValueById('total-player');

    const playerLength = playerArray.length;
    const calculate = playerLength * perPlayerCost;
    if (isNaN(perPlayerCost)) {
        alert("Please enter a valid amount 😶");
        return;
    }else if(calculate <= 0){
        alert('Please enter a valid amount 😶');
        return;
    }
    setTextElementValueById('player-expenses', calculate);
})