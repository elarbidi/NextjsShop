import { useState } from "react";


const Navbar = () => {
        const [open, setOpen] = useState(false);
        const handleMenuClick = () => {
          setOpen(!open);
        };
        
    return (
        <>
        <div className="text-center bg-orange-600 font-bold text-white py-1">
            <p>Get Your Free Gift Card Now</p>
            </div>
        <div className="bg-white border-b-2 shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button onClick={handleMenuClick} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`h-6 w-6 ${!open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <p className="border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                                Home
                            </p>
                        </div>
                    </div>
                    <span className="mx-5 h-15 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>
                    <div className="">
                    <div className="group-m-2 mt-2 p-2 flex items-center">
                      <svg className="flex-shrink-0 h-8 w-8 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="ml-2 text-lg font-medium text-orange-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </div>
                </div>

            </div>
            <div className={open ? 'sm:hidden' : 'hidden'} id="mobile-menu">
                <div className="pt-2 pb-4 space-y-1">
                    <p className="bg-orange-50 border-orange-500 text-orange-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;