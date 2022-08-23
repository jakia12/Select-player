// calculateAll(perPlayerExp);

const calculateBtn = document.getElementsByClassName('calc_btn')[0];


let result = '';
calculateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();



    const playerLen = document.getElementsByClassName('player_len')[0].innerText;

    console.log(playerLen);

    const playerInput = document.getElementById('perPlayerInput');

    const playerInputVal = parseFloat(playerInput.value);


    const perPlayerExp = playerInputVal * playerLen;
    // console.log(perPlayerExp);

    const totalAmount = document.getElementById('totalAmount');

    result += perPlayerExp;
    totalAmount.innerText = result;


    playerInput.value = '';

    return result;

});


//all expenses calculation together

const calcTotal = document.getElementById('calctotal');

calcTotal.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();



});

