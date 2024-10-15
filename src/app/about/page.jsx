import Link from 'next/link';
import React from 'react';

const aboutpage = () => {
    return (
        <div>
            <h1 className='text-5xl font-semibold text-red-800'>This is about us page</h1>
            <Link href={'/about/history'}>History</Link>
            <Link href={'/about/mission'}>Mission</Link>
        </div>
    );
};

export default aboutpage;