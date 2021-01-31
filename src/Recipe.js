import React from 'react';

function Recipe({title,calories,image}){
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>Calory = {calories} unit</p>
        </div>
    );
};

export default Recipe;