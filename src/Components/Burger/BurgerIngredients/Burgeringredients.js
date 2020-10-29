import React from 'react';
import classes from './Burgeringredients.css'
import PropTypes from 'prop-types';

const Burgeringredients = (props) => {
    let ingrediets = null;
    switch (props.type) {
        case ('bread-bottom'):
            ingrediets = <div className={classes.BreadBottom}></div>;
            break;
       
        case ('bread-top'):
            ingrediets = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
            break;

        case ('meat'):
            ingrediets = <div className={classes.Meat}></div>;
            break;


        case ('cheese'):
            ingrediets = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingrediets = <div className={classes.Salad}></div>;
            break;

        case ('bacon'):
            ingrediets = <div className={classes.Bacon}></div>;
            break;

        default:
            ingrediets = null;
    }

  return ingrediets;
}

Burgeringredients.propTypes ={

    type: PropTypes.string.isRequired
}

export default Burgeringredients;