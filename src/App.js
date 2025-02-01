import React from 'react'
import Home from './system/Home/Home'
import Search from './system/Search'
import SimpleBottomNavigation from './system/Taskbar'

const App = () => {
    const [value, setValue] = React.useState(1)

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Home view={value === 1} />
                <Search view={value === 2} />
            </div>
            <SimpleBottomNavigation value={value} setValue={setValue} />
        </>
    )
}

export default App
