import React from 'react';
import Plus from '../assets/Hero-Nav/Plus.svg';
import cardImage from '../assets/CardImage.png';

import { AiOutlineMore } from 'react-icons/ai';
import { FiLink2 } from 'react-icons/fi';

import List from '../assets/List.svg';
import Comment from '../assets/Comment.svg';
import User from '../assets/User.svg';


import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Slider from '@mui/material/Slider';


const Body = () => {
  return (
    <div className='body-container'>

      <div className="body-hero">

        <div className="hero-heading   flex flex-row align-middle justify-between">
          <div>
            <h1 className='text-4xl font-semibold'>New Campaign Run </h1>
            <p className='sub-heading-text   text-sm font-normal'>A new campaign launch work for brand new feature in May month</p>
          </div>
          <button className='flex items-center justify-center'>ADD MEMBERS</button>
        </div>

        <div className="hero-heading-nav   flex flex-row align-middle justify-between">
          <p>8 members</p>
          <ul className='flex flex-row align-middle justify-between'>
            <li>Participants View</li>
            <li className='board'>Board View</li>
            <li className='list'>List View</li>
            <li className='power'>Power View</li>
            <li><img src={Plus} alt="" /></li>
          </ul>
        </div>

      </div>

      <div className="body">
        <div className="todo">
          <div className="heading">
            To Do
          </div>

          <Card sx={{ maxWidth: 266.67 }}>

            <CardMedia component='img' height='194' image={cardImage} alt='test' />

            <CardContent>

              <Typography variant='subtitle1'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <span style={{ fontWeight: 600 }}>Highfidelity Design</span> <AiOutlineMore style={{ color: '#B8B9BD' }}/>
                </Box>
              </Typography>

              <Typography variant='subtitle2'>
                <span style={{ fontSize: '14px', color: '#B8B9BD', fontWeight: 400 }}>Make clear design and color</span>
              </Typography>

              <Box display='flex' justifyContent='space-between' marginTop={1}>
                <Box display='flex' alignItems='center'>
                  <img src={List} alt="" style={{ marginRight: '5px', width: '100%' }}/> <span style={{ fontSize: '14px', fontWeight: 400, color: '#B8B9BD' }}>Progress</span>
                </Box>
                <span style={{ fontSize: '14px', fontWeight: 500 }}>2/10</span>
              </Box>

              <Slider defaultValue={50} aria-label="Disabled slider" className="slider"   sx={{ color: 'red', height: '8px' }} />

              <Box display='flex' alignItems='center' justifyContent='space-between' marginTop={1}>
                <Box display='flex' alignItems='center'>
                  <Box display='flex' alignItems='center' marginRight='15px'>
                    <img src={Comment} alt="" style={{ marginRight: '4px', width: '16px' }} /> <span style={{ fontSize: '12px', fontWeight: 400, color: '#B8B9BD' }}>7</span>
                  </Box>
                  <Box display='flex' alignItems='center'>
                    <FiLink2 style={{ color: '#B8B9BD', marginRight: '4px', width: '16px' }} /> <span style={{ fontSize: '12px', fontWeight: 400, color: '#B8B9BD' }}>2</span>
                  </Box>
                </Box>
                <img src={User} alt="" />
              </Box>
            </CardContent>
          </Card>
        </div>
        
      </div>

    </div>
  )
}

export default Body