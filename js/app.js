const players = [
    { id: 1, name: 'Lionel Messi', image: 'images/pl1.png', countGoal: 36, countAssist: 120 },
    { id: 2, name: 'Neymar Jr', image: 'images/pl2.png', countGoal: 36, countAssist: 120 },
    { id: 3, name: 'Kylian Mbappé', image: 'images/pl3.png', countGoal: 36, countAssist: 120 },
    { id: 4, name: 'Vítor Machado', image: 'images/pl4.png', countGoal: 36, countAssist: 120 },
    { id: 5, name: 'Sergio Ramos', image: 'images/pl5.png', countGoal: 36, countAssist: 120 },
    { id: 6, name: 'Renato Sanches', image: 'images/pl6.png', countGoal: 36, countAssist: 120 },
    { id: 7, name: 'Cristiano Ronaldo', image: 'images/pl7.png', countGoal: 36, countAssist: 120 },
    { id: 8, name: 'Gerard Moreno', image: 'images/pl8.png', countGoal: 36, countAssist: 120 },
    { id: 9, name: 'Ruben Dias', image: 'images/pl9.png', countGoal: 36, countAssist: 120 },
];

const cardRows = document.querySelector('.card_rows');
const cardRow = document.createElement('div');
cardRow.classList.add('card_row', 'row');



const displayPlayers = (array) => {
    let html = '';
    array.forEach(({ id, name, image, countAssist, countGoal }) => {

        /*
         let socialLinks = ''; 
        social.map(({ link, name }, idx, social) => {
          socialLinks += `<a key=${name} href=${link} target="_blank" rel="noopener noreferrer">
                   ${social.length + 1 !== idx && idx !== 0 ? `, ${name}` : name}
                 </a>`
        })*/

        const card = `
      <div class="col-md-4 col-sm-6 player_col " id="${id} ">
      <div class="card border bg-dark">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body text-center">
              <h3 class=" text-light player_name fw-semibold lh-base text-capitalize ">
                  ${name}</h3>
              <div class="cart_info my-2">
                  <span class="goal_count count text-light text-capitalize  " >${countGoal} Goal</span>
                  <span class="text-light font-bold mx-2 dot ">.</span>
                  <span class="assist_count count   text-capitalize ">
                  ${countAssist} Assist</span>
              </div>
              <a href="" class="select_btn btn ">Select</a>
          </div>
      </div>
  </div>
      `;

        html += card
    })
    cardRow.innerHTML = html;
    cardRows.appendChild(cardRow);
}

displayPlayers(players);


//cart products

const selectBtn = document.getElementsByClassName('select_btn');

for (let btns of selectBtn) {
    const btn = btns;
    btn.addEventListener('click', selectBtnClicked);

}

let cart = [];

function selectBtnClicked(event) {
    event.preventDefault();
    event.stopPropagation();

    const playerItem = event.target.parentElement;
    const name = playerItem.parentElement.getElementsByClassName('player_name')[0].innerHTML;

    let playerArr = {
        name: name
    }

    cart.push(playerArr);

    addPlayerList(cart)

}


function addPlayerList(array) {

    const playerRows = document.getElementsByClassName('player_rows')[0];
    const playerRow = document.createElement('ul');
    playerRow.classList.add('player_row');

    array.forEach((list, index) => {
        playerRow.innerHTML = `
        <li class="text-white player_list font-normal lh-base text-capitalize">
        <span class="num_spacing"> ${index + 1}.
        </span>${list.name}</li>
        `;
    });

    playerRows.appendChild(playerRow);

}














