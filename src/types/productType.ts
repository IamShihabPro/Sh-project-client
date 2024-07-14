export type TVariant = {
  image: string;
}
  
export type TInventory = {
  quantity: number;
  inStock: boolean;
}
  
export type TRating = {
  rating: number;
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

  // CartItem extends TProduct to include quantity
export type CartItem = TProduct & {
  quantity: number;
}

// Cart state includes an array of CartItems and a total quantity
export type CartState = {
  items: CartItem[];
  totalQuantity: number;
}