import React from 'react'

// react icons imports
import { AiOutlineMore } from 'react-icons/ai';
import { FiLink2 } from 'react-icons/fi';
// local imports fo the icons
import { List, Comment, User } from '../assets'
// material ui imports
import { Box, Card, CardMedia, CardContent, Typography, Slider } from '@mui/material';

const CompletedCard = ({ completed }) => {

    // destructuring the todo prop so it will be easier to access each property
    const { id, subtitle1, subtitle2, image, color, value } = completed;

    return (
        <div>
            <Card sx={{ minWidth: 266.67, maxHeight: 446, marginBottom: '6%' }}>

                {/* the image in the card */}
                <CardMedia component='img' height='194' sx={{ padding: '5% 5% 0 5%' }} image={image} />

                <CardContent>

                    {/* the second text in the card */}
                    <Typography variant='subtitle1'>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <span style={{ fontWeight: 600 }}>{subtitle1}</span> <AiOutlineMore style={{ color: '#B8B9BD' }}/>
                        </Box>
                    </Typography>

                    {/* the second text in the card */}
                    <Typography variant='subtitle2'>
                        <span style={{ fontSize: '14px', color: '#B8B9BD', fontWeight: 400 }}>{subtitle2}</span>
                    </Typography>

                    {/* the list icon, "progress" and "2/10" */}
                    <Box display='flex' justifyContent='space-between' marginTop={1}>
                        <Box display='flex' alignItems='center'>
                            <img src={List} alt="" style={{ marginRight: '5px', width: '100%' }}/> <span style={{ fontSize: '14px', fontWeight: 400, color: '#B8B9BD' }}>Progress</span>
                        </Box>
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>2/10</span>
                    </Box>

                    {/* the slider */}
                    <Slider defaultValue={value} aria-label="Disabled slider" className="slider"   sx={{ color: {color}, height: '8px' }} />

                    {/* the comment, link and users icon */}
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
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
    )
}

export default CompletedCard