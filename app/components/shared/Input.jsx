
const Input = ({ type, placeholder, isInput = true, customStyle, title }) => {
    const container = "flex flex-col gap-1.5";
    const titleStyle = "font-inter text-sm font-normal text-[#344054]";
    const inputStyle = "px-4 py-3 rounded-lg border border-[#D0D5DD]";
    return (
        isInput ? <div className={container}><h4 className={titleStyle}>{title}</h4><input className={inputStyle} type={type} placeholder={placeholder} /></div> : <div className={`${container} ${customStyle}`}><h4 className={titleStyle}>{title}</h4> <textarea className={inputStyle} placeholder={placeholder} rows='5' /></div>
    )
}

export default Input