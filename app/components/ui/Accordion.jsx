'use client';
import { useState } from "react";

export default function Accordion({ dataArr }) {
    const [isOpen, setIsOpen] = useState(null);
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };

    return (
        <div className="mx-auto w-full max-w-[1030px]">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className="my-2 border bg-primary-one-light/15 py-4 *:mix-blend-difference border-primary-one-light">
                    <button onClick={() => toggle(idx)} className="flex h-full px-5  w-full items-center justify-between text-lg font-normal text-black outline-none">
                        <span>{PerAccordion.title}</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.390381 0.511719L5.69525 5.81641L10.9999 0.511719" stroke="#232323" />
                        </svg>
                    </button>
                    <div className={`grid overflow-hidden border-t border-primary-one-light transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden pr-4 text-base text-[#555555] px-5 ">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}