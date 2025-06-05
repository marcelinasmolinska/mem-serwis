import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './components/Navigation';
import HotMemes from './pages/HotMemes';
import RegularMemes from './pages/RegularMemes';
import memesData from './memesData';
import './App.css';
import { FaStar } from 'react-icons/fa';
import FavoriteMemes from './pages/FavoriteMemes';
import ErrorPage from './pages/ErrorPage';
import AddMeme from './components/AddMeme';

export default function App() {
  const [memes, setMemes] = useState(memesData);

function handleUpvote(id) {
  setMemes(prevMemes =>
    prevMemes.map(mem => {
      if (mem.id === id) {
        return { ...mem, upvotes: mem.upvotes + 1 };
      } else {
        return mem;
      }
    })
  );
}
function handleDownvote(id) {
  setMemes(prevMemes =>
    prevMemes.map(mem => {
      if (mem.id === id) {
        return { ...mem, downvotes: mem.downvotes + 1 };
      } else {
        return mem;
      }
    })
  );
}
function handleToggleFavorite(id) {
  setMemes(prevMemes =>
      prevMemes.map(mem =>
        mem.id === id ? {...mem, favorite: !mem.favorite } : mem
      )
  );
  }
  function handleAddMeme(newMem) {
    setMemes((prevMemes) => [...prevMemes, newMem]);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Mem serwis</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/hotmemes" element={<HotMemes memes={memes} onUpvote={handleUpvote} onDownvote={handleDownvote} onToggleFavorite={handleToggleFavorite} />} />
            <Route path="/" element={<RegularMemes memes={memes} onUpvote={handleUpvote} onDownvote={handleDownvote} onToggleFavorite={handleToggleFavorite} />} />
            <Route path="/favoritememes" element={<FavoriteMemes
              memes={memes}
              onUpvote={handleUpvote}
              onDownvote={handleDownvote}
              onToggleFavorite={handleToggleFavorite}
            />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/addmeme" element={<AddMeme onAddMeme={handleAddMeme} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}


