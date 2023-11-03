import React from 'react';

function AribaKhan() {
  const interviewStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const quotationStyle = {
    fontStyle: 'italic',
    color: '#555',
  };

  return (
    <div style={interviewStyle}>
      <img src="https://i.ytimg.com/vi/HgXCa8zvWj0/sddefault.jpg" width="100%" height="50%" />
      <h1 style={headingStyle}>QUOTATION</h1>
      <p style={quotationStyle}>
        "Scholarship applications are unpredictable; you’ll never know if you'll be selected. Keep your hope alive, as there’s no shortcut to success in winning them."
      </p>

      <h1 style={headingStyle}>INTRO</h1>
      <p>
        Ariba Khan's journey from Noida to the University of British Columbia (UBC) is a perfect example of how determined young people can achieve great things. Ariba is a freshman at UBC, and her story is all about being strong, never giving up, and following her passions. In a special interview, she tells us about the ups and downs of her incredible journey and shares valuable advice for students who want to study abroad.
      </p>

      <h1 style={headingStyle}>1. Ariba, could you tell us about the amazing things you've done that helped you get into UBC?</h1>
      <p>
        <strong>Ans. A:</strong> When I think about my journey, I feel really proud and thankful. It's been a lot of hard work and determination that got me to where I am today. Getting a full scholarship as an international student and winning the International Impact Award show that I've been really committed to my goals.
        <br /><br />
        Ever since I was little, I've been super interested in economics, business, and entrepreneurship. I always thought these things had the power to make the world better.
        <br /><br />
        I've had two big motivations on this journey: I always want to do really well in school, and I also want to find ways to make a positive difference in the world by coming up with new ideas and solutions. These are the things that have kept me going.
      </p>

      <h1 style={headingStyle}>2. Experience in founding the "Ariba Impact Express" club during 11th grade</h1>
      <p>
        <strong>Ans. A:</strong> When I was in 11th grade, I started a club called 'Ariba Impact Express.' It was all about doing good things for our community and making a positive impact on society.
        <br /><br />
        I also had some really cool summer internships, like one at Babson College. This place is famous for teaching people about starting businesses. My time at Babson made me even more excited about coming up with new ideas and solutions to make the world better. It was like a spark that lit up my passion for entrepreneurship and helping others.
      </p>

      <h1 style={headingStyle}>What was your recipe for winning the application</h1>
      <p>
        <strong>Ans. A:</strong> You know, there's no secret formula for winning a scholarship. It can be quite unpredictable. You never really know what the people reviewing your application might like about you.
        <br /><br />
        In my case, I put a lot of emphasis on talking about social impact and sustainability. I also made sure to participate in several summer programs. This not only gave me valuable experience but also helped build up my profile. So, it's all about showcasing your strengths and what makes you stand out.
      </p>

      <h1 style={headingStyle}>Q: What counsel would you share with aspiring minds yearning to carve their destinies?</h1>
      <p>
        <strong>Ans. A:</strong> "If I were to offer advice to those eager to shape their futures, I'd say that my journey underscores the significance of being punctual, excelling in your studies, and forming connections with others.
        <br /><br />
        Seize the present moment; it's your ticket to unlocking opportunities. Strive for excellence in everything you do, and don't underestimate the power of networking. Building relationships can take you places you never thought possible and shape the path to your dreams in unique and incredible ways."
      </p>
    </div>
  );
}

export default AribaKhan;
