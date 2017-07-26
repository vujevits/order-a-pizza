import { connect } from 'react-redux';
import OrderForm from '../OrderForm';
import * as actions from '../actions'
import { calculatePizzaPrice, calculateTotal } from '../Helper';

const mapStateToProps = (state, ownProps) => {
  return {
    pizza: state.pizza,
    pizzasInCart: state.pizzasInCart,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (pizza) => {
      dispatch(actions.addToCart(pizza))
    },
    onSelect: (size) => {
      dispatch(actions.fetchPizzaInfo(size))
    }
  };
};

const OrderFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm);

export default OrderFormContainer;
