import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function Mem({
  title,
  img,
  id,
  upvotes,
  downvotes,
  onUpvote,
  onDownvote,
  favorite,
  onToggleFavorite,
}) {

  const starStyle = {
    cursor: "pointer",
    color: favorite ? "gold" : "gray",
    marginLeft: "10px",
  };

  return (
    <div className="mem-card">
      <h3>
        {title}
        <span onClick={() => onToggleFavorite(id)} 
        style={starStyle} 
        title={favorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        aria-label={favorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        role="button"
      >
         <FaStar />
        </span>
      </h3>
      <img src={img} alt={title} style={{ maxWidth: "400px", width: "100%", height: "auto" }} />

      <div className="vote-buttons">
        <button onClick={() => onUpvote(id)} aria-label="Polub mema">
          <AiOutlineLike /> {upvotes}
        </button>
        <button onClick={() => onDownvote(id)} aria-label="Nie lubię mema">
          <AiOutlineDislike /> {downvotes}
        </button>
     </div>
    </div>
  );
}
