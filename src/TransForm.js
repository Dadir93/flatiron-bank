import React, { useState } from 'react';

function TransForm({ handleAddTransaction }) {
    const [formData, setFormData] = useState({
        id: '',
        date: '',
        description: '',
        category: '',
        amount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTransaction(formData);
        setFormData({
            id: '',
            date: '',
            description: '',
            category: '',
            amount: '',
        });
    };

    return (
        <form className="TransForm" onSubmit={handleSubmit}>
            <h3 style={{ marginLeft: '10%' }}>Add New Transaction</h3>
    <label>
        Description:
        <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
        />
    </label>
            <br />
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Amount:
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransForm;
