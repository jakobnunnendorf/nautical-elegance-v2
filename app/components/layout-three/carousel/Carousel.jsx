'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard";

export const Carousel = ({ carouselData }) => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const carouselRef = useRef(null);

    // Update slideWidth when carouselRef changes
    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                const width = carouselRef.current.offsetWidth / carouselData.length;
                setSlideWidth(width);
            }
        };

        // Set initial width
        handleResize();

        // Update width on window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [carouselData.length]);

    const prevSlider = () => setCurrentSlider((currentSlider) =>
        currentSlider === 0 ? carouselData.length - 1 : currentSlider - 1
    );

    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) =>
        currentSlider === carouselData.length - 1 ? 0 : currentSlider + 1
    ), [carouselData.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="w-full relative overflow-hidden max-md:hidden">
            {/* Arrow Left */}

            <div className="absolute left-0 z-10 bg-gradient-to-r from-white to-white/[.02] h-[341px] w-28">
                <button
                    onClick={prevSlider}
                    className="absolute top-1/2 left-3 z-50 flex justify-center items-center border border-black size-11 rounded-[5px] group hover:bg-primary-one hover:border-none"
                >
                    <svg className=" group-hover:fill-white fill-black" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.341782 8.47737C-0.0487423 8.08685 -0.0487423 7.45368 0.341782 7.06316L6.70574 0.699197C7.09627 0.308673 7.72943 0.308673 8.11996 0.699197C8.51048 1.08972 8.51048 1.72289 8.11996 2.11341L2.4631 7.77027L8.11996 13.4271C8.51048 13.8176 8.51048 14.4508 8.11996 14.8413C7.72943 15.2319 7.09627 15.2319 6.70574 14.8413L0.341782 8.47737ZM22.8931 8.77026L1.04889 8.77027L1.04889 6.77027L22.8931 6.77026L22.8931 8.77026Z" />
                    </svg>
                </button>
            </div>

            {/* Arrow Right */}
            <div className="absolute right-0 z-10 bg-gradient-to-r from-white/[.02] to-white h-[341px] w-28">
                <button
                    onClick={nextSlider}
                    className="absolute top-1/2 z-50 right-3 flex justify-center items-center border border-black size-11 rounded-[5px] group hover:bg-primary-one hover:border-none"
                >
                    <svg className="rotate-180 group-hover:fill-white fill-black" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.341782 8.47737C-0.0487423 8.08685 -0.0487423 7.45368 0.341782 7.06316L6.70574 0.699197C7.09627 0.308673 7.72943 0.308673 8.11996 0.699197C8.51048 1.08972 8.51048 1.72289 8.11996 2.11341L2.4631 7.77027L8.11996 13.4271C8.51048 13.8176 8.51048 14.4508 8.11996 14.8413C7.72943 15.2319 7.09627 15.2319 6.70574 14.8413L0.341782 8.47737ZM22.8931 8.77026L1.04889 8.77027L1.04889 6.77027L22.8931 6.77026L22.8931 8.77026Z" fill="black" />
                    </svg>
                </button>
            </div>


            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="ease-linear duration-500 flex gap-6 transform-gpu"
                style={{ transform: `translateX(-${currentSlider * slideWidth}px)` }} // Use the dynamically calculated slideWidth
            >
                {carouselData.map((slide, idx) => (
                    <PortfolioCard key={idx} {...slide} />
                ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center items-center rounded-full w-full gap-2.5 mt-12">
                {carouselData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlider(idx)}
                        className={`rounded-full duration-500 ${currentSlider === idx ? "w-16 bg-primary-one" : "w-5 bg-primary-one/50"} h-5`}
                    ></button>
                ))}
            </div>
        </div>
    )
};
