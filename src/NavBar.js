import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav class="nav_links">
            <ul>
                <li>
                    <a href="/work">WORK</a>
                </li>
                <li>
                    <a href="/about">ABOUT</a>
                </li>
                <li>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}