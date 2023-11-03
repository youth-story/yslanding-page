import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Profile({name, role, pic, linkedIn}) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
        <Typography style={{color: 'rgb(133, 2, 2)'}} level="h2" fontSize="lg" textColor="#000">
          {role}
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff">
            <img src={pic} alt={`${name}'s pic`} />
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.2))',
            border: 'none',
            borderColor: '#000',
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} level="h2" fontSize="lg" textColor="#fff" m={2}>
            <span style={{color: 'white'}}>{name}</span>
            <a href={linkedIn} style={{ marginLeft: '10px' }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  alt="LinkedIn Logo"
                  style={{ width: '50px', height: '50px' }}
                />
              </a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}