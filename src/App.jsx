import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import MemesPage from "./pages/MemesPage";
import memesData from "./memesData";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import AddMeme from "./components/AddMeme";

export default function App() {
  const [memes, setMemes] = useState(memesData);

  function handleUpvote(id) {
    setMemes((prevMemes) =>
      prevMemes.map((mem) => {
        if (mem.id === id) {
          return { ...mem, upvotes: mem.upvotes + 1 };
        } else {
          return mem;
        }
      })
    );
  }
  function handleDownvote(id) {
    setMemes((prevMemes) =>
      prevMemes.map((mem) => {
        if (mem.id === id) {
          return { ...mem, downvotes: mem.downvotes + 1 };
        } else {
          return mem;
        }
      })
    );
  }
  function handleToggleFavorite(id) {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem.id === id ? { ...mem, favorite: !mem.favorite } : mem
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
          <h1>Mem Serwis</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route
              path="/hotmemes"
              element={
                <MemesPage
                  type="hot"
                  memes={memes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route
              path="/"
              element={
                <MemesPage
                  type="regular"
                  memes={memes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route
              path="/favoritememes"
              element={
                <MemesPage
                  type="favorite"
                  memes={memes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
            <Route
              path="/addmeme"
              element={<AddMeme onAddMeme={handleAddMeme} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
