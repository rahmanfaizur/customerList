import { useState } from 'react';
import { customerData } from './CustomerList';
import CustomerList from './CustomerList';

export default function SearchCustomer() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCustomers = customerData.filter(customer => {
        if (searchTerm === '') return true;
        
        return Object.values(customer).some(value => 
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div>
            <input
                type="text"
                data-testid="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search customers..."
            />
            <CustomerList customers={filteredCustomers} />
        </div>
    );
}