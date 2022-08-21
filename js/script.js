const playerArray = [];

function displayPlayer(selectPlayer){
    const tableBody = document.getElementById('select-players');
    tableBody.innerHTML = '';

    for (let i = 0; i < selectPlayer.length; i++) {
        if(i < 5){
            const name = playerArray[i];
            // Create tr element
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <th class="pr-5">${i + 1}</th>
                <td>${name}</td>
            `
            tableBody.appendChild(tr);
        }else{
            alert('Sorry, you have already added 5 players!');
        }
        
    }

}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    displayPlayer(playerArray);
}

// button disable after click
const buttons = document.getElementsByClassName('disabled');
for (const button of buttons) {
    button.addEventListener('click', function(event){
        event.target.classList.add('disabled-btn');
    });
}