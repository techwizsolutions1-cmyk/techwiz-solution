import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Pweb = () => {
  return (
    <div className='flex flex-col md:flex-row space-x-20 px-20 justify-center' >

<Link href='https://zarwa.store/'><Image src="/zarwastore.png" alt='pic' width={300} height={50} className='hover:scale-120 cursor-pointer'></Image></Link>
<Link href='https://kazmifoundation.com/'><Image src="/kazmi.png" alt='pic' width={300} height={50} className='hover:scale-120 cursor-pointer'></Image></Link>

    </div>
  )
}

export default Pweb;