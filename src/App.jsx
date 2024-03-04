/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Header from "./components/Header";
import dataFetch from "./assets/dataFetch.json";
import CardCharacter from "./components/CardCharacter";
import HeroSection from "../src/components/heroSection";

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersSearch, setCharactersSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTimer, setSearchTimer] = useState(null);
  const [search, isSearch] = useState(false);

  useEffect(() => {
    setCharacters(dataFetch.results.slice(0, itemsPerPage));
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newCharacters =
      search === true
        ? charactersSearch.slice(startIndex, endIndex)
        : dataFetch.results.slice(startIndex, endIndex);
    setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    setLoading(false);
    setCurrentPage((prevPage) => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    // Definir una función para realizar la renderización después de un cierto retraso
    const delayedSearch = () => {
      if (inputValue !== "") {
        const newCharacters = dataFetch.results.filter((character) => {
          // Obtener el nombre del personaje y convertirlo a minúsculas
          const characterName = character.name.toLowerCase();
          // Verificar si el nombre del personaje incluye el término de búsqueda
          return characterName.includes(inputValue.toLowerCase());
        });
        setCharactersSearch(newCharacters);
        setCharacters(newCharacters.slice(0, itemsPerPage));
        isSearch(true);
      } else {
        setCharacters(dataFetch.results.slice(0, itemsPerPage));
        isSearch(false);
      }
    };

    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    setSearchTimer(setTimeout(delayedSearch, 700)); // Espera 500ms antes de realizar la búsqueda
  };

  return (
    <>
      <Header />
      <HeroSection searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex flex-col items-start py-10 px-4 md:px-10 lg:px-32">
        <p className="text-[#6C6E6C] font-bold text-4xl md:text-6xl">
          Personajes de Rick & Morty
        </p>
        <a className="text-[#2F362F] font-bold text-2xl">
          Lista de personajes de todas las temporadas de Rock & Morty
        </a>
      </div>
      {/* Cards de los personajes recorre dataFetch*/}
      {characters.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 md:px-32 px-4 mb-10">
          {characters.map((data, index) => (
            <div key={index} className={`fade-left delay-1000`}>
              <CardCharacter character={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <p className="text-4xl font-bold text-[#2E7685]">
            Ops no se han encontrado resultados...
          </p>
        </div>
      )}
    </>
  );
}

export default App;
