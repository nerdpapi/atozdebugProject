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
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 sm:mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-50 gap-10">
                <div className="space-y-6">
                    <div className="text-sm text-gray-500 flex items-center flex-wrap gap-2">
                        <Link href="/" className="hover:text-red-400">
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

                    <Image
                        src={item.logo}
                        alt="Logo"
                        width={176}
                        height={48}
                        className=" lg:mt-15 mt-5"
                    />

                    <h1 className="text-3xl sm:text-5xl font-bold lg:mt-15 mt-5">{item.description}</h1>
                    <p className="text-gray-600 text-xl sm:text-2xl">{item.metaDescription}</p>

                    <a
                        href={item.websiteLink}
                        target="_blank"

                        className="inline-flex items-center bg-red-400 text-white px-6 py-3 rounded hover:bg-red-500 mt-4"
                    >
                        <CiShare1 className="w-5 h-5 mr-2" />
                        Visit Website
                    </a>

                    <div className="overflow-x-auto">
                        <table className="min-w-full mt-10 border border-gray-300 text-left text-sm sm:text-base">
                            <tbody>
                                <tr>
                                    <th className="py-5 pl-15 font-medium border border-gray-300 text-left">Page Type</th>
                                    <td className="py-5 pl-15 text-red-400 border border-gray-300 text-left align-middle">{item.categories.join(', ')}</td>
                                </tr>
                                <tr>
                                    <th className="py-5 pl-15 font-medium border border-gray-300 text-left">Tech Stack</th>
                                    <td className="py-5 pl-15 text-red-400 border border-gray-300 text-left">{item.techStack.join(', ')}</td>
                                </tr>
                                <tr>
                                    <th className="py-5 pl-15 font-medium border border-gray-300 text-left">Niche</th>
                                    <td className="py-5 pl-15 text-red-400 border border-gray-300 text-left">{item.niche}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Select + Toggle */}
                    <div className="flex lg:flex-row items-start lg:items-center justify-start gap-4 lg:gap-30 w-full">
                        <select className="border border-gray-400 text-gray-600 lg:pl-2 py-2 rounded w-20px lg:w-full">
                            <option value="">Pages</option>
                            <option value="1">Home Page</option>
                            <option value="2">About Us</option>
                        </select>

                        <ViewModeToggle
                            selected={view}
                            onChange={(mode) => setView(mode)}
                        />
                    </div>

                    <div className="border border-gray-400 rounded-lg overflow-hidden shadow-lg w-full aspect-[10/16] mt-8">
                        <Image
                            src={
                                view === 'mobile'
                                    ? (item.mobileScreenshot || item.desktopScreenshot)
                                    : item.desktopScreenshot
                            }
                            alt={`${item.title} Screenshot`}
                            width={800}
                            height={1600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-4xl font-bold text-center mb-12">More Landing Pages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inspiration
                        .filter((entry) => entry.id !== id)
                        .slice(0, 12)
                        .map((entry) => (
                            <div
                                key={entry.id}
                                className="w-full h-[800px] border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                            >
                                <Image
                                    src={entry.desktopScreenshot}
                                    alt={entry.title}
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
