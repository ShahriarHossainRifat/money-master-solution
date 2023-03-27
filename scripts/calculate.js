document.getElementById("calculate-button").addEventListener("click", function(){
    const incomeElement = document.getElementById("income-field")
    const incomeAmountString = incomeElement.value
    const incomeAmount = parseFloat(incomeAmountString)

    const foodExpenseElement = document.getElementById("food-field")
    const foodExpenseString = foodExpenseElement.value
    const foodExpense = parseFloat(foodExpenseString)

    const rentExpenseElement = document.getElementById("rent-field")
    const rentExpenseString = rentExpenseElement.value
    const rentExpense = parseFloat(rentExpenseString)

    const clothesExpenseElement = document.getElementById("clothes-field")
    const clothesExpenseString = clothesExpenseElement.value
    const clothesExpense = parseFloat(clothesExpenseString)

    const totalExpense = foodExpense + rentExpense + clothesExpense
    const balance = incomeAmount - totalExpense

    const totalExpenseElement = document.getElementById("total-expense")
    totalExpenseElement.innerText = totalExpense

    const balanceElement = document.getElementById("balance")
    balanceElement.innerText = balance
})

document.getElementById("save-button").addEventListener("click", function(){
    const savingsPercentElement = document.getElementById("saving-field")
    const savingsPercentString = savingsPercentElement.value
    const savingsPercent = parseFloat(savingsPercentString)

    const incomeElement = document.getElementById("income-field")
    const incomeAmountString = incomeElement.value
    const incomeAmount = parseFloat(incomeAmountString)

    const totalSaving = incomeAmount * (savingsPercent / 100)

    const savingAmountElement = document.getElementById("saving-amount")
    savingAmountElement.innerText = totalSaving

    const balanceElement = document.getElementById("balance")
    const balanceTotalString = balanceElement.innerText
    const balanceTotal = parseFloat(balanceTotalString)

    const remainingAmount = balanceTotal - totalSaving

    const remainingTotalElement = document.getElementById("remaining-amount")
    remainingTotalElement.innerText = remainingAmount
})