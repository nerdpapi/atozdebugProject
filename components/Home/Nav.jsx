'use client';
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { usePathname } from 'next/navigation';
import { HiBars3BottomRight } from 'react-icons/hi2';


const nav = () => {
    const pathname = usePathname();
    return (
        <div className='relative transition-all duration-200 h-[10vh] z-[1000] mt-10 mx-20'>
            <div className='flex items- center h-full justify-between w-[80%] xl:w-[100%] mx-auto'>
                <div className='flex items-center space-x-1'>
                    <a href="/">
                        <img src="./images/Logo.svg" alt="Logoipsum" className='w-50 h-50' />
                    </a>
                </div>
                <div className=' hidden lg:flex items-center space-x-10 justify-end'>

                    {navLinks.map((link) => {
                        const isActive = pathname === link.url;
                        return <Link
                        href={link.url}
                        key={link.id}
                        className={`relative px-3 py-1 rounded text-base font-light transition-all duration-300 ease-in
                            ${isActive ? ' text-red-500' : 'text-black hover:text-red-300'}`}
                        
                      >
                        {link.label}
                      </Link>
                    })}
                    <button className='md:px-6 md:py-2.5 px-8 py-2 text-white text-base font-light bg-red-400 hover:bg-red-500 transition-all duration-200 rounded-sm cursor-pointer'>Subscribe</button>
                <HiBars3BottomRight className='w-8 h-8 cusor-pointer text-black'/>
                </div>
            </div>
        </div>
    )
}

export default nav
