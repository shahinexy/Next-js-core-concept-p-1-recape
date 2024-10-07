import React from 'react';

const Navbar = () => {
    return (
        <div>
             <nav className="bg-green-800 flex justify-center py-2">
              <ul className="flex justify-center gap-5 text-white text-lg font-bold">
                <li>
                  Home
                </li>
                <li>
                  Shop
                </li>
                <li>
                  FAQ&apos;s
                </li>
                <li>
                  About 
                </li>
                <li>
                  Contact
                </li>
              </ul>
            </nav>
        </div>
    );
};

export default Navbar;