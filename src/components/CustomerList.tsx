import { Customer } from '../types';

interface CustomerListProps {
    customers: Customer[];
}

export default function CustomerList({ customers }: CustomerListProps) {
    if (customers.length === 0) {
        return <div data-testid="no-results">No Results Found!</div>;
    }

    return (
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
                {customers.map((customer, index) => (
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
    );
}

export const customerData: Customer[] = [
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