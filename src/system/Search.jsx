import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Collapse from '@mui/material/Collapse'

const Search = ({ view }) => {
    return (
        <Collapse orientation="horizontal" in={view}>
            <Box
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    height: '100%',
                    minHeight: '100%',
                    minWidth: '100%',
                    margin: '15px',
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
            </Box>
        </Collapse>
    )
}

export default Search
