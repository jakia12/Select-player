// calculateAll(perPlayerExp);

const calculateBtn = document.getElementsByClassName('calc_btn')[0];

//calculate the perplayer total once clicking the calculate button

let total = "";
calculateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const playerLen = document.getElementsByClassName('player_len')[0].innerText;

    console.log(playerLen);

    const playerInput = document.getElementById('perPlayerInput');

    const playerInputVal = parseInt(playerInput.value);

    //validate the input data 
    if (isNaN(playerInputVal)) {
        alert('Please provide a number');
        playerInput.value = '';

    } else if (playerInputVal == '') {
        alert('Plase add some value to the field');

    } else if (playerInputVal < 0) {
        alert('Plase add some positive value to the field');
        playerInput.value = '';

    } else {
        const perPlayerExp = playerInputVal * playerLen;
        // console.log(perPlayerExp);

        const totalAmount = document.getElementById('totalAmount');

        //push the data inside of the span element
        totalAmount.innerText = perPlayerExp;

        playerInput.value = '';
    }

    //store the total expense to use later on
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
    // if (managerInputVal !== 'number') {
    //     alert('Please provide a number');
    //     managerInput.value = '';

    // } else if (isNaN(managerInputVal) !== 'number') {
    //     alert('Please provide a number');
    //     managerInput.value = '';

    // }
    if (isNaN(managerInputVal) || isNaN(coachInputval)) {
        alert('Please provide a number');
        managerInput.value = '';
        coachInput.value = '';

    } else if (managerInputVal == '' || coachInputval == '') {
        alert('Plase add some value to the field');

    } else if (managerInputVal < 0 || coachInputval < 0) {
        alert('Plase add some positive value to the field');
        managerInput.value = '';
        coachInput.value = '';

    }
    else {
        //get the span element by id
        const expensesTotal = document.getElementById('expensesTotal');

        //all the total expenses's sum
        const totalExpensesAmount = parseFloat(total) + managerInputVal + coachInputval;

        expensesTotal.innerText = totalExpensesAmount;

        managerInput.value = '';
        coachInput.value = '';
    }




});




