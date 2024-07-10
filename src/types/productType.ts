export type TVariant = {
    image: string;
  }
  
  export type TInventory = {
    quantity: number;
    inStock: boolean;
  }
  
  export type TRating = {
    email: string;
    rating: number;
    comment?: string;
  }
  
  export type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
    image: string;
    ratings: TRating[];
    isDeleted: boolean;
  }
  