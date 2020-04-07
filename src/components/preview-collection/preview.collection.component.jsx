import React from 'react';

import CollectionItem from '../collection-item/collection.item.component.jsx';

import './preview.collection.style.scss';

const PreviewCollection = ({title, items, id}) => (
    <div className="collection_preview">
        <h1 className="tittle">{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx)=> idx < 4)
                .map(({id, ...itemProps}) => (<CollectionItem key={id}{...itemProps} />))
            }
        </div>
    </div>
);
        
export default PreviewCollection;