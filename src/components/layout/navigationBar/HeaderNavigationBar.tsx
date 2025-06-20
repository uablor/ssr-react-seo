// Libraries imports
import { Link } from 'react-router-dom';

const HeaderNavigationBar = () => {
  return (
    <section className="flex justify-start bg-gray-800 p-2.5 w-full">
      <a
        href="/"
        className="text-white font-medium mr-5 hover:text-indigo-600 active:text-pink-500 active:text-lg"
      >
        Home
      </a>
      <a
        href="/about"
        className="text-white font-medium mr-5 hover:text-indigo-600 active:text-pink-500 active:text-lg"
      >
        About Us
      </a>
      <a
        href="/contactUs"
        className="text-white font-medium mr-5 hover:text-indigo-600 active:text-pink-500 active:text-lg"
      >
        Contact Us
      </a>
    </section>
  );
};

export default HeaderNavigationBar;

