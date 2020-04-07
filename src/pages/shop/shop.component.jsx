import React from 'react';

import SHOP_DATA from './shop.data.jsx';
import PreviewCollection from '../../components/preview-collection/preview.collection.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            collections: SHOP_DATA
        };
    }
    
    render() {
        const {collections} = this.state;
        return(
            <div className='shop_page'>
                {
                    collections.map(({ id, ...otherCollectioProps}) => (
                        <PreviewCollection key={id}{...otherCollectioProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
