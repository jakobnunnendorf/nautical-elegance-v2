
const Button = ({ title, rounded, bgColor = "bg-primary-one" }) => {
    return (
        <button className={`px-10 py-3 w-fit font-lora text-sm sm:text-base md:text-lg font-normal ${rounded && rounded} ${bgColor == 'bg-white' ? "text-black bg-white" : "text-white bg-primary-one"}`} >{title}</button>
    )
}

export default Button