import React from 'react';
import './ContentPreview.css';

export default function ContentPreview(props) {
    return (
        <a href={props.url} className="content-preview">
            <div>
                <h2>{props.title}</h2>
                <img className="thumbnail" src={props.thumbnail}></img>
            </div>
        </a>
    )
}