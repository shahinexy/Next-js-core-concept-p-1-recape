"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLinks= [
        {
            title: "Home",
            slug: '/'
        },
        {
            title: "Shop",
            slug: "/shop"
        },
        {
            title: "FAQ's",
            slug: "faqs"
        },
        {
            title: "About Us",
            slug: "about"
        },
        {
            title: "Contact Us",
            slug: "/contact"
        }
    ]

    return (
        <div>
             <nav className="bg-green-800 flex justify-center py-2">
              <ul className="flex justify-center gap-5 text-white text-lg font-bold">
                {
                    navLinks?.map((link) => <Link key={link.slug} href={link.slug}>{link.title}</Link>)
                }
              </ul>
            </nav>
        </div>
    );
};

export default Navbar;