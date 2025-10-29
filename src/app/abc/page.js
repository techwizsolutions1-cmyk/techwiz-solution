import React from 'react'
import { useRouter } from 'next/navigation'
const Abc = () => {
    const route=useRouter()
    route.push("/forms/abc")
  return (
    <div>page</div>
  )
}

export default Abc