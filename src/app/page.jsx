'use client';

import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const Home = () => {
  const [director, setDirector] = useState([]);
  const [movie, setMovies] = useState([]);

  let directorData, movieData;

  const handleChangeDirector = e => {
    directorData = e.target.value;
  };

  const handleChangeMovie = e => {
    movieData = e.target.value;
  };

  const handleAddClick = () => {
    setDirector([...director, directorData]);
    console.log('hello');
    setMovies([...movie, movieData]);
    console.log('hi');
  };

  const handleRemoveClick = () => {
    setDirector([]);
    setMovies([]);
  };

  return (
    <main className="w-full min-h-screen bg-white text-black p-10">
      <div className="w-full min-h-screen flex flex-col gap-7 items-center">
        <h1 className="text-[40px] font-bold w-full text-center">
          Director And Movies
        </h1>
        <div className="flex gap-5 w-[95%]">
          {/* first */}
          <div className="w-[44%] min-h-150 border border-gray-100 flex flex-col gap-5">
            <input
              className="bg-gray-400 w-full h-10"
              placeholder="Director Name"
              onChange={e => handleChangeDirector(e)}
            />

            <div className="flex flex-col gap-2">
              {director.map((item, index) => {
                return (
                  <div className="w-full h-10 border">
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
          <div className="w-[44%] min-h-150 border border-gray-100 flex flex-col gap-5">
            <input
              className="bg-gray-400 w-full h-10"
              placeholder="Director Name"
              onChange={e => handleChangeMovie(e)}
            />

            <div className="flex flex-col gap-2">
              {movie.map((item, index) => {
                return (
                  <div className="w-full h-10 border" key={index}>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col gap-2 border w-[10%]">
            <Button
              className="w-fit py-1 rounded-[5px] px-10 bg-red-500"
              text="Add"
              onClick={handleAddClick}
            />
            <Button
              className="w-fit py-1 px-6 rounded-[5px] bg-green-500"
              text="Remove"
              onClick={handleRemoveClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
