import React from 'react';

function TransactionRow({ transaction, index, setTransactions }) {
    const handleDeleteTransaction = () => {
        const updatedTransactions = [...transaction];
        updatedTransactions.splice(index, 1);
        setTransactions(updatedTransactions);
    };

    return (
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
                <button onClick={handleDeleteTransaction}>Delete</button>
            </td>
        </tr>
    );
}

export default TransactionRow;
