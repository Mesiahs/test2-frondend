'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo_Edufux from '../../assets/img/Edufux.jpg'
import loading_dots from '../../assets/img/loading-dots.gif'

function Navbar() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const scrollFunction = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('shadow-navbar')
          navbar.classList.add('bg-white')
        } else {
          navbar.classList.remove('shadow-navbar')
          navbar.classList.remove('bg-white')
        }
      }
    }

    window.addEventListener('scroll', scrollFunction)
    return () => window.removeEventListener('scroll', scrollFunction)
  }, [])

  return (
    <nav id="navbar" className="w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed">
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link href="/" className="ml-4 mt-2">
            <Image src={logo_Edufux} width={200} height={100} alt="Edufux Logo" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            {['Casos', 'Servicios', 'Nosotros', 'About', 'Blog'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
              >
                {item}
              </Link>
            ))}
            <Link href="/test">
              <button
                type="button"
                className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-lg font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 bg-orange-500 focus:ring-offset-2"
              >
                Iniciar test
                {/* <Image src={loading_dots} className="w-12 h-4 mt-1 ml-2" alt="Cargando" /> */}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
