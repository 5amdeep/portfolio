import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

export default function SimpleBottomNavigation({ value, setValue }) {
    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction
                    aria-label="Back"
                    icon={<ArrowBackSharpIcon />}
                />
                <BottomNavigationAction
                    aria-label="Home"
                    icon={<HomeSharpIcon />}
                />
                <BottomNavigationAction
                    aria-label="Search"
                    icon={<SearchSharpIcon />}
                />
            </BottomNavigation>
        </Box>
    )
}
