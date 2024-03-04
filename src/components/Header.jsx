import Rick_and_Morty from "../assets/Rick_and_Morty.svg";

const Header = () => {
  return (
    <div className="">
      <nav className="flex flex-row justify-center md:justify-between items-center lg:px-72 md:px-40">
        <a
          className="font-bold text-[#2F362F] text-xl hidden md:block"
          href="/home"
        >
          Home
        </a>
        <a href="/home">
          <img
            className="lg:w-60 w-44"
            src={Rick_and_Morty}
            alt="Rick and Morty"
          />
        </a>
        <a
          className="font-bold text-[#2F362F] text-xl hidden md:block"
          href="/character"
        >
          Character
        </a>
      </nav>
    </div>
  );
};

export default Header;
