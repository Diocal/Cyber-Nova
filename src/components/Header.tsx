"use client";
import Image from "next/image"; // Importar Image de next/image

const Header = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden z-10">
      <div className="absolute md:top-[-143.18px] md:left-[-51px] top-[-30px] left-[-60px] w-[400px] h-[400px] md:w-[677px] md:h-[713.87px] z-0">
        <Image
          src="/vectorweb.png" // Ruta de la imagen
          alt="Decorative Vector Design" // Asegúrate de proporcionar un texto descriptivo
          width={677} // Ancho de la imagen (ajustado para la imagen de fondo)
          height={714} // Altura de la imagen (ajustado para la imagen de fondo)
          className="object-contain" // Ajusta el comportamiento de la imagen según sea necesario
        />
      </div>

      {/* Texto principal */}
      <div className="relative z-10 text-left max-w-[85%] ml-[10px] mt-[250px] md:max-w-none md:ml-[85px] md:mt-[400px]">
        <h1
          className="text-[35px] md:text-[80px] font-extrabold leading-tight md:leading-[105px] bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(90deg, rgba(131, 96, 195, 0.5) 0%, #C471ED 47%, rgba(46, 191, 145, 0.5) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Building Intelligent Solutions,{" "}
          <span className="block md:inline">Securing Your</span> Digital World
        </h1>
      </div>

      {/* Subtítulo */}
      <div className="relative z-10 text-left max-w-[85%] ml-[10px] mt-[30px] md:ml-[85px] md:mt-4 text-base md:text-3xl text-gray-300 leading-relaxed">
        Innovative Solutions in Cybersecurity, AI and APP Development to Protect and Propel Your Business
      </div>
    </header>
  );
};

export default Header;
