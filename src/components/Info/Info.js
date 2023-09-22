import React from 'react';
import Message from './Message/Message';
import styles from './Info.module.css';
import Button from './Message/Button';

export default function Info() {
  const heading1 = 'INSPIRING STORIES';
  const heading2 = 'YOUTH COMMUNITY';
  const message1 =
    'From budding scientists and talented artists to social activists and technology innovators, our success stories highlight their struggles breakthroughs and the positive impacts they bring to our society.';
  const message2 =
    'Bringing together young people to share their experiences, insights and perspectives connect and support each other. Our content will be typically tailored to the interests and concerns of the youth and will include articles, magazines, interviews, reviews, advice and columns and many more.';
  const text1 = 'powerful content suggestion engine';
  const text2 = 'teammates and friends';

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>WHY IT'S COOL?</h1>
      <div className={styles.textContainer}>
        <div className={styles.messagesContainer}>
          <Message heading={heading1} message={message1} />
          <Message heading={heading2} message={message2} />
        </div>
        <div className={styles.btnContainer}>
          <Button text={text1} color="orange" />
          <Button text={text2} color="dodgerblue" />
        </div>
      </div>
      <iframe
        width="560"
        className={styles.video}
        height="315"
        src="https://www.youtube.com/embed/kOgfmmv9Fhc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
