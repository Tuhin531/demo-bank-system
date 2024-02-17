document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please given valid number')
        return;
    }
    // total withdraw calculation
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const perviousWithdrawTotalString = withdrawTotalElement.innerText;
    const perviousWithdrawTotal = parseFloat(perviousWithdrawTotalString);

    // total Balance calculation
    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceTotalString);

    // clear the deposit input value
    if (newWithdrawAmount > perviousBalanceTotal) {
        alert('Invalid Amount');

        return;
    }

    const currentWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = perviousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})