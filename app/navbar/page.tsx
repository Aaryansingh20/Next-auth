import React from 'react'
import { SignedIn, UserButton,SignedOut, SignInButton} from '@clerk/nextjs'


const Navbar = () => {
  return (
    <div >
          <div className=" flex justify-between align-middle m-3 ">
        <h2>NEXT.JS</h2>
        <ul className="flex justify-center gap-8 text-[#B6B6B6]   ">
          <li><a href='/' className='hover:text-white' >HOME</a></li>
          <li><a href='about' className='hover:text-white'>ABOUT</a></li>
          <li><a href='contact' className='hover:text-white'>CONTACT</a></li>
          <li><a href='blog' className='hover:text-white'>BLOG</a></li>

        </ul>
        <div>
        <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut >
          <SignInButton/>
        </SignedOut>
         
        
        </div>
      </div>
    </div>
  )
}

export default Navbar