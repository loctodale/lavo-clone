export interface Product {
    name: string;
    fullName: string
    description: string,
    advantage: string[],
    howToUse: string[],
    note: string | null, // use for warning
    size: number | null ,//(ml)
    brand: string,
    slug: string,
    category: string
    image: string,
}