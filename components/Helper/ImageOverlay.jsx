'use client';
import { useState } from 'react';
import Link from 'next/link';

const ImageOverlay = ({ imageUrl, initialViewCount = 0, descriptionPageUrl, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewCount, setViewCount] = useState(initialViewCount);

    const handleImageClick = () => {
        setIsOpen(true);
        setViewCount(prevCount => prevCount + 1); 
        
    };

    return (
        <>
            <div
                className="relative w-full h-full cursor-pointer group"
                onClick={handleImageClick}
            >
                <img
                    src={imageUrl}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-md flex items-end justify-center group">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 rounded-md transition-opacity pointer-events-none"></div>
                    <button className="relative z-10 mb-3 px-5 py-1 bg-red-100 text-red-400 rounded-full text-base font-sm border border-red-400 hover:border-red-600 transition cursor-pointer opacity-0 group-hover:opacity-100 flex items-center gap-2">
                        <img src="/images/eye.svg" alt="view icon" className="w-5 h-5" />
                        <span>{viewCount}</span>
                        <img src="/images/shareicon.svg" alt="share icon" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Fullscreen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <div className="relative max-w-3xl w-2xl px-4">
                        <img
                            src={imageUrl}
                            alt="Enlarged"
                        />
                        <Link href={descriptionPageUrl} passHref>
                            <button className="mt-4 block mx-auto px-6 py-2 bg-red-400 text-white rounded-lg font-semibold hover:bg-red-500 transition cursor-pointer">
                                View Full Description
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 block mx-auto px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageOverlay;
