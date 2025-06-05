import React from "react";
import Mem from "../components/Mem";

export default function FavoriteMemes({ memes, onUpvote, onDownvote, onToggleFavorite}) {
    const favoriteMemes = memes.filter(mem => mem.favorite);

    return (
        <div>
            <h2>Favorite Memes</h2>
            {favoriteMemes.length === 0 ? (
                <p>Brak ulubionych memów.</p>
            ) : (
                favoriteMemes.map(mem => (
                     <Mem
                        key={mem.id}
                        id={mem.id}
                        title={mem.title}
                        img={mem.image}
                        upvotes={mem.upvotes}
                        downvotes={mem.downvotes}
                        favorite={mem.favorite}
                        onUpvote={onUpvote}
                        onDownvote={onDownvote}
                        onToggleFavorite={onToggleFavorite} 
                     />
                ))
            )}
        </div>
    );
}
