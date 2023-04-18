import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent'
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Nopage from './components/Nopage'


function App() {

  const initData = [
    {id:1,title:"khar kin", amount:1000},
    {id:2,title:"khar lod", amount:-2000}
  ]

  const [items, setItems] = useState(initData)

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem)=> {
      return [newItem, ...prevItem]
    })
  }

  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(e=>e>0).reduce((total, e)=>total+=e,0)
    const expense = (amounts.filter(e=>e<0).reduce((total, e)=>total+=e,0))*-1
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items, reportIncome, reportExpense])

  // //reducer state
  // const [showReport, setShowReport] = useState(false)

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)
  //   }
  // }

  // const [result, dispatch] = useReducer(reducer, showReport)

  const activeClassName = "nav-active"

  return (

      <BrowserRouter>
           <DataContext.Provider value={
                {
                  income : reportIncome,
                  expense : reportExpense
                }
            }> 
                  <div className='container'>
                    <h1>ໂປຣແກຣມຈັດການລາຍຮັບ-ລາຍຈ່າຍ</h1>
                  </div>

                  <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : undefined }>ReportComponent</NavLink>
                    <NavLink to="/formcomponent" className={({ isActive }) => isActive ? activeClassName : undefined }>FormComponent</NavLink>
                    <NavLink to="/transaction" className={({ isActive }) => isActive ? activeClassName : undefined }>Transaction</NavLink>
                  </nav>
                  <Routes>
                    <Route path='/' element={<ReportComponent />} />
                    <Route path='/formcomponent' element={<FormComponent onAddItem={onAddNewItem}/>} />
                    <Route path='/transaction' element={<Transaction items = {items} />} />
                    <Route path='*' element={<Nopage />} />
                  </Routes>

                    {/* <ReportComponent /> */}
                    {/* <FormComponent onAddItem={onAddNewItem} />
                    <Transaction items = {items} /> */}

          </DataContext.Provider>
      </BrowserRouter>

    )
}

export default App
