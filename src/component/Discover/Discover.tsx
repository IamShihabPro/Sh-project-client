import tent from '../../assets/others/tent.jpg'
const Discover = () => {
    return (
       <div className='my-10'>
            <div className='mb-10'>
                <h1 className='text-center font-bold text-4xl text-gray-800'>We Live To Discover</h1>
            </div>
             <div className=' bg-gray-200'>
           
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center px-4 gap-4 sm:gap-4 md:gap-4 lg:gap-0 ">
                    {/* Left side: Food details */}
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 text-black flex flex-col justify-evenly items-center py-6">
                        <h2 className="text-4xl font-bold mb-4 text-center">Best deals <span className=''>Camping Shop</span></h2>
                        <p className="px-12 w-full sm:w-5/6 text-justify">Forged around a campfire, they are driven to extend and deepen outdoor experiences by providing the most sustainable solutions for apparel, footwear, and equipment, designing products for hiking, trekking, commuting, camping & bikepacking to enable the journey. Jack Wolfskin always encourages people to embrace wanderlust and to utilize time in nature to recharge. From their first steps, to thier last breath, life is made by moments of discovery.</p>
                        <button className='bg-black text-white rounded-sm px-4 py-4 mt-2 w-4/6'>Proceed To Order Now</button>
                    </div>

                    {/* Right side: Food image */}
                    <div className="w-full sm:w-full md:w-full lg:w-1/2">
                        <img src={tent} alt={tent} className="w-full h-auto"/>
                    </div>
            </div>
        </div>
       </div>
    );
};

export default Discover;