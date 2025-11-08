"use client"
import React from 'react'
import Image from 'next/image'
import { Import } from 'lucide-react'
import Link from 'next/link'
const layout = ({children}) => {
  return (
    <div>
<div className='h-[100px] w-full bg-white py-3 px-5 flex flex-row  justify-between items-center'>
<Link href="/"><Image src="/logo.jpg" alt="pic" height={150} width={150}>
</Image></Link>
<Link href="/" className='cursor-pointer'><div className='cursor-pointer'><button>Go to Home</button></div></Link>
</div>
{children}
    </div>
  )
}

export default layout