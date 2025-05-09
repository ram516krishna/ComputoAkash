import React from 'react'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      
      <div className="px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">YourBrand</h2>
          <p className="text-sm text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Services</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-500">
            <Facebook size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
            <Twitter size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-pink-500">
            <Instagram size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-700">
            <Linkedin size={18} />
          </Button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
