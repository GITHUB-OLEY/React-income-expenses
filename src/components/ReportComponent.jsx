import React, { useContext } from 'react'
import DataContext from '../data/DataContext'
import './ReportComponent.css'

function ReportComponent() {
    const {income, expense} = useContext(DataContext)
    const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  return (
    <div>
      <h4>ຍອດຄົງເຫຼືອ</h4>
      <h2>{formatNumber((income-expense).toFixed(2))}</h2>
      <div className='report-container'>
        <div>
            <h4>ລາຍໄດ້ທັງໝົດ</h4>
            <p className='report plus'>{formatNumber(income)}</p>
        </div>
        <div>
            <h4>ລາຍຈ່າຍທັງໝົດ</h4>
            <p className='report minus'>{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  )
}

export default ReportComponent
