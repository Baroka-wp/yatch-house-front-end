import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './mainpage.css';

const Socials = () => (
  <div>
    <FacebookRoundedIcon
      sx={{
        fontSize: '1.5rem',
        color: 'rgb(0, 0, 0, 0.26)',
        marginRight: '1rem',
      }}
    />
    <InstagramIcon
      sx={{
        fontSize: '1.5rem',
        color: 'rgba(0, 0, 0, 0.26)',
        marginRight: '1rem',
      }}
    />
    <TwitterIcon sx={{ fontSize: '1.5rem', color: 'rgb(0, 0, 0, 0.26)' }} />
  </div>
);

export default Socials;
