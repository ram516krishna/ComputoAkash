import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const FooterTop = () => {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Coding Journey Background"
          loading="lazy"
          className="object-cover h-full w-full opacity-20 dark:opacity-5 hero-bg"


          src="./img/1.jpg"
        />
      </div>
      <div className="flex flex-col justify-center text-center py-12 md:py-20 px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-6xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-zinc-100 tracking-wide">
          The Future Starts Here !
        </h2>
        <p className="text-base sm:text-xl text-zinc-700 dark:text-zinc-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          Learn coding step-by-step with India's most loved programming mentor.
        </p>
        <div className="flex justify-center">
          <Link to="/login">
           <Button>Starts Now</Button>
          </Link>
        </div>
      </div>
    </section>

  )
}

export default FooterTop