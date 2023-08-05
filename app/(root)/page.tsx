import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
 <div>
  <h1>
    Threads
  </h1>
  <div>
      <UserButton afterSignOutUrl="/"/>
    </div>


  </div>
  )
}
