/* eslint-disable react/prop-types */
const CardCharacter = ({ character }) => {
  return (
    <div
      key={character.id}
      className={`flex flex-col items-center gap-3 p-4 bg-[#f0faeb] rounded-xl shadow-xl
             hover:shadow-2xl transition duration-500 ease-in-out transform 
             hover:-translate-y-1 hover:scale-105`}
    >
      <img
        className="h-[200px] w-[200px] object-cover rounded-xl"
        src={character.image}
        alt=""
      />
      <div className="flex flex-col items-center">
        <h1 className="text-[#2F362F] font-bold text-2xl">{character.name}</h1>
        <div className="flex flex-row items-center">
          <div
            className={`h-3 w-3 rounded-full ${
              character.status === "Dead"
                ? "bg-red-500"
                : character.status === "Alive"
                ? "bg-green-500"
                : "bg-yellow-500"
            } mr-2`}
          ></div>
          <p className="text-[#6C6E6C] font-light text-lg">
            {character.status} - {character.species}
          </p>
        </div>
        <p className="text-[#6C6E6C] font-light text-lg">
          Ultima localizacion:
        </p>
        <p className="text-[#6C6E6C] font-light text-lg">
          {character.location.name}
        </p>
      </div>
    </div>
  );
};

export default CardCharacter;
