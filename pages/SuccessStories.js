import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/SuccessStories/Header';
import ArticleCard from '../components/SuccessStories/ArticleCard';
import ArticleCardCover from '../components/SuccessStories/ArticleCardCover';
import ImageCarousel from './ImageCarousel';
import c2 from './c2.jpg';

export default function SuccessStories() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Use flex column layout
        justifyContent: 'center', // Place items between the top and center vertically
        alignItems: 'center', // Center horizontally
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <ImageCarousel />
      <Header title="Success Stories" />
      <ArticleCardCover />
      <div style={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "15px",
        flexDirection: "column",
        width: '100%'
      }}>
      <h2>Upcoming Events</h2>
      <br />
      <img src={c2}
        alt="image" style={{width: '80vw', height: '40vh', borderRadius: '20px', alignSelf: "center"}} />
        </div>
    </div>
  );
}
