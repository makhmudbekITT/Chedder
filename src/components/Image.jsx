import React from 'react'

const Image = ({
    className, src, alt, children, ...props
}) => {
    className = `Image ${className}`;
    return (
        <div className={className} {...props}>
            <img 
                src={src} alt={alt} 
                title={alt}
            />
            {children}
        </div>
    )
}

export default Image