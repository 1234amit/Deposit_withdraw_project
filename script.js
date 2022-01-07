document.getElementById('deposit-button').addEventListener('click', function() {
    // get amount form deposit input
    const dipositInput = document.getElementById('deposit-input');
    const NewdipositAmount = dipositInput.value;
    console.log(NewdipositAmount)

    const dipositTotal = document.getElementById('diposit-total');
    console.log(dipositTotal.innerText)
    const previousDipositAmount = dipositTotal.innerText;
    const newDipositTotal = parseFloat(previousDipositAmount) + parseFloat(NewdipositAmount)
    console.log(newDipositTotal)

    dipositTotal.innerText = newDipositTotal;

     //update account balance
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const perviousBalanceTotal = parseFloat(balanceTotalText)

     const newBalanceTotal = perviousBalanceTotal + newDipositTotal ;
     balanceTotal.innerText = newBalanceTotal ;
    dipositInput.value = '';
})


// withdraw functionality
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('Withdraw-input');
    const NewwithdrawAmount = withdrawInput.value;

    const withdrowTotal = document.getElementById('withdraw-total');
    console.log(withdrowTotal.innerText)
    const previousWithdrawAmount = withdrowTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(NewwithdrawAmount)
    console.log(newWithdrawTotal)

    withdrowTotal.innerText = newWithdrawTotal;

    // updated balance total
    const withdrawtotalBalance = document.getElementById('balance-total')
    const withdrawtotalBalanceText = withdrawtotalBalance.innerText;
    const withdrawPreviousBalanceTotal = parseFloat(withdrawtotalBalanceText)
    const withdrawNewBalanceTotal = withdrawPreviousBalanceTotal - newWithdrawTotal;
    withdrawtotalBalance.innerText = withdrawNewBalanceTotal; 
    withdrawInput.value = '';
    
})