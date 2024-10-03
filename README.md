# Expense Tracker

This **Expense Tracker** is a simple web application that helps users track their income, expenses, and balance. The data is saved locally using `localStorage`, ensuring that the transactions, income, expenses, and balance persist even when the page is refreshed.

## Features

- **Add Transactions**: Users can add income or expense transactions by providing a description and an amount.
- **Calculate Balance**: Automatically calculates and updates the balance based on the income and expenses entered.
- **LocalStorage Persistence**: The app saves the income, expenses, and list of transactions in `localStorage`, ensuring data persists even after a page reload.
- **Delete All Data**: Users can clear all the stored data with a single click, resetting the balance, income, and expenses to zero.
- **Expense Highlighting**: Expenses are visually distinct in the list, making it easy to differentiate between income and expenses.

## Technologies Used

- **HTML**
- **CSS/SCSS**: For styling and layout
- **JavaScript**: Handles logic for adding/removing transactions and updating values.
- **localStorage**: Stores the income, expenses, and transactions so they persist after page reloads.

## How It Works

1. **Income and Expense Tracking**: 
   - Users can enter a transaction by providing a description and an amount.
   - Positive values are treated as income, while negative values are treated as expenses.
   - The balance is updated in real-time as transactions are added.
   
2. **Local Storage**: 
   - Income, expenses, and the transaction list are saved in `localStorage`. This ensures that the data remains available even after refreshing or closing the browser.
   
3. **Delete All Data**: 
   - Users can clear all stored data and reset the app by clicking the "Delete All" button, which clears all entries and resets the balance.

## How to Use

1. Enter a description and an amount.
2. Click the "Submit" button to add the transaction.
3. The app will update the income/expense and the balance accordingly.
4. To delete all data, click the "Delete All" button.

## Example Usage

```shell
1. Description: "Freelance work", Amount: 500 => Added to Income
2. Description: "Grocery shopping", Amount: -150 => Added to Expense
3. Balance will be automatically updated (500 - 150 = 350).
4. Transactions are saved even after refreshing the browser.
