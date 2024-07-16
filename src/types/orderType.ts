
export type TProductDetails = {
    productId: string;
    name: string
    category: string
    quantity: number
    price: number
    image: string
}

export type TOrder = {
    userName: string;
    userEmail: string;
    phone: number;
    address: string;
    products: TProductDetails[]
    totalCost: number;
    isDeleted: boolean;
}
  