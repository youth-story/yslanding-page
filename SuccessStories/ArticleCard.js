import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ArticleCard({ article }) {
  const navigation = useNavigate();

  const handleReadNowClick = () => {
    navigation(`/success-story/${article.slug}`);
  };

  return (
    <Card style={{ width: 'fit-content', height: 'fit-content', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Img  style={{alignSelf: 'center', justifySelf: 'center', width: "50%", height: "50%"}} variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.quote}</Card.Text>
        <Button variant="primary" onClick={handleReadNowClick}>Read now</Button>
      </Card.Body>
      <style>
        {`
          @media (max-width: 768px) {
            .card {
              width: fit-content;
              height: 'fit-content';
            }
          }
        `}
      </style>
      <style>
        {`
          @media (max-width: 768px) {
            .card {
              width: fit-content;
              height: 'fit-content';
            }
          }
        `}
      </style>
    </Card>
  );
}

export default ArticleCard;
