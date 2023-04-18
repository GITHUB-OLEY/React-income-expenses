import Items from './Items'
import './Transaction.css'

function Transaction(props) {

  const {items} = props

  return (
    <div>

      <ul className='item-list'>
        {items.map((e) => {
            return <Items title={e.title} amount={e.amount} key={e.id} />
        })}
      </ul>

    </div>
  )
}

export default Transaction


