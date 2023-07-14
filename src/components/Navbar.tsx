import Link from "next/link"
import React from 'react'

function Navbar() {
  return (
    <nav className=" flex flex-row gap-5 p-5 "> 
        <Link href={"/"}>Home</Link>

        <Link href={"/product"}>Product</Link>
    </nav>
  )
}

export default Navbar