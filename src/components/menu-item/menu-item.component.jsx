import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({title, imageUrl,size }) => (
    <div className={`${size} menu_item`}>
        <div className='background_image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;