import ProductForm from './ProductForm';

const productData = {
  _id: "668e60632826618735716e7d",
  name: "New Arrival Tent",
  description: "This is an example product description.",
  price: 98.99,
  category: "Tent",
  tags: ["tent", "camping tent"],
  variants: [
    {
      image: "https://img.freepik.com/free-photo/young-girlfriends-winter-trip-with-tent_23-2148375124.jpg",
      _id: "668e60632826618735716e7e"
    }
  ],
  inventory: {
    quantity: 50,
    inStock: true,
    _id: "668e60632826618735716e7f"
  },
  image: "https://img.freepik.com/free-photo/young-girlfriends-winter-trip-with-tent_23-2148375124.jpg"
};

const AddProduct = () => {
  return (
    <div className="container mx-auto p-4">
      <ProductForm  />
    </div>
  );
};

export default AddProduct;
