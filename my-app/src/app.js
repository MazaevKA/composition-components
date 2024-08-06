import PropTypes from "prop-types";
import {useState} from "react";

const Product = ({name, price, amount}) => {
  // const [amount, setAmount] useState(1); переехало к родительскому компоненту
  return (
    <>
      <div>
        {name} - {price} руб
      </div>
      <div>Количество: {amount}</div>
      <Basket amount={amount} />
    </>
  )

}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};
