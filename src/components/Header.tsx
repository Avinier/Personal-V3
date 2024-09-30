import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';


const Hamburger: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative z-10">
      <button
        onClick={toggleMenu}
        className="fixed top-20 right-20 z-50 p-2 text-gray-800 hover:text-gray-600 focus:outline-none transition-opacity duration-300"
      >
        {isOpen ? <X size={36} /> : <Menu size={36} />}
      </button>
  
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex text-text font-heading  flex-col items-center justify-center h-full">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-4xl font-bold mb-8 hover:text-gray-600 hover:italic transition-colors duration-200"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
    )
  } 

  
const Header: React.FC = () => {
    return(
        <>
        <Hamburger/>
        </>
    )
}

export default Header;