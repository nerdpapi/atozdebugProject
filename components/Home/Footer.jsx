import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className=' pt-16 pb-16 bg-black mt-10'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-5 gap-10'>
                <div className='space-y-5 col-span-2 '><img src='./images/Logo2.svg' alt="Logo" />
                    <p className='text-white text-base font-light pt-5'>Logoipsum is a full-service tech partner<br /> delivering innovative software solutions, AI<br /> development, and scalable digital products<br /> for businesses.</p>

                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl text-white font-bold'>LINKS</h1>
                    <p className='text-white text-sm font-light pt-5 leading-2 cursor-pointer hover:text-blue-300'><Link href="/" className='hover:underline'>Home</Link></p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'><Link href="/inspiration" className='hover:underline'>Insiration</Link></p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Templates</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Component Library</p>


                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl text-white font-bold'>PAGES</h1>
                    <p className='text-white text-sm font-light pt-5 leading-2 cursor-pointer hover:text-blue-300'>Landing Page</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Pricing Plan</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>About Page</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Login Page</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Signup Page</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Not Found Page</p>


                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl text-white font-bold'>STACK</h1>
                    <p className='text-white text-sm font-light pt-5 leading-2 cursor-pointer hover:text-blue-300'>Webflow</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Next.js</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>Framer</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>WordPress</p>
                    <p className='text-white text-sm font-light leading-2 cursor-pointer hover:text-blue-300'>MERN</p>


                </div>
            </div>
            <div className='w-[80%] mx-auto items-end pt-16 grid-cols-1 sm:grid-cols-1 grid md:grid-cols-1 lg:grid-cols-3'>
                <div className='space-y-5 col-span-2'>
                    <div className='w-[100%] mx-auto items-start  grid-cols-3 sm:grid-cols-3 grid md:grid-cols-4 lg:grid-cols-8 gap-1'>
                        <h1 className='text-sm text-white font-bold cursor-pointer hover:text-blue-300'>Privacy Policy</h1>
                        <h1 className='text-sm text-white font-bold text-center cursor-pointer hover:text-blue-300'>Submit</h1>
                        <h1 className='text-sm text-white font-bold cursor-pointer hover:text-blue-300'>Contact Us</h1>

                    </div>
                    <p className='text-white text-base font-light'>Lorem ipsum dolor sit amet consectetur. Diam eget commodo enim nunc integer molestie amet mauris.</p>

                </div>
                <div className=' space-y-5 pl-55 pb-5 '>
                <button className='md:px-4 md:py-2 px-4 py-1 text-white text-base font-light bg-red-400 hover:bg-red-500 transition-all duration-200 rounded-sm cursor-pointer'>Subscribe</button>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
