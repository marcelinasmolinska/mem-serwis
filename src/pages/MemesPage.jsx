import React from "react";
import Mem from "../components/Mem";

export default function MemesPage({ memes, type, onUpvote, onDownvote, onToggleFavorite }) {

    let filteredMemes = [];

    switch (type) {
        case 'hot':
            filteredMemes = memes.filter(mem => mem.upvotes - mem.downvotes > 5);
            break;
        case 'regular':
            filteredMemes = memes.filter(mem => mem.upvotes - mem.downvotes <= 5);
            break;
        case 'favorite':
            filteredMemes= memes.filter(mem => mem.favorite);
            break;
        default:
            filteredMemes = memes;
    }
    
    const titleMap = {
        hot: 'Hot Memes',
        regular: 'Regular Memes',
        favorite: 'Favorite Memes',
    };

    const emptyMessageMap = {
        hot: 'Brak hot memów.',
        regular: 'Brak regularnych memów.',
        favorite: 'Brak ulubionych memów.',
    };

    return (
        <div className="mem-list">
            <h2>{titleMap[type]}</h2>
            {filteredMemes.length === 0 ? (
                <p>{emptyMessageMap[type]}</p>
            ) : (
                filteredMemes.map(mem => (
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