import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import HomeGridItem from './HomeGridItem'
import Collapse from '@mui/material/Collapse'

const Home = ({ view }) => {
    return (
        <Collapse orientation="horizontal" in={view}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <HomeGridItem buttonTileTile={'Hello'} />
                    </Grid>
                    <Grid size={4}>
                        <HomeGridItem buttonTileTile={'Hello'} />
                    </Grid>
                    <Grid size={4}>
                        <HomeGridItem buttonTileTile={'Hello'} />
                    </Grid>
                    <Grid size={8}>
                        <HomeGridItem buttonTileTile={'Hello'} />
                    </Grid>
                </Grid>
            </Box>
        </Collapse>
    )
}
export default Home
