import React from 'react'
import Image from "./Image"

const Logo = ({className, logo}) => {
  return (
    <a href="/" className={className}>
        <Image src={logo} alt={"Logo"} />
    </a>
  )
}

export default Logo