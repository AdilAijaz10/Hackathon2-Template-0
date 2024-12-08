import React from 'react';
import Image from 'next/image';

const ShopTop = () => {
    const products = [
        {
            id: 1,
            image: '/Trenton modular sofa_3 1.png',
            name: 'Trenton modular sofa_1',
            price: 'Rs. 25,000.00',
        },
        {
            id: 2,
            image: '/Granite dining table with dining chair 1.png',
            name: 'Trenton modular sofa_2',
            price: 'Rs. 28,000.00',
        },
        {
            id: 3,
            image: '/Outdoor bar table and stool 1.png',
            name: 'Trenton modular sofa_3',
            price: 'Rs. 30,000.00',
        },
        {
            id: 4,
            image: '/Plain console with teak mirror 1.png',
            name: 'Trenton modular sofa_4',
            price: 'Rs. 32,000.00',
        },
        {
            id: 5,
            image: '/Grain coffee table 1.png',
            name: 'Trenton modular sofa_5',
            price: 'Rs. 25,000.00',
        },
        {
            id: 6,
            image: '/Kent coffee table 1.png',
            name: 'Trenton modular sofa_6',
            price: 'Rs. 28,000.00',
        },
        {
            id: 7,
            image: '/Round coffee table_color 2 1.png',
            name: 'Trenton modular sofa_7',
            price: 'Rs. 30,000.00',
        },
        {
            id: 8,
            image: '/Reclaimed teak coffee table 1.png',
            name: 'Trenton modular sofa_8',
            price: 'Rs. 32,000.00',
        },
        {
            id: 9,
            image: '/Plain console_ 1.png',
            name: 'Trenton modular sofa_9',
            price: 'Rs. 25,000.00',
        },
        {
            id: 10,
            image: '/Reclaimed teak Sideboard 1.png',
            name: 'Trenton modular sofa_10',
            price: 'Rs. 28,000.00',
        },
        {
            id: 11,
            image: '/SJP_0825  1.png',
            name: 'Trenton modular sofa_11',
            price: 'Rs. 30,000.00',
        },
        {
            id: 12,
            image: '/Bella chair and table 1.png',
            name: 'Trenton modular sofa_12',
            price: 'Rs. 32,000.00',
        },
        {
            id: 13,
            image: '/Granite square side table 1.png',
            name: 'Trenton modular sofa_13',
            price: 'Rs. 25,000.00',
        },
        {
            id: 14,
            image: '/Asgaard sofa 1.png',
            name: 'Trenton modular sofa_14',
            price: 'Rs. 28,000.00',
        },
        {
            id: 15,
            image: '/Mask group.png',
            name: 'Trenton modular sofa_15',
            price: 'Rs. 30,000.00',
        },
        {
            id: 16,
            image: '/Outdoor sofa set 1.png',
            name: 'Trenton modular sofa_16',
            price: 'Rs. 32,000.00',
        },
    ];

    return (
        <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:my-[40px] lg:grid-cols-4 gap-6 px-4 pb-[80px]">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center p-4 "
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                        <p className="mt-4 text-sm text-gray-600 font-semibold">{product.name}</p>
                        <h2 className="text-lg font-bold text-gray-800">{product.price}</h2>
                    </div>
                ))}
            </div>

            {/* Pagination Section */}
            <div className="flex justify-center items-center gap-8 mt-6">
                <div className="w-[40px] h-[40px] bg-[#FBEBB5] text-center pt-[10px] rounded-md">1</div>
                <div className="w-[40px] h-[40px] bg-[#FFF9E5] text-center pt-[10px] rounded-md">2</div>
                <div className="w-[40px] h-[40px] bg-[#FFF9E5] text-center pt-[10px] rounded-md">3</div>
                <div className="w-[60px] h-[40px] bg-[#FFF9E5] text-center pt-[10px] rounded-md">Next</div>
            </div>
        </>
    );
};

export default ShopTop;