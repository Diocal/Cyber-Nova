"use client";
import Navbar from './Navbar';

const NavbarWrapper = () => {
  return (
    <>
      {/* Navbar fijo y superpuesto al contenido */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-[1512px] mx-auto flex justify-between items-center p-6">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default NavbarWrapper;
