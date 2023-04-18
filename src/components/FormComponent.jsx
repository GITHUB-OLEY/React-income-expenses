import React, { useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';



function FormComponent(props) {
    const inputTitle = (event) => {
        setTitle(event.target.value);
    }

    const inputAmount = (event) => {
        setAmount(event.target.value);
    }

    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    const [title, setTitle] = useState ("")
    const [amount, setAmount] = useState (0)
    const [formvalid, setFormValid] = useState (false)

    useEffect(()=> {
      const checkData = title.trim().length>0 && amount!==0
      setFormValid(checkData)

    }, [title, amount]) 

  return (
    <div>
      <form className='form-con' onSubmit={saveItem}>
        <div className="form-control">
            <label>ຊື່ລາຍການ</label>
            <input type="text" placeholder='ປ້ອນລາຍການຂອງທ່ານ' onChange={inputTitle} value={title} />
        </div>
        <div className="form-control">
            <label>ຈຳນວນເງິນ</label>
            <input type="text" placeholder='(+ ລາຍຮັບ , - ລາຍຈ່າຍ)' onChange={inputAmount} value={amount} />
        </div>
        <div>
            <button type='submit' className='btn' disabled={!formvalid}>ເພື່ມຂໍ້ມູນ</button> 
        </div>
      </form>
    </div>
  )
}

export default FormComponent
