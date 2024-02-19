import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import jsonData from './Data';

function TransForm() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState(null); 

    useEffect(() => {
        setTransactions(jsonData.transactions);
        console.log('Fetched data:', jsonData);
    }, []);

    const handleSortBy = (sortBy) => {
        setSortBy(sortBy);
    };

    return (
        <>
            <h2>Transaction Table</h2>
            <TransactionTable
                transactions={transactions}
                searchTerm={searchTerm}
                sortBy={sortBy}
                handleSortBy={handleSortBy}
                setSearchTerm={setSearchTerm}
                setTransactions={setTransactions}
            />
            <TransactionForm
                setTransactions={setTransactions}
            />
        </>
    );
}

export default TransForm;
