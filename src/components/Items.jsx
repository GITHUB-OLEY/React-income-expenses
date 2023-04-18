import React from 'react'
import './Transaction.css'
import PropTypes from 'prop-types'; // ES6
import './Item.css'



function Items(props) {
    const {title, amount} = props
    const status = amount<0 ? "expense" : "income"
    const symbol = amount<0 ? "-" : "+"
    const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

  return (
    <div>

      <li className={status}>{title} <span>{symbol}{formatNumber(Math.abs(amount))}</span></li> 
          
    </div>
  )
}

Items.PropTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Items
