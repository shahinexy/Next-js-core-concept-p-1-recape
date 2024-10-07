"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()

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
            slug: "/faqs"
        },
        {
            title: "About Us",
            slug: "/about"
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
                    navLinks?.map((link) => <Link className={pathName === link.slug && "text-green-300"} key={link.slug} href={link.slug}>{link.title}</Link>)
                }
              </ul>
            </nav>
        </div>
    );
};

export default Navbar;