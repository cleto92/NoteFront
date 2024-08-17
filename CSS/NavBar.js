import React from 'react'
import Link from 'next/link';

const NavBar = () => {
    return (

        <header className="text-white font-bold bg-gray-600 body-font">
            <div className="container  flex flex-wrap mx-4 p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                </a>
                <nav className="md:ml-auto mx-4 flex flex-wrap items-center text-base justify-center">
                    <Link href="/ArchivedNotes" className="mr-5 hover:text-gray-900">Archived Notes</Link>
                    <Link href="/MyNotes" className="mr-5 hover:text-gray-900">My Notes</Link>
                    <Link href="/Categories" className="mr-5 hover:text-gray-900">Categories</Link>
                </nav>

            </div>
        </header>
    );
}

export default NavBar