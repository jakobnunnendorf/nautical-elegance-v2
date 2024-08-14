import React from "react";

const openClassNames = {
    right: "translate-x-0",
    left: "translate-x-0",
    top: "translate-y-0",
    bottom: "translate-y-0",
};

const closeClassNames = {
    right: "translate-x-full",
    left: "-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
};

const classNames = {
    right: "inset-y-0 right-0",
    left: "inset-y-0 left-0",
    top: "inset-x-0 top-0",
    bottom: "inset-x-0 bottom-0",
};

const Drawer = ({ open, setOpen, side = "right", children }) => {
    return (
        <div
            id={`dialog-${side}`}
            className="relative z-10"
            aria-labelledby="slide-over"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(!open)}
        >
            <div
                className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-all ${open
                    ? "opacity-100 duration-500 ease-in-out visible"
                    : "opacity-0 duration-500 ease-in-out invisible"
                    }`}
            ></div>
            <div className={`${open ? "fixed inset-0 overflow-hidden" : ""} relative`}>
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className={`pointer-events-none fixed max-w-full ${classNames[side]}`}
                    >
                        <div
                            className={`pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500 ${open ? openClassNames[side] : closeClassNames[side]
                                }`}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                            }}
                        >
                            <div className="flex flex-col h-full overflow-y-auto bg-primary-one p-20 shadow-xl rounded-lg relative">
                                <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-4 left-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;