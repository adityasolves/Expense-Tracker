document.addEventListener('DOMContentLoaded', () => {

    const balanceDiv = document.getElementById('balance');
    const incomeDiv = document.getElementById('income');
    const expenseDiv = document.getElementById('expense');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const submitBtn = document.getElementById('submitbtn');
    const deleteBtn = document.getElementById('deletebtn');
    const listDiv = document.getElementById('transaction-list');

    // Initialize variables by checking localStorage
    let incomeAmt = Number(localStorage.getItem('incomeAmt')) || 0;
    let expenseAmt = Number(localStorage.getItem('expenseAmt')) || 0;
    
    incomeDiv.textContent = `$${incomeAmt}`;
    expenseDiv.textContent = `$${Math.abs(expenseAmt)}`;
    balanceDiv.textContent = `$${incomeAmt + expenseAmt}`;

    // Show saved transactions on page load
    showExp();

    submitBtn.addEventListener('click', submitButton);
    deleteBtn.addEventListener('click', deleteAll)

    function submitButton(event) {
        event.preventDefault();
        updateIncome();
        updateExpense();
        updateBalance();
        updateList();
        saveData();
        amountInput.value = '';
        descriptionInput.value = '';
    }

    function updateIncome() {
        if (amountInput.value >= 0) {
            incomeAmt = Number(amountInput.value) + Number(incomeAmt);
            incomeDiv.textContent = `$${incomeAmt}`;
        }
    }

    function updateExpense() {
        if (amountInput.value < 0) {
            expenseAmt = Number(amountInput.value) + Number(expenseAmt);
            expenseDiv.textContent = `$${Math.abs(expenseAmt)}`;
        }
    }

    function updateBalance() {
        balanceDiv.textContent = `$${incomeAmt + expenseAmt}`;
    }

    function updateList() {
        if (amountInput.value && descriptionInput.value) {
            let li = document.createElement("li");
            li.textContent = `${descriptionInput.value} ==> $${amountInput.value}`;
            listDiv.appendChild(li);
            if (amountInput.value < 0) {
                li.classList.add('expense');
            }
        }
    }

    // Save income, expense, balance, and transaction list to localStorage
    function saveData() {
        localStorage.setItem('incomeAmt', incomeAmt);
        localStorage.setItem('expenseAmt', expenseAmt);
        localStorage.setItem('data', listDiv.innerHTML);  // Save the list of transactions
    }
    function deleteAll() {
        localStorage.clear();
        incomeDiv.textContent = `$${0}`;
        expenseDiv.textContent = `$${0}`;
        balanceDiv.textContent = `$${0}`;
        listDiv.innerHTML=''
        
    }

    // Load saved transactions and values from localStorage
    function showExp() {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            listDiv.innerHTML = savedData;  // Load saved transactions
        }
    }

});
