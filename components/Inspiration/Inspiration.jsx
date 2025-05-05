'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import inspiration from '@/data/inspiration';
import FilterSidebar from '../Helper/Sidebar';
import ImageOverlay from '../Helper/ImageOverlay';

const categories = [
    { label: 'Landing page', contentCount: 234 },
    { label: 'Pricing Plan page', contentCount: 178 },
    { label: 'About Us Page', contentCount: 334 },
    { label: 'Login Page', contentCount: 534 },
    { label: 'Signup Page', contentCount: 134 },
    { label: 'Not Found Page', contentCount: 98 },
];

const stack = [
    { label: 'Webflow', contentCount: 134 },
    { label: 'Next.js', contentCount: 78 },
    { label: 'Framer', contentCount: 33 },
    { label: 'WordPress', contentCount: 12 },
    { label: 'MERN', contentCount: 234 },
    { label: 'Other', contentCount: 44 },
];

const style = [
    { label: 'Dark Mode', contentCount: 134 },
    { label: 'Scroll Animation', contentCount: 78 },
    { label: 'Gradient', contentCount: 33 },
    { label: 'Corporate', contentCount: 12 },
    { label: 'Technical', contentCount: 234 },
    { label: 'Other', contentCount: 44 },
];

const colors = [
    { label: 'Black' },
    { label: 'Blue' },
    { label: 'Yellow' },
    { label: 'Red' },
    { label: 'Orange' },
    { label: 'Pink' },
];

const niche = [
    { label: 'AI', contentCount: 134 },
    { label: 'API', contentCount: 78 },
    { label: 'Analytics', contentCount: 33 },
    { label: 'Crypto', contentCount: 12 },
    { label: 'Cloud', contentCount: 234 },
    { label: 'Design', contentCount: 44 },
];

export default function Inspiration() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="flex sm:px-6 lg:px-8 lg:mt-20 sm:mt-5 items-center justify-center flex-col w-full h-fit">
            <div className="flex flex-col lg:flex-row max-w-[90%] w-full">
                {/* Sidebar */}
                <div className="w-full lg:w-[25%]">
                    <FilterSidebar
                        categories={categories}
                        stack={stack}
                        style={style}
                        colors={colors}
                        niche={niche}
                    />
                </div>

                <main className="flex-1">
                    <div className=' grid-cols-1 sm:grid-cols-1 lg:gap-115 gap-5 grid md:grid-cols-1 lg:grid-cols-2'>
                        <div className=' py-10 w-200'>
                            <h1 className="text-6xl font-semibold mb-4 leading-20">
                                Top <span className="text-red-500">SaaS Web Design</span> Ideas to Inspire You
                            </h1>
                            <p className="text-gray-600 text-2xl leading-10 mb-6">
                                Explore an expertly crafted showcase of top-tier SaaS landing pages from across the web. Effortlessly
                                discover design inspiration tailored to your needs using our intuitive
                                <span className="text-red-500"> filters.</span>
                            </p></div>
                        <div className="relative w-[370px] h-[343px] rounded-2xl bg-red-100 border border-red-400 overflow-hidden cursor-pointer shadow-xl">

                            <div className="absolute top-[105px] left-[80px]">
                                <img src="./images/decor.png" alt="Decor 1" />
                            </div>
                            <div className="absolute top-[20px] left-[330px]">
                                <img src="./images/decor2.png" alt="Decor 2" />
                            </div>
                            <div className="absolute top-[20px] left-[20px]">
                                <img src="./images/decor2.png" alt="Decor 3" />
                            </div>

                            <div className="py-12 px-10 w-full relative z-10">
                                <h1 className="text-xl font-bold mb-2">
                                    Receive Weekly Inspiration:<br /> 7 Top SaaS Designs<br /> Delivered to Your Inbox.
                                </h1>
                                <p className="text-gray-600 text-base mb-6">Join 1,278+ other designers.</p>
                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="Enter your email address"
                                            className="block w-full px-4 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-500 transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {inspiration.map((item) => (
                            <div
                                key={item.id}
                                className="w-full border border-gray-300 rounded-2xl overflow-hidden cursor-pointer shadow-md transition hover:shadow-xl"
                            >
                                <ImageOverlay
                                    imageUrl={item.desktopScreenshot}
                                    initialViewCount={item.views}
                                    descriptionPageUrl={`/description/${item.id}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-12">
                        <div className="flex items-center gap-2 text-red-500">
                            <img
                                src="./images/progressicon.svg"
                                alt="Icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span>Wait Loading more…</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}