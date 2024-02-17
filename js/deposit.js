document.getElementById('btn-submit').addEventListener('click', function () {
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);

    depositFiled.value = '';
    if (isNaN(newDepositAmount)) {
        alert('please given valid number');
        return;
    }

    // total deposit calculation
    const depositTotalElement = document.getElementById('deposit-total');
    const perviousDepositTotalString = depositTotalElement.innerText;
    const perviousDepositTotal = parseFloat(perviousDepositTotalString);
    const currentDepositTotal = perviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // total Balance Amount calculation
    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceTotalString);
    const currentBalanceTotal = perviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})