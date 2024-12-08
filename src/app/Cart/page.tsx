import ShopSlider from '../Component/ShopSlider';
import Image from 'next/image';

const Cart = () => {
  return (
    <>
    <div className="-100 p-4">
  <div className="flex justify-between">
    <div className="flex items-center">
      <div className="bg-yellow p-2 w-20 h-20 mr-4">
        <Image
          src="/Asgaard sofa 1.png"
          alt="Product Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <p className="text-gray-700 font-medium">Asgaard sofa</p>
        <p className="text-gray-500 text-sm">Rs. 250,000.00</p>
      </div>
      <div className="flex items-center">
        <input type="number" className="border border-gray-300 px-2 py-1 w-10 text-center" value="1" />
        <p className="ml-2 text-gray-500">Rs. 250,000.00</p>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-2 py-1 rounded ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
    <div>
      <h2 className="text-lg font-bold">Cart Totals</h2>
      <div className="flex justify-between mt-4">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">Rs. 250,000.00</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-gray-700 font-bold">Total</p>
        <p className="text-gray-700 font-bold">Rs. 250,000.00</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Check Out
      </button>
    </div>
  </div>
</div>
    <ShopSlider/>    
    </>
  );
}

export default Cart;