
const SatisfiedClientCard = ({ desc, image, title, position }) => {
    return (
        <div className="flex flex-col gap-14 group">
            <div className="group  px-6 py-9 rounded-[30px] w-full max-w-[400px] group-hover:bg-[#E4CE9C] flex flex-col relative">
                <div className="size-16 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] group-hover:bg-white bg-[#E4CE9C] rounded-full absolute flex items-center justify-center -top-9 left-9 z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="26"
                        fill="none"
                        viewBox="0 0 36 26"
                        className="group-hover:fill-[#E4CE9C] fill-[#0A1928]"
                    >
                        <path
                            d="M11.128 25.45l-4.45-8.902h8.901V.969H.001v15.579l4.45 8.902h6.677zm20.03 0l-4.452-8.902h8.902V.969H20.03v15.579l4.451 8.902h6.676z"
                        ></path>
                    </svg>
                </div>
                <svg className="absolute -bottom-8 hidden group-hover:block left-9" width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.161865H30.4685V33.7048C13.6412 33.7048 0 20.0636 0 3.23633V0.161865Z" fill="#E4CE9C" />
                </svg>

                <p className="pr-2.5 text-navy-blue-dark font-inter font-normal text-sm leading-loose">{desc}</p>
            </div>
            <div className="flex items-center gap-5 px-5 py-3 rounded-l-[10px] rounded-br-[3px]">
                <img src={image} className="size-16" alt="avater" />
                <div className="flex flex-col">
                    <h5 className="font-inter font-bold text-2xl text-[#181818]">{title}</h5>
                    <p className="font-inter font-normal text-base text-[#747474]">{position}</p>
                </div>
            </div>
        </div>)
}

export default SatisfiedClientCard