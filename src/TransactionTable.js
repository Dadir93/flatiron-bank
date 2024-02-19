import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions, searchTerm, sortBy, handleSortBy, setSearchTerm, setTransactions }) {
    const sortedTransactions = [...transactions].sort((a, b) => {
        if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else if (sortBy === 'description') {
            return a.description.localeCompare(b.description);
        }
        return 0;
    });

    const filteredTransactions = sortedTransactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div>
                <label>
                    Sort by:
                    <select value={sortBy} onChange={(e) => handleSortBy(e.target.value)}>
                        <option value="">None</option>
                        <option value="category">Category</option>
                        <option value="description">Description</option>
                    </select>
                </label>
                <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
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
                    {filteredTransactions.map((transaction, index) => (
                        <TransactionRow
                            key={index}
                            transaction={transaction}
                            index={index}
                            setTransactions={setTransactions}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionTable;
