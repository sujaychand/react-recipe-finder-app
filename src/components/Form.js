/*
 * Form components that controls the buttons and input text  
 */

import React from 'react';

const Form = props => (
  
    <div className = "form__Container">
        <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
            <input className="form__input" type="text" name="recipeName" placeholder="Ingredient(s)..."/>
            <button className="form__button-search" >Search</button>
        </form>
        <form onSubmit={props.getPopularityOrder} style={{ marginBottom: "2rem" }}>
            <button className= {props.isPopular === false ? "form__button" : "form__button-pressed"}> Popularity </button>
        </form>
        <form onSubmit={props.getAlphabeticalOrder} style={{ marginBottom: "2rem" }}>
            <button className= {props.isAlphabetical === false ? "form__button" : "form__button-pressed"}> Alphabetically</button>
        </form>
    </div>
);

export default Form;