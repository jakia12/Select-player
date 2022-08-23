
// calculateAll(perPlayerExp);

const calculateBtn = document.getElementsByClassName('calc_btn')[0];

//calculate the perplayer total once clicking the calculate button

//store the total expenses to the variable for later acces to the data
let total = "";

calculateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const playerLen = document.getElementsByClassName('player_len')[0].innerText;

    console.log(playerLen);

    const playerInput = document.getElementById('perPlayerInput');
    console.log(playerInput.value);

    const playerInputVal = parseInt(playerInput.value);

    //validate the input data 
    if (playerInput.value == '') {
        alertEmpty();

    } else if (isNaN(playerInput.value)) {
        alertIsNan();
        playerInput.value = '';

    } else if (playerInput.value < 0) {
        alertNegNum();
        playerInput.value = '';

    } else {
        const perPlayerExp = playerInputVal * playerLen;
        // console.log(perPlayerExp);

        const totalAmount = document.getElementById('totalAmount');

        //push the data inside of the span element
        totalAmount.innerText = perPlayerExp;

        playerInput.value = '';
    }

    //push the totalamount to the total variable
    total += totalAmount.innerText;

});


//all expenses calculation together

const calcTotalBtn = document.getElementById('calctotal');

//calculate all the expenses total once clicking the calculate total button

calcTotalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    //get the manager input value
    const managerInput = document.getElementById('managerInput');
    const managerInputVal = parseFloat(managerInput.value);

    //get the coach input value
    const coachInput = document.getElementById('coachInput');
    const coachInputval = parseFloat(coachInput.value);

    //validate the input value

    if (isNaN(managerInput.value) || (isNaN(coachInput.value))) {
        alertIsNan();
        managerInput.value = '';
        coachInput.value = '';

    } else if (managerInput.value == '' || (coachInput.value == '')) {
        alertEmpty();

    } else if ((managerInput.value < 0 && managerInput.value <= -1) || (coachInput.value < 0 || coachInput.value <= -1)) {
        alertNegNum();

        managerInput.value = '';
        coachInput.value = '';

    } else {
        //get the span element by id
        const expensesTotal = document.getElementById('expensesTotal');

        //all the total expenses's sum
        const totalExpensesAmount = parseFloat(total) + managerInputVal + coachInputval;

        expensesTotal.innerText = totalExpensesAmount;

        managerInput.value = '';
        coachInput.value = '';
    }




});




