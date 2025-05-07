'use client';

import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const Home = () => {
  const [director, setDirector] = useState([]);
  const [movie, setMovies] = useState([]);

  const [data, setData] = useState([]);

  let directorData, movieData;

  const handleChangeDirector = e => {
    directorData = e.target.value;
  };

  const handleChangeMovie = e => {
    movieData = e.target.value;
  };

  const handleAddClick = () => {
    setData([...data, { director: directorData, movie: movieData }]);
  };

  const handleRemoveRow = index => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <main className="w-full min-h-screen bg-white text-black p-10">
      <div className="w-full min-h-screen flex flex-col gap-7 items-center">
        <h1 className="text-[40px] font-bold w-full text-center">
          Director And Movies
        </h1>
        <div className="flex gap-5 w-[95%]">
          <input
            className="bg-gray-400 w-full h-10"
            placeholder="Director Name"
            onChange={e => handleChangeDirector(e)}
          />

          <input
            className="bg-gray-400 w-full h-10"
            placeholder="Director Name"
            onChange={e => handleChangeMovie(e)}
          />

          <Button
            onClick={handleAddClick}
            className="bg-red-600 w-[15%]"
            text="add"
          />
        </div>

        <div className="flex flex-col gap-5 w-[95%] border border-gray-100 min-h-100">
          {data.map((item, index) => (
            <div key={index} className="flex gap-5 w-full">
              <p className="w-full border"> {item.director}</p>
              <p className="w-full border">{item.movie}</p>
              <button
                onClick={() => handleRemoveRow(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
