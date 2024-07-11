import Loader from "@/component/Loader/Loader";
import { useGetSingleProductQuery } from "@/redux/feature/product/productApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleProductQuery(id as string);
    
    if (isLoading) {
        return <Loader />;
    }

    const { data: product } = data;
    console.log(product);

    return (
        <div className="container mx-auto p-4 mt-28">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto object-cover rounded-lg shadow-lg max-w-lg"
                    />
                </div>
                
                <div className="lg:w-1/2 flex flex-col justify-center p-6 bg-white rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    
                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <div className="flex items-center mb-6">
                        <p className="text-2xl text-gray-500 font-medium mr-2">Price:</p>
                        <p className="text-2xl text-red-500 font-bold">${product.price}</p>
                    </div>
                    
                    <button className="bg-white text-gray-600 px-6 py-3 text-lg rounded-sm border border-gray-600 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out mt-6">
                        Add To Cart
                    </button>
                    
                    <div className="mt-6">
                        <p className="text-lg">
                            <span className="font-bold">Category:</span>
                            <span className="uppercase"> {product.category}</span>
                        </p>
                        <p className="text-lg mt-2 text-blue-500">
                            <span className="font-bold text-black mr-4">Tags: </span>
                            {product.tags.join(', ')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
