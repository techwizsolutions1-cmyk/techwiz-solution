import React from 'react'
import Image from 'next/image'
const Pweb = () => {
  return (
    <div className='flex flex-col md:flex-row space-x-20 px-20 justify-center' >

<Image src="/zarwastore.png" alt='pic' width={300} height={50}></Image>
<Image src="/desktop.png" alt='pic' width={300} height={50}></Image>

    </div>
  )
}

export default Pweb;