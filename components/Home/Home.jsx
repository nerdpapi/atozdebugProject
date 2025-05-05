import React from 'react'
import { HiArrowRight } from 'react-icons/hi2';


const home = () => {
    return (
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 sm:mt-5">
                <div className='flex items-center mt-20 justify-center flex-col'>
                    <div className='container'>
                        <h1 className='text-[25px] text-center md:text-[35px] lg:text-[60px] font-semibold'>Build Scalable SaaS Apps <span className='text-red-500'>10x Faster</span>
                            – Without Reinventing the Wheel.</h1>
                        <p className=' mt-10 text-center text-[30px] font-light text-gray-600'>Built for creators, by experts—explore proven resources from <br />
                            SaaS leaders who know what works.</p>

                    </div>
                    <div className='flex gap-5 mt-20'>
                        <button className="flex items-center md:px-5 md:py-5 gap-2 text-red-400 text-[20px] bg-white hover:bg-gray-100 border-1 rounded cursor-pointer">Explore Free Resources<HiArrowRight size={20} /></button>

                        <button className='md:px-13 md:py-5 text-white text-[20px] bg-red-400 hover:bg-red-500 transition-all duration-200 rounded cursor-pointer'>Contact Our Experts
                        </button>

                    </div>
                    <div className="w-full mt-20 px-4">
                        <div className='flex justify-center'>
                            <h1 className='text-center text-[35px] font-bold'>Popular <span className='text-red-500'>Inspiration </span>Categories</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-flow-col grid-rows-2 gap-7 mt-10  overflow-visible">
                                <div
                                    className="relative bg-white pt-6 w-[370px] h-[393px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-center text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/flight_icon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-gray-800 mb-2">SaaS Landing Pages</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4">20+ designs to inspire your SaaS launch</p>

                                    {/* Image container with proper boundaries */}
                                    <div className="relative w-full h-full overflow-hidden ">
                                        {/* Left Image (30% width) */}
                                        <div className="absolute -bottom-25 -left-17 w-full h-full">
                                            <a href='/images/landing1.png' target='_blank'><img
                                                src="./images/landing1.png"
                                                alt="Side Image 1"
                                                className="w-[158px] h-[482px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Center Image (40% width) */}
                                        <div className="absolute -bottom-13 left-26 w-full h-full z-10">
                                            <a href='/images/landing2.png' target='_blank'><img
                                                src="./images/landing2.png"
                                                alt="Center Image"
                                                className="ww-[159px] h-[541px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Right Image (30% width) */}
                                        <div className="absolute -bottom-25 left-69 w-full h-full z-10">
                                            <a href='/images/landing3.png' target='_blank'><img
                                                src="./images/landing3.png"
                                                alt="Side Image 2"
                                                className="w-[158px] h-[619px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative bg-white pt-6 w-[370px] h-[393px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-center text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/login_icon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-gray-800 mb-2">Login Pages</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4 px-8">20+ modern login screens designed for smooth access</p>

                                    {/* Image container with proper boundaries */}
                                    <div className="relative w-full h-full overflow-hidden ">
                                        {/* Left Image (30% width) */}
                                        <div className="absolute -bottom-20 -left-16.5 w-full h-full">
                                            <a href='/images/login1.png' target='_blank'><img
                                                src="./images/login1.png"
                                                alt="Side Image 1"
                                                className="w-[157px] h-[102px] object-fill rounded-sm shadow-lg border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Center Image (40% width) */}
                                        <div className="absolute -bottom-13 left-26 w-full h-full z-10">
                                            <a href='/images/login2.png' target='_blank'> <img
                                                src="./images/login2.png"
                                                alt="Center Image"
                                                className="ww-[157px] h-[102px] object-fill rounded-sm shadow-lg border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Right Image (30% width) */}
                                        <div className="absolute -bottom-20 left-69 w-full h-full z-10">
                                            <a href='/images/login3.png' target='_blank'><img
                                                src="./images/login3.png"
                                                alt="Side Image 2"
                                                className="w-[157px] h-[102px] object-fill rounded-sm shadow-lg border border-gray-300"
                                            /></a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative bg-white pt-6 w-[370px] h-[393px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-center text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/money-bag_icon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-gray-800 mb-2">SaaS Pricing Pages</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4">50+ designs for effective monetization strategies</p>

                                    {/* Image container with proper boundaries */}
                                    <div className="relative w-full h-full gap-x-2 overflow-hidden ">
                                        {/* Left Image (30% width) */}
                                        <div className="absolute -bottom-24 -left-17 w-full h-full">
                                            <a href='/images/pricing1.png' target='_blank'><img
                                                src="./images/pricing1.png"
                                                alt="Side Image 1"
                                                className="w-[159px] h-[297px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Center Image (40% width) */}
                                        <div className="absolute -bottom-13 left-26 w-full h-full z-10">
                                            <a href='/images/pricing2.png' target='_blank'><img
                                                src="./images/pricing2.png"
                                                alt="Center Image"
                                                className="ww-[159px] h-[302px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Right Image (30% width) */}
                                        <div className="absolute -bottom-25 left-69 w-full h-full z-10">
                                            <a href='/images/pricing3.png' target='_blank'><img
                                                src="./images/pricing3.png"
                                                alt="Side Image 2"
                                                className="w-[159px] h-[274px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative bg-white pt-6 w-[370px] h-[393px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-center text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/register_icon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-gray-800 mb-2">Signup Pages</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4 px-6">18+ high-converting designs to grow your user base</p>

                                    {/* Image container with proper boundaries */}
                                    <div className="relative w-full h-full gap-x-2 overflow-hidden ">
                                        {/* Left Image (30% width) */}
                                        <div className="absolute -bottom-20 -left-16.5 w-full h-full">
                                            <a href='/images/signup1.png' target='_blank'><img
                                                src="./images/signup1.png"
                                                alt="Side Image 1"
                                                className="w-[157px] h-[102px] object-fill rounded-md shadow-lg border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Center Image (40% width) */}
                                        <div className="absolute -bottom-13 left-26 w-full h-full z-10">
                                            <a href='/images/signup2.png' target='_blank'><img
                                                src="./images/signup2.png"
                                                alt="Center Image"
                                                className="ww-[158px] h-[103px] object-fill rounded-md shadow-lg border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Right Image (30% width) */}
                                        <div className="absolute -bottom-20 left-69 w-full h-full z-10">
                                            <a href='/images/signup3.png' target='_blank'><img
                                                src="./images/signup3.png"
                                                alt="Side Image 2"
                                                className="w-[157px] h-[102px] object-fill rounded-md shadow-lg border border-gray-300"
                                            /></a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative bg-white pt-6 w-[370px] h-[393px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-center text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/family_icon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-gray-800 mb-2">SaaS About Us Pages</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4">15+ clean layouts to help you tell your brand story</p>

                                    {/* Image container with proper boundaries */}
                                    <div className="relative w-full h-full gap-x-2 overflow-hidden ">
                                        {/* Left Image (30% width) */}
                                        <div className="absolute -bottom-25 -left-17 w-full h-full">
                                            <a href='/images/about1.png' target='_blank'><img
                                                src="./images/about1.png"
                                                alt="Side Image 1"
                                                className="w-[163px] h-[264px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Center Image (40% width) */}
                                        <div className="absolute -bottom-13 left-26 w-full h-full z-10">
                                            <a href='/images/about2.png' target='_blank'><img
                                                src="./images/about2.png"
                                                alt="Center Image"
                                                className="ww-[159px] h-[264px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>

                                        {/* Right Image (30% width) */}
                                        <div className="absolute -bottom-25 left-69 w-full h-full z-10">
                                            <a href='/images/about3.png' target='_blank'><img
                                                src="./images/about3.png"
                                                alt="Side Image 2"
                                                className="w-[159px] h-[264px] object-fill rounded-md border border-gray-300"
                                            /></a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative bg-white pt-6 w-[370px] h-[393px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-center text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/error_icon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-gray-800 mb-2">Not Found Pages</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4 px-6">12+ clever 404 pages that actually keep users around</p>

                                    {/* Image container with proper boundaries */}
                                    <div className="relative w-full h-full gap-x-2 overflow-hidden ">
                                        {/* Left Image (30% width) */}
                                        <div className="absolute -bottom-20 -left-17 w-full h-full">
                                            <img
                                                src="./images/error1.png"
                                                alt="Side Image 1"
                                                className="w-[157px] h-[102px] object-fill rounded-md shadow-lg border border-gray-300"
                                            />
                                        </div>

                                        {/* Center Image (40% width) */}
                                        <div className="absolute -bottom-10 left-26 w-full h-full z-10">
                                            <img
                                                src="./images/error2.png"
                                                alt="Center Image"
                                                className="w-[157px] h-[102px] object-fill rounded-md shadow-lg border border-gray-300"
                                            />
                                        </div>

                                        {/* Right Image (30% width) */}
                                        <div className="absolute -bottom-20 left-69 w-full h-full z-10">
                                            <img
                                                src="./images/error3.jpg"
                                                alt="Side Image 2"
                                                className="w-[157px] h-[102px] object-fill rounded-md shadow-lg border border-gray-300"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex gap-5 mt-10 justify-center'>
                            <button className="flex items-center  h-10 md:px-5 md:py-5 gap-2 text-red-400 text-[15px] bg-white
                                     hover:bg-gray-100 border-1 rounded cursor-pointer">Explore all inspirations<HiArrowRight size={15} /></button>
                        </div>

                    </div>
                    <div className="w-full mt-20 px-4">
                        <div className='flex justify-center'>
                            <h1 className='text-center text-[35px] font-bold'>Why <span className='text-red-500'>Logoipsum Hub </span>is Your Best Choice</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-flow-col grid-rows-1 gap-7 mt-10  overflow-visible">
                                <div
                                    className="relative bg-white px-5 pt-6 w-[370px] h-[249px] rounded-sm border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-start text-center overflow-hidden">
                                    {/* Content */}
                                    <img
                                        src="./images/glassicon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-black mt-2">Expertly Curated</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4 mt-5  text-start">Our team of SaaS specialists<br />
                                        handpicks the best resources to<br /> ensure quality and relevance.
                                    </p>
                                </div>
                                <div
                                    className="relative bg-white px-5 pt-6 w-[370px] h-[249px] rounded-sm border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-start text-center overflow-hidden">
                                    <img
                                        src="./images/gifticon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-black mt-2">Free to Start</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4 mt-5  text-start">Begin with our free resources and<br /> scale up with premium offerings as<br /> needed.</p>
                                </div>
                                <div
                                    className="relative bg-white px-5 pt-6 w-[370px] h-[249px] rounded-sm border border-gray-300 shadow-md hover:shadow-lg 
                                        transition duration-300 flex flex-col items-start text-center overflow-hidden">
                                    <img
                                        src="./images/rocketicon.svg"
                                        alt="Icon"
                                        className="w-10 h-10 mb-2 object-contain"
                                    />
                                    <h2 className="text-2xl font-[600] text-black mt-2">Built for SaaS</h2>
                                    <p className="text-gray-600 text-base font-[400] mb-4 mt-5  text-start">Every resource is designed with<br /> SaaS-specific needs in mind, from<br /> scalability to security.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-flow-col grid-rows-1 gap-7 mt-10  overflow-visible">
                            <div
                                className="relative bg-red-100 px-10 pt-6 w-[1170px] h-[336px] rounded-3xl border border-red-400 shadow-xl
                                        transition duration-300 flex flex-col items-start text-center overflow-hidden">

                                <h2 className="text-3xl font-[700] text-black mb-2 text-start">Ready to <span className='text-red-500'>Build Your SaaS </span>Without the<br /> Headaches?</h2>
                                <p className="text-gray-600 text-xl font-[400] mb-10 mt-5  text-start">Join 2,000+ teams who design smarter and faster with our<br /> handpicked resources.</p>
                                <button className="flex items-center h-10 md:px-5 md:py-5 gap-2 text-white text-[15px] bg-red-400
                                     hover:bg-red-500  rounded cursor-pointer">Start Exploring Resources</button>
                                <div className="static w-full h-full overflow-hidden ">
                                    <div className="absolute top-45 left-180 w-full h-full rotate-30">
                                        <a href='/images/landing1.png' target='_blank'><img
                                            src="./images/landing1.png"
                                            alt="Side Image 1"
                                            className="w-[158px] h-[262px] object-fill rounded-md shadow-md"
                                        /></a>
                                    </div>

                                    <div className="absolute top-104 left-145 w-full h-full z-10 rotate-30">
                                        <a href='/images/about1.png' target='_blank'><img
                                            src="./images/about1.png"
                                            alt="Center Image"
                                            className="ww-[159px] h-[264px] object-cover rounded-md shadow-md"
                                        /></a>
                                    </div>

                                    <div className="absolute top-105 left-195 w-full h-full z-10 rotate-30">
                                        <a href='/images/about2.png' target='_blank'><img
                                            src="./images/about2.png"
                                            alt="Side Image 2"
                                            className="w-[159px] h-[264px] object-fill rounded-md shadow-lg"
                                        /></a>
                                    </div>
                                    <div className="absolute top-46 left-229 w-full h-full z-10 rotate-30">
                                        <a href='/images/about2.png' target='_blank'><img
                                            src="./images/landing2.png"
                                            alt="Side Image 2"
                                            className="w-[159px] h-[264px] object-cover rounded-md shadow-lg"
                                        /></a>
                                    </div>
                                    <div className="absolute top-78 left-260 w-full h-full z-10 rotate-30">
                                        <a href='/images/landing3.png' target='_blank'><img
                                            src="./images/landing3.png"
                                            alt="Side Image 2"
                                            className="w-[159px] h-[264px] object-cover rounded-md shadow-lg"
                                        /></a>
                                    </div>
                                    <div className="absolute top-137 left-225 w-full h-full z-10 rotate-30">
                                        <a href='/images/about3.png' target='_blank'><img
                                            src="./images/about3.png"
                                            alt="Side Image 2"
                                            className="w-[159px] h-[264px] object-cover rounded-md shadow-lg"
                                        /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>


    )
}

export default home
