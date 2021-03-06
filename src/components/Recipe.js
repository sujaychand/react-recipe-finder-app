/*
 * The recipe page  
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import Loader from './Preloader';

const API_KEY = "a53faf17f3fd5cd0dd3a472f5730d839";
// This URL is different from the one in App.js, this url returns the ingredient information
const API_URL = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/get?key=${API_KEY}&rId=`;

class Recipe extends Component {

/*
 * Class constructor 
 */    
    constructor(props) {
        super(props);

        this.state = {
            recipe: undefined,
            recipeId: props.match.params.id
        }
    }

    /*
     * Sets the page recipe on load 
     */
    componentDidMount = async () => {
        const api_call = await fetch(API_URL + this.state.recipeId);
        const searchResponse = await api_call.json();

        this.setState({ recipe: searchResponse.recipe });
        console.log(this.state.recipe);
    }

    /*
     * Renders the canvas and draws the recipe information
     */
    render() {
        const recipe = this.state.recipe;

        return (
            <div className="container">
                {this.state.recipe ?
                   <div className="active-recipe">
                   <br/> <br/>
                        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                        <h3 className="active-recipe__title"> {recipe.title} </h3>
                        <h4 className="active-active-recipe__publisher">
                            Publisher: <span><a href={recipe.publisher_url} target="_blank">{recipe.publisher}</a></span>
                        </h4>
                        <p className="active-recipe__website">Recipe:
                    <span><a href={recipe.source_url
                            } target="_blank"> {
                                // Concatenates recipe URL
                                recipe.source_url < 30 ? recipe.source_url :
                                `${recipe.source_url.substring(0, 34)}....`
                                }</a></span>
                        </p>
                        <Ingredients ingredients={recipe.ingredients} />
                        <button className="active-recipe__button">
                            <Link to="/"> GO BACK </Link>
                        </button>
                    </div> :
                    <div> <Loader /> </div>  
                }
                    <br /> <br />
            </div>
        );
    }
}

export default Recipe;