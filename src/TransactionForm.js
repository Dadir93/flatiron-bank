import React, { useState } from 'react';

function TransactionForm({ setTransactions }) {
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        description: '',
        category: '',
        amount: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({
            ...newTransaction,
            [name]: value
        });
    };

    const handleAddTransaction = () => {
        setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
        setNewTransaction({
            date: '',
            description: '',
            category: '',
            amount: 0,
        });
    };

    return (
        <div className="Addons">
            <h3>Add Transaction</h3>
            <label htmlFor="transdate">Date</label>
            <input type="date" id="transdate" name="date" placeholder="yy/mm/dd" value={newTransaction.date} onChange={handleInputChange} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={newTransaction.description} placeholder="description" onChange={handleInputChange} />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={newTransaction.category} placeholder="category" onChange={handleInputChange} />
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" name="amount" value={newTransaction.amount} placeholder="amount" onChange={handleInputChange} />
            <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
    );
}

export default TransactionForm;
