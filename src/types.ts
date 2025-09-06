export type User = {
    id: number;
    name: string;
    email: string;
    role_id: number;
    password?: string;
}

export type Role = {
    id: number;
    name: string;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
}

export type Order = {
    id: number;
    email: string;
    name: string;
    createdAt: string;
    total: number;
    products: Product[];
}