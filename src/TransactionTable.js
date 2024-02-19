import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions, searchTerm, filterBy, handleFilterBy, handleDeleteTransaction }) {

    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        if (filterBy === 'category') {
            return a.category.localeCompare(b.category);
        } else if (filterBy === 'description') {
            return a.description.localeCompare(b.description);
        }
        return 0;
    });

    return (
        <div>
            <div>
                <label>
                    Filter by:
                    <select value={filterBy} onChange={(e) => handleFilterBy(e.target.value)}>
                        <option value="">All</option>
                        <option value="category">Category</option>
                        <option value="description">Description</option>
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTransactions.map((transaction, index) => (
                        <TransactionRow
                            key={index}
                            transaction={transaction}
                            index={index}
                            handleDeleteTransaction={handleDeleteTransaction}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionTable;
