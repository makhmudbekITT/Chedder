import React from 'react'

const Typography = ({
    as = "p", className, children, ...props
}) => {
    const TypographyTag = as;
    className = `Typography ${className}`;

    return (
        <TypographyTag className={className} {...props}>
            {children}
        </TypographyTag>
    )
}

export default Typography