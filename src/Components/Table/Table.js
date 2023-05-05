import React from 'react'
import './Table.css'


const transactions = [
    {id: 1, account: 'Sales', debit: 25000, credit: 0, month: 'Aug'},
    {id: 2, account: 'Sales', debit: 65000, credit: 0, month: 'Sep'},
    {id: 3, account: 'Sales', debit: 52000, credit: 0, month: 'Aug'},
    {id: 4, account: 'Bank', debit: 0, credit: 25000, month: 'Aug'},
    {id: 5, account: 'Purchase', debit: 0, credit: 6500, month: 'Sep'},
    {id: 6, account: 'Purchase', debit: 5000, credit: 25000, month: 'Dec'},
    {id: 7, account: 'Asset', debit: 1000, credit: 0, month: 'Dec'},
    {id: 8, account: 'Purchase', debit: 0, credit: 1200, month: 'Nov'}
]

function AccountTransactionsTable() {
    const filteredTransactions=transactions.filter(transaction=>transaction.account==="Sales");
    const totalCredit=filteredTransactions.reduce((accumulator,transaction)=>accumulator+transaction.credit,0)
    const totalDebit=filteredTransactions.reduce((accumulator,transaction)=>accumulator+transaction.debit,0)

    const filteredTransactionsP=transactions.filter(transactions=>transactions.account==="Purchase");
    const totalCreditP=filteredTransactionsP.reduce((accumulator,transactions)=>accumulator+transactions.credit,0)
    const totalDebitP=filteredTransactionsP.reduce((accumulator,transactions)=>accumulator+transactions.debit,0)


    const filteredTransactionsA=transactions.filter(transactions=>transactions.account==="Asset");
    const totalCreditA=filteredTransactionsA.reduce((accumulator,transactions)=>accumulator+transactions.credit,0)
    const totalDebitA=filteredTransactionsA.reduce((accumulator,transactions)=>accumulator+transactions.debit,0)
    return (
    <table class="table">
  <thead>
    <tr>
    
      <th scope="col"><input type="checkBox" checked  className='mycheck' />Account</th>
      <th scope="col">Debit</th>
      <th scope="col">Credit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td><input type="checkBox" checked  />{filteredTransactions[0].account}</td>
      <td>{totalDebit}</td>
      <td>{totalCredit}</td>
    </tr>
    <tr>
      <td><input type="checkBox" checked />{filteredTransactionsP[0].account}</td>
      <td>{totalDebitP}</td>
      <td>{totalCreditP}</td>
    </tr>
    <tr>
      <td><input type="checkBox" checked  />{filteredTransactionsA[0].account}</td>
      <td>{totalDebitA}</td>
      
      <td>{totalCreditA}</td>
    </tr>
  </tbody>
</table>
    );
}

function Table() {
  return (
    <>
    <h4 className='left-head ms-5'>Accounts Dashboard</h4>
    <div className='container table-container mt-4'>
    
    <AccountTransactionsTable className='mt-6'  />
    </div>
   

  
      
    </>
  )
}

export default Table
