'use client';
import { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const FilterSidebar = ({ categories, stack, style, colors, niche }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section); // Collapse if already expanded
    };

    return (
        <aside className="w-full lg:w-80 sticky lg:top-0 self-start border px-5 py-10 rounded-2xl h-fit bg-white border-gray-400">
            <h2 className="font-semibold text-xl text-gray-500 mb-4 border-b pb-4">Filter Resource</h2>
            {[
                { label: 'Categories', data: categories },
                { label: 'Stack', data: stack },
                { label: 'Style', data: style },
                { label: 'Color', data: colors },
                { label: 'Niche', data: niche },
            ].map(({ label, data }, idx) => (
                <div key={idx} className="  pb-1">
                    <div
                        className="font-semibold flex justify-between text-gray-700 items-center cursor-pointer"
                        onClick={() => toggleSection(label)}
                    >
                        <span>{label}</span>
                        {openSection === label ? (
                            <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                        ) : (
                            <MdOutlineKeyboardArrowUp className="w-5 h-5" />
                        )}
                    </div>
                    <div
                    >

                        {openSection !== label && (
                            <div className="mt-2">
                                {label === 'Color' ? (
                                    colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center py-2 text-sm font-normal text-gray-700  cursor-pointer hover:underline">
                                            <span className="w-60">{color.label}</span><div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: color.label.toLowerCase() }}
                                            ></div>
                                        </div>
                                    ))
                                ) : (
                                    data.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center py-2 text-sm font-normal text-gray-700  cursor-pointer hover:underline">
                                            <span className="w-60">{item.label}</span>
                                            <span className="text-gray-700 text-xs">({item.contentCount})</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </aside>
    );
};

export default FilterSidebar;