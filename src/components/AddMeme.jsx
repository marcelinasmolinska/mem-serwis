import React, { useState } from "react";
import { AiFillSecurityScan } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function AddMeme({ onAddMeme }) {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && img.trim() !== "") {
      const newMem = {
        id: crypto.randomUUID(),
        title: title,
        image: img,
        upvotes: 0,
        downvotes: 0,
        favorite: false,
      };
      onAddMeme(newMem);
      setTitle("");
      setImg("");
      navigate("/");
    }
  };
 
  return ( 
    <form onSubmit={handleSubmit} className="add-meme-form">
      <h2>Dodaj nowy mem</h2>

      <label>
        Tytuł:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Wpisz tytuł mema"
          required
        />
      </label>

      <label>
        URL obrazka:
        <input
          type="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Wklej link do obrazka"
          required
        />
      </label>

      <button type="submit">Dodaj</button>
    </form>
  );
}
