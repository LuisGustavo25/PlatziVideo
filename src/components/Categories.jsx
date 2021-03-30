import React from 'react';

import '../assets/styles/components/Categories.scss';



const Categories = ({children,tittle}) =>{
    return(
        <div className="categories">
            <h3 className="categories__tittle">{tittle}</h3>
            {children}
        </div>
    );
}

export default Categories