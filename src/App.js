import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import TransForm from './TransForm';
import jsonData from './Data';
import './App.css';

function App() {
    const [transactions, setTransactions] = useState(jsonData.transactions);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('');

    const handleFilterBy = (value) => {
        setFilterBy(value);
    };

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    const handleDeleteTransaction = (index) => {
        const updatedTransactions = [...transactions];
        updatedTransactions.splice(index, 1);
        setTransactions(updatedTransactions);
    };

    const handleSearchTermChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className="App">
            <h1>Transactions App</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => handleSearchTermChange(e.target.value)}
                    style={{ width: '350px' }}
                />
            </div>
            <TransactionTable
                transactions={transactions}
                searchTerm={searchTerm}
                filterBy={filterBy}
                handleFilterBy={handleFilterBy}
                handleDeleteTransaction={handleDeleteTransaction}
            />
            <TransForm handleAddTransaction={handleAddTransaction} />
        </div>
    );
}

export default App;
