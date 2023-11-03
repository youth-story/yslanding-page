import React, { useState } from 'react';
import articles from '../../dummy/articles.js';
import ArticleCard from './ArticleCard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ArticleCardCover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < articles.length - getVisibleCount()) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleCount = () => {
    // Determine the number of visible articles based on the screen width
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return 1; // On smaller screens, show one article
    } else {
      return 1; // On larger screens, show three articles
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '0 20px 0 20px' }}>
      <h2 style={{ alignSelf: 'flex-start', justifySelf: 'flex-start', fontSize: '2rem', textAlign: 'left', marginBottom: '20px' }}>Top Stories - November Edition</h2>

      <div style={{ display: 'flex', justifySelf: 'center', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <span onClick={handlePrevClick} style={{ margin: '20px', cursor: 'pointer' }}>
          {currentIndex > 0 && <FontAwesomeIcon icon={faArrowLeft} />}
        </span>
        {articles.slice(currentIndex, currentIndex + getVisibleCount()).map((article, index) => (
          <span style={{ margin: '20px', flexBasis: `calc(${100 / getVisibleCount()}% - 40px)` }} key={index}>
            <ArticleCard article={article} key={index} />
          </span>
        ))}
        <span onClick={handleNextClick} style={{ margin: '20px', cursor: 'pointer' }}>
          {currentIndex < articles.length - getVisibleCount() && <FontAwesomeIcon icon={faArrowRight} />}
        </span>
      </div>
    </div>
  );
}
