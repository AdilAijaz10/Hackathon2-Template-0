import React from 'react';
import Image from 'next/image';

export function TopSection() {


    return (
        <>
            {/* Heading Section */}
            <section className="bg-white py-10">
                <div className="container mx-auto px-4 md:px-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Top Picks For You</h2>
                    <p className="text-gray-500 text-center mb-10">Find a bright idea to suit your taste with our great selection of suspension, floor and table lights.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Image
                                src="/Trenton modular sofa_3 1.png"
                                width={1200}
                                height={1200}
                                alt="Trenton modular sofa 3"
                                className="w-full h-auto mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">Trenton modular sofa 3</h3>
                            <h2 className="text-black-900 font-bold">Rs. 25,000.00</h2>
                        </div>

                        <div className="text-center">
                            <Image
                                src="/Granite dining table with dining chair 1.png"
                                width={1200}
                                height={1200}
                                alt="Granite dining table with dining chair"
                                className="w-full h-auto mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">Granite dining table with dining chair</h3>
                            <h2 className="text-black-900 font-bold">Rs. 25,000.00</h2>
                        </div>

                        <div className="text-center">
                            <Image
                                src="/Outdoor bar table and stool 1.png"
                                width={1200}
                                height={1200}
                                alt="Outdoor bar table and stool"
                                className="w-full h-auto mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">Outdoor bar table and stool</h3>
                            <h2 className="text-black-900 font-bold">Rs. 25,000.00</h2>
                        </div>

                        <div className="text-center">
                            <Image
                                src="/Plain console with teak mirror 1.png"
                                width={1200}
                                height={1200}
                                alt="Plain console with teak mirror"
                                className="w-full h-auto mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">Plain console with teak mirror</h3>
                            <h2 className="text-black-900 font-bold">Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">View More</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopSection;