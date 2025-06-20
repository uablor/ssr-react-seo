
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home } from '../pages';
import Error from '../components/Error';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  );
};