"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



function NavBar() {

  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-orange-100 fixed top-0 left-0 right-0 z-10 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/Home">
                <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75" alt="" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5003-512.png" width={30} height={30} alt="logo" />
                  ) : (
                    <img
                      src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mx-2">
                <li className="pb-6 text-xl text-black py-6 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/Female" onClick={() => setNavbar(!navbar)}>
                    Female
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/Male" onClick={() => setNavbar(!navbar)}>
                    Male
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/Kids" onClick={() => setNavbar(!navbar)}>
                    Kids
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/AllProduct" onClick={() => setNavbar(!navbar)}>
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-row items-center justify-evenly py-3 md:py'>

            <input className="py-2 px-2 border-4  md:py-1" placeholder='what you looking for' />
            <Link href="/Cart">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_250458.png"
                width={30}
                height={30}
                alt="logo"
                className="mx-2"
              />
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}

export default NavBar;