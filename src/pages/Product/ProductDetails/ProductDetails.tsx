import { useParams } from 'react-router-dom';
import { data } from '@/Data/products';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart, updateCartQuantity } from '@/redux/feature/cart/cartSlice';
import { TProduct } from '@/types/productType';
import { toast } from 'sonner';
import { TCart } from '@/types/cartType';
import { Rating } from '@smastrom/react-rating';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);

  // Use the find method to get a single product
  const product = data.find(product => product._id === id);

  if (!product) {
    return <div className="text-center text-gray-700 mt-28">Product not found</div>;
  }

  const calculateAverageRating = (ratings: { rating: number }[]) => {
    if (!ratings.length) return 0;
    const sumRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return sumRatings / ratings.length;
  };

  const averageRating = calculateAverageRating(product?.ratings || []);

  const handleAddToCart = (product: TProduct) => {
    const existingCartItem = cartItems.find(item => item.productId === product._id);
    const currentQuantity = existingCartItem ? existingCartItem.quantity : 0;

    if (currentQuantity < product.inventory.quantity) {
      const newQuantity = currentQuantity + 1;
      if (existingCartItem) {
        if (newQuantity <= product.inventory.quantity) {
          dispatch(updateCartQuantity({ id: product._id, quantity: newQuantity }));
          toast.success("Item quantity updated in cart");
        } else {
          toast.error("Cannot add more than available stock");
        }
      } else {
        const cartItem: TCart = {
          productId: product._id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        dispatch(addToCart(cartItem));
        toast.success("Item added to cart");
      }
    } else {
      toast.error("Cannot add more than available stock");
    }
  };

  return (
    <div className="container mx-auto p-6 lg:p-12 mt-28 bg-white">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col items-center">
          <img 
            src={product?.image} 
            alt={product?.name} 
            className="rounded-lg shadow-md object-cover w-full lg:h-auto"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col p-6 bg-gray-50 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">{product?.name}</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product?.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <Rating style={{ maxWidth: 70 }} value={averageRating} readOnly />
            <span className="text-gray-500">({product?.ratings.length})</span>
          </div>
          <p className="text-lg text-gray-600 font-medium mb-4">Category: <span className="uppercase text-gray-800">{product?.category}</span></p>
          <p className="text-2xl text-red-500 font-bold mb-6">${product?.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={product?.inventory?.quantity <= 0}
            className={`bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 ${
              product?.inventory?.quantity <= 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Add To Cart
          </button>
          <p className="text-md text-gray-500 mt-4">Available stock: {product?.inventory?.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
