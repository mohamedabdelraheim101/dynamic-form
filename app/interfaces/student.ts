
export interface Student {
    name:string;
    age:number;
    email?:string;
}

interface Products {
    id: number;
    category: string;
    // data: Product[];
    data: [{
    id: string;
    name: string;
    title: string;
    price: string;
    rating: string;
    }];
}

interface Product {
    id: string;
    name: string;
    title: string;
    price: string;
    rating: string;
    
}

//
data: [
    {
        id: 1,
        name: 'xbox',
        price: 850,
        
    },
    {
        id: 1,
        name: 'xbox',
        price: 850,

    }
]