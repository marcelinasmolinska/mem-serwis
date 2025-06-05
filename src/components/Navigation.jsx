import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">Regular Memes</NavLink>
        </li>
        <li>
          <NavLink to="/hotmemes">Hot Memes</NavLink>
        </li>
        <li>
          <NavLink to="/favoritememes">Favorite Memes</NavLink>
        </li>
        <li>
          <NavLink to="addmeme">Add meme</NavLink>
        </li>
        
      </ul>
    </nav>
  );
}