export type Manager = {
    id: number;
    name: string;
    username: string;
    age: number;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    };
    phone: string;
    website: string;
    company: string;
}