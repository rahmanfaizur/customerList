import { useState } from 'react';

// Define the Customer interface
interface Customer {
    name: string;
    age: number;
    location: string;
    gender: string;
    income: string;
}

// Sample data (you can replace this with your actual List import)
const List: Customer[] = [
    {
        name: "Jeremy Clarke",
        age: 21,
        location: "Seattle",
        gender: "Male",
        income: "$120,000"
    },
    {
        name: "Matty Bing",
        age: 25,
        location: "Florida",
        gender: "Female",
        income: "$50,000"
    },
    {
        name: "Philip Anderson",
        age: 18,
        location: "New York City",
        gender: "Male",
        income: "$150,000"
    },
    {
        name: "John Smith",
        age: 25,
        location: "Philadelphia",
        gender: "Male",
        income: "$200,000"
    },
    {
        name: "Adam Gilly",
        age: 32,
        location: "Denver",
        gender: "Male",
        income: "$2,200,000"
    },
    {
        name: "Erica Edwards",
        age: 25,
        location: "Portland",
        gender: "Female",
        income: "$2,200,000"
    }
];

export default function SearchCustomer() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCustomers = List.filter(customer => {
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

            {filteredCustomers.length > 0 ? (
                <table data-testid="searched-customers">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                            <th>Gender</th>
                            <th>Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.location}</td>
                                <td>{customer.gender}</td>
                                <td>{customer.income}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div data-testid="no-results">No Results Found!</div>
            )}
        </div>
    );
}