import React from 'react'

const HomeGridItem = ({ buttonTileTile, buttonTileIcon }) => {
    console.log('HomeGridItem', buttonTileTile, buttonTileIcon)
    const style = {
        buttonTile: {
            minHeight: '50px',
            minWidth: '50px',
            height: '50px',
            width: '50px',
            textAlign: 'left',
            margin: '5px',
            color: 'black',
            padding: '5px',
            border: '1px solid black',
        },

        buttonTileIcon: {
            textAlign: 'left',
            margin: '5px',
            color: '#F43596',
            padding: '5px',
        },
        buttonTileTitle: {
            textAlign: 'left',
            margin: '5px',
            color: '#F43596',
            padding: '5px',
        },
    }
    return (
        <div
            className="button-tile"
            style={style.buttonTile}
            role="button"
            onClick={() => {}}
        >
            <div className="button-tile-icon" style={style.buttonTileIcon}>
                {buttonTileIcon}
            </div>
            <div className="button-tile-title" style={style.buttonTileTitle}>
                {buttonTileTile}
            </div>
        </div>
    )
}

export default HomeGridItem
