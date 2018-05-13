import React  from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = (props) => {
  return(
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
      <FilteredFruitList
        filter={props.currentFilter} fruit={props.fruit} />
    </div>


  )
}

FruitBasket.defaultProps = {
  fruit: PropTypes.array,
  filters: PropTypes.array,
  currentFilter: PropTypes.string,
  updateFilterCallback: PropTypes.func

}

export default FruitBasket;
