console.log("Deposit area");

function getInput(inputId) {
    const newAmount = document.getElementById(inputId);
    const newAmountValue = parseInt(newAmount.value);
    newAmount.value ='';
    return newAmountValue;
}

function getAmount(amountId){
    const amount = document.getElementById(amountId);
    const amountNum=  parseInt(amount.innerText);
    return amountNum;
}

function setValue(amountId,newAmount){
    const prevAmount = document.getElementById(amountId);
    prevAmount.innerText = newAmount
}


// Deposit Area Calculation

document.getElementById('btn-deposit').addEventListener('click',function(){

    // Deposit Amount

    const newAmountValue= getInput('dinput');
    const prevAmountValue = getAmount('damount');
    const depositTotal = prevAmountValue+newAmountValue;
    setValue('damount',depositTotal);
    const deposit = document.getElementById('damount');  
    deposit.innerText = depositTotal;
    
    //Update deposit Amount in Total Balance

    const totalBalance = getAmount('balance')+newAmountValue;    

    console.log(totalBalance);

    const balance = document.getElementById('balance');

    balance.innerText = totalBalance;


    
})

// WithDraw Area Calculation

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdraw = getInput('winput');
    const prevWithdraw = getAmount('wamount');


    const withdrawTotal = newWithdraw + prevWithdraw;

    const wAmount = document.getElementById('wamount');

    setValue('wamount',withdrawTotal);

    console.log(withdrawTotal)

    wAmount.innerText = withdrawTotal;

    //Update Balance

    const totalBalance = getAmount('balance')-newWithdraw;
    const balance = document.getElementById('balance');

    balance.innerText = totalBalance;

})

