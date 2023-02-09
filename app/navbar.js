import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
    return (
        <section className='w-full bg-slate-50 shadow-lg'>
            <div className='flex justify-around items-center py-2 '>
                <div className='flex flex-row items-center space-x-6'>
                    <div className='flex items-center space-x-3'>
                        <Image src="/logo1.png" width={24} height={24} alt="" />
                        <span className='font-bold text-2xl text-[#253360]'>Catalyst</span>
                    </div>
                    <div className='space-x-6 items-end'>
                        <Link href={`/`}>Home</Link>
                        <Link href={`/about`}>About</Link>
                        <Link href={`/`}>Home</Link>
                    </div>
                </div>

                <div className='inline-flex space-x-6'>
                    <button className='py-1 px-4 bg-[#253360] text-white rounded-lg text-sm'>
                        Sign In
                    </button>
                    <button className='py-1 px-4 text-[#253360] border-2 border-[#253360] rounded-lg text-sm hover:bg-slate-200'>
                        Sign Up
                    </button>
                </div>
            </div>
        </section>

    )
}
