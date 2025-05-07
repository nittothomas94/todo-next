'use client';

import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const Home = () => {
  const [director, setDirector] = useState([]);
  const [movie, setMovies] = useState([]);
  const [directorValue, setDirectorValue] = useState('');
  const [movieValue, setMovieValue] = useState('');
  const [data, setData] = useState([]);

  let directorData, movieData;

  const handleChangeDirector = e => {
    setDirectorValue(e.target.value);
  };

  // console.log(directorValue);

  const handleChangeMovie = e => {
    setMovieValue(e.target.value);
  };

  const handleAddClick = () => {
    setData([...data, { director: directorValue, movie: movieValue }]);
    setDirectorValue('');
    setMovieValue('');
  };

  // console.log(data);

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

        {/* Headings */}
        <div className="flex gap-5 w-[95%]">
          <Input
            className="bg-gray-200 w-full h-12 px-5"
            placeholder="Director Name"
            onChange={e => handleChangeDirector(e)}
            value={directorValue}
          />

          <Input
            className="bg-gray-200 px-5 w-full h-12"
            placeholder="Movie Name"
            onChange={e => handleChangeMovie(e)}
            value={movieValue}
          />

          <Button
            onClick={handleAddClick}
            className="bg-red-600 w-[15%] cursor-pointer hover:bg-red-800 rounded-[5px] hover:text-white active:scale-95"
            text="add"
          />
        </div>

        {/* body part */}

        <div className="flex flex-col gap-5 w-[95%] border border-gray-100 min-h-100">
          {data.map((item, index) => (
            <div key={index} className="flex gap-5 w-full">
              <p className="w-full h-10 border border-gray-200 px-5 py-3 flex items-center">
                {item.director}
              </p>
              <p className="px-5 w-full h-10 border border-gray-200 py-3 flex items-center">
                {item.movie}
              </p>
              <Button
                onClick={() => handleRemoveRow(index)}
                className="bg-green-500 text-white px-2 py-1 rounded-[5px] cursor-pointer hover:bg-green-800  hover:text-white active:scale-95"
                text="Remove"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
