// eslint-disable-next-line react/prop-types
const HeroSection = ({ searchTerm, handleSearch }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 px-2 md:px-10 lg:px-32 pt-24">
      {/* Left side */}
      <div className="flex flex-col items-start gap-10 order-2 md:order-1">
        <h1 className="text-[#6C6E6C] font-extrabold text-6xl md:text-8xl">
          Rick & <br /> Morty App
        </h1>
        <a className="text-[#2F362F] font-bold text-2xl ml-4 relative">
          Busca tus personajes favoritos de Rick & Morty
          <span className="absolute h-full bg-[#2F362F] w-1 rounded-full top-0 left-[-10px]"></span>
        </a>
        <div className="flex w-full">
          <input
            className="w-full md:w-5/6 rounded-full border-2 border-[#2F362F] p-2 focus:border-[#2F362F]"
            type="text"
            placeholder="   Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      {/* Right side */}
      <div className="flex justify-center pt-14 md:pt-0 order-1 md:order-2">
        <img
          className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] object-cover"
          src="../src/assets/rickAndMortyHero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
