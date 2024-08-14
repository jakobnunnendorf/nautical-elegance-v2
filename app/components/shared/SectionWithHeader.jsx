import React from 'react'
import SectionTitle from '../ui/SectionTitle'

const SectionWithHeader = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-14 layout-container max-xl:px-5">
            <SectionTitle title={title} />
            {children}
        </div>
    )
}

export default SectionWithHeader