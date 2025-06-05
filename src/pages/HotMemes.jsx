import React from 'react';
import Mem from '../components/Mem';

export default function HotMemes({ memes, onUpvote, onDownvote, onToggleFavorite }) {
    const hotMemes = memes.filter(mem => mem.upvotes - mem.downvotes > 5);

    return (
        <div className='mem-list'>
            <h2>Hot Memes</h2>
             {hotMemes.length === 0 ? (
                <p>Brak hot memów.</p>
            ) : (
                hotMemes.map(mem => (
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