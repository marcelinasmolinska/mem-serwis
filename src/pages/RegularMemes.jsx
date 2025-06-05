import React from 'react';
import Mem from '../components/Mem';

export default function RegularMemes({ memes, onUpvote, onDownvote, onToggleFavorite }) {
    const regularMemes = memes.filter(mem => mem.upvotes - mem.downvotes <= 5);

    return (
        <div className='mem-list'>
            <h2>Regular Memes</h2>
            {regularMemes.map(mem => (
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
            ))}
        </div>
    );
}