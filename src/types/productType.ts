// export type TVariant = {
//   image: string;
// }
  
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
  // tags: string[];
  // variants: TVariant[];
  inventory: TInventory;
  image: string;
  ratings: TRating[];
  isDeleted: boolean;
}

export type CartItem = TProduct & {
  quantity: number;
}

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
}