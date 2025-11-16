function formatValue(
    value: string | number | boolean
): string | number | boolean {
    if (typeof value === "string") {
        const upperCaseValue: string = value.toUpperCase();
        return upperCaseValue;
    } else if (typeof value === "number") {
        const multipliedValue: number = value * 10;
        return multipliedValue;
    } else if (typeof value === "boolean") {
        const oppositeValue: boolean = !value;
        return oppositeValue;
    } else {
        return value;
    }
}

function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return 0;
    }
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

type Item = {
    title: string;
    rating: number;
};
function filterByRating(value: Item[]): Item[] {
    return value.filter((item: Item) => item.rating >= 4.0);
}

type user = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
function filterActiveUsers(users: user[]): user[] {
    return users.filter((user: user) => user.isActive);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): string {
    const availability = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}



function getUniqueValues <T extends string | number>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];
    function addUniqueValues(value: T) {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) return;
        }
        result.push(value);
    }
    for (let i = 0; i < arr1.length; i++) addUniqueValues(arr1[i]);
    for (let i = 0; i < arr2.length; i++) addUniqueValues(arr2[i]);
    return result;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
    const productTotal = products.map((product) => {
        const total = product.price * product.quantity;
        if (product.discount) {
            return total - (total * product.discount) / 100;
        }
        return total;
    });
    const totalPrice = productTotal.reduce((acc, curr) => acc + curr, 0);
    return totalPrice;
}
