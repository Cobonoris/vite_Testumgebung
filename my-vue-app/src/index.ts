interface Product {
    code: string,
    title: string,
    oldPrice?: string,
    price: string,
    imageURL: string,
    ribbon?: string,
    availability: string,
    variants?: number
}

export {
    Product
}
