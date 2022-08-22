const playerArray = [];

// Get Player List Click by Select Button
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

// Select Player
function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    if(playerArray.length < 5){
        playerArray.push(playerName);
        displayPlayer(playerArray);
    }else{
        alert('Sorry, you have already added 5 players 😶');
        return;
    }
}

// button disable after click
const buttons = document.getElementsByClassName('disabled');
for (const button of buttons) {
    button.addEventListener('click', function(event){
        event.target.classList.add('disabled-btn');
    });
}

// Per Player Cost Calculate
document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerCost = getInputFieldValueById('total-player');

    const playerLength = playerArray.length;
    const calculate = playerLength * perPlayerCost;

    // Error Handle
    if (isNaN(perPlayerCost)) {
        alert("Please enter a valid amount 😶");
        return;
    }else if(calculate <= 0){
        alert('Please enter a valid amount 😶');
        return;
    }
    setTextElementValueById('player-expenses', calculate);
})


// Total Calculate Cost
document.getElementById('calculate-total').addEventListener('click', function(){
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');
    const playerExpenses = getTextElementValueById('player-expenses');
    
    const calculateTotal = managerCost + coachCost + playerExpenses;

    // Error Handle
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("Please enter a valid amount 😶");
        return;
    }else if(calculateTotal <= 0){
        alert('Please enter a valid amount 😶');
        return;
    }
    
    setTextElementValueById('total-expenses', calculateTotal);

})