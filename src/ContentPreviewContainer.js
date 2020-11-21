import React from 'react';
import ContentPreview from './ContentPreview.js';
import './ContentPreviewContainer.css';
import TherapyThumbnail from './media/videos/thumbnails/therapy-thumbnail.png';
import TrulyIsThumbnail from './media/videos/thumbnails/truly-is-thumbnail.png';
import SoBrooklynThumbnail from './media/videos/thumbnails/so-brooklyn-remix-thumbnail.png';
import NoFilterThumbnail from './media/videos/thumbnails/no-filter-catfish-thumbnail.png';
import GraciesGnocchiThumbnail from './media/videos/thumbnails/gracies-russet-potato-gnocchi-thumbnail.png';
import ChangeYourBehaviorThumbnail from './media/videos/thumbnails/change-your-behavior-thumbnail.png';
import BroadwayBistroFoodHighlight1Thumbnail from './media/videos/thumbnails/broadway-bistro-food-highlight-1-thumbnail.png';
import GraciesValentines2020Thumbnail from './media/videos/thumbnails/gracies-valentines-recap-2020-thumbnail.png';

export default function ContentPreviewContainer() {
    return (
        <>
            <div className="content-preview-container glass-effect">
                <ContentPreview title="No Filter - MYNDOFMY" thumbnail={NoFilterThumbnail}/>
                <ContentPreview title="Broadway Bistro - Food Video" thumbnail={BroadwayBistroFoodHighlight1Thumbnail}/>
                <ContentPreview title="Therapy - Mary Gibson" thumbnail={TherapyThumbnail}/>
                <ContentPreview title="Gracie's - Red Hot Valentine’s Recap" thumbnail={GraciesValentines2020Thumbnail}/>
                <ContentPreview title="CHANGE YOUR BEHAVIOR - Jefé Da Don" thumbnail={ChangeYourBehaviorThumbnail}/>
                <ContentPreview title="Gracie's - Russet Potato Gnocchi" thumbnail={GraciesGnocchiThumbnail}/>
                <ContentPreview title="So Brooklyn Remix - J-R" thumbnail={SoBrooklynThumbnail}/>
                <ContentPreview title="TRULY IS - DRPPY HENDRXX x MVJ DAGHOST" thumbnail={TrulyIsThumbnail}/>
            </div>
        </>
    )
}

// CHANGE YOUR BEHAVIOR - Jefé Da Don - https://www.youtube.com/watch?v=5QqiAmIMICA
// No Filter (catfish) - MYNDOFMY - https://www.youtube.com/watch?v=71xg8gb9-5E
// So Brooklyn Remix - J-R - https://www.youtube.com/watch?v=9_sFFM8NPyo
// Therapy - Mary Gipson - https://www.youtube.com/watch?v=cuXCBhOgERg
// Broadway Bistro - Food Video - https://www.instagram.com/p/CAELnW7B3gb/
// Gracie's - Red Hot Valentine’s Recap - https://www.instagram.com/p/B9ILKEzhu1w/
// Gracie's - Russet Potato Gnocchi - https://www.instagram.com/p/B9iC98eBcBk/
// TRULY IS - DRPPY HENDRXX x MVJ DAGHOST - https://www.youtube.com/watch?v=1h4rpMmKU5A