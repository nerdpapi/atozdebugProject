"use client";
import { useParams } from 'next/navigation';
import inspiration from '@/data/inspiration';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { GoHome } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import ViewModeToggle from '../Helper/ViewModeToggle';

export default function DescriptionPage({ id }) {
    const item = inspiration.find((entry) => entry.id === id);
    const [view, setView] = useState('desktop');

    if (!item) return <div className="p-10">Inspiration not found</div>;

    return (
        <div className="max-w-full px-30 mx-auto mt-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="space-y-4">
                    <div className="text-sm text-gray-500 mb-2 pb-5 flex items-center space-x-2">
                        <Link href="/" className=" hover:text-red-400">
                            <GoHome className="w-4 h-4" />
                        </Link>
                        <span>&gt;</span>
                        <Link href="/inspiration" className="hover:underline hover:text-red-400">
                            Inspiration
                        </Link>
                        <span>&gt;</span>
                        <span>{item.categories[0]}</span>
                        <span>&gt;</span>
                        <span className="text-red-400 font-medium">{item.title}</span>
                    </div>
                    <img
                        src={item.logo}
                        alt="Logo"
                        className="w-[176px] h-[48px] mb-2 mt-15 "
                    />
                    <h1 className="text-5xl font-bold pt-10">{item.description}</h1>
                    <p className="text-gray-600 text-2xl pr-18">{item.metaDescription}</p>
                    <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-400 text-white px-6 py-3 rounded-sm hover:opacity-90 mt-5"
                    >
                        <CiShare1 className="w-5 h-5 mr-2" />
                        Visit Website
                    </a>

                    <table className="w-[552px] h-[185px] mt-10  border border-gray-500 pt-4 text-left">
                        <tbody>
                            <tr>
                                <th className="py-2 pl-15 font-medium border border-gray-500">Page Type</th>
                                <td className="py-2 pl-15 font-medium text-red-400">{item.categories.join(', ')}</td>
                            </tr>
                            <tr>
                                <th className="py-2 pl-15 font-medium border border-gray-500">Tech Stack</th>
                                <td className="py-2 pl-15 font-medium text-red-400 border border-gray-500">{item.techStack.join(', ')}</td>
                            </tr>
                            <tr>
                                <th className="py-2 pl-15 font-medium border border-gray-500">Niche</th>
                                <td className="py-2 pl-15 font-medium text-red-400 border border-gray-500">{item.niche}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="flex items-center justify-start gap-30 w-full">

                        <select
                            className="border border-gray-400 text-gray-400 pl-2 px-30 py-2 rounded"
                        >
                            <option value="">Pages</option>
                            <option value="1">Home Page</option>
                            <option value="2">About Us</option>
                        </select>

                        <ViewModeToggle onChange={(isMobile) => setViewMode(isMobile ? 'mobile' : 'desktop')} />
                    </div>
                    <div className="border border-gray-400 mt-10 rounded-lg w-[665px] h-[1389px] overflow-hidden shadow">
                        <Image
                            src={
                                view === 'mobile'
                                    ? item.mobileScreenshot || item.desktopScreenshot
                                    : item.mobileScreenshot
                            }
                            alt={`${item.title} Screenshot`}
                            width={800}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-4xl text-center font-bold mb-6 pr-20">
                    More Landing Page
                </h2>
                <div className="flex items-center  mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 mb-10">
                        {inspiration
                            .filter((entry) => entry.id !== id)
                            .slice(0, 12)
                            .map((entry) => (
                                <div
                                    key={entry.id}
                                    className=" w-[450px] h-[600px] border border-gray-400 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition duration-200">
                                    <Image
                                        src={entry.desktopScreenshot}
                                        alt={entry.title}
                                        width={300}
                                        height={536}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
