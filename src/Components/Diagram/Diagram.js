import React from 'react'
import { ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip } from 'recharts'
const Array=[
  {
    month:'SEP',
    balance:0
  },
  {
    month:'OCT',
    balance:10000
  },
  {
    month:'NOV',
    balance:9000
  },
  {
    month:'DEC',
    balance:11000,
  },
  {
    month:'JAN',
    balance:12000,
  },
  {
    month:'FEB',
    balance:13000,
  },
  {
    month:'MAR',
    balance:15000,
  },
  {
    month:'APR',
    balance:25000,
  },

]

function Diagram() {
  return (
    <>
    <div className='container diagram-container'>
        <h4 className='heading-two'>Account Balance</h4>
        <hr/>
        <ResponsiveContainer width='80%' aspect={1}>
            <BarChart data={Array} width={50} height={200}>
              <XAxis dataKey='month'/>
              <YAxis dataKey='balance'/>
              <Tooltip/>
              <Bar dataKey='balance' fill='green'/>
            </BarChart>
          </ResponsiveContainer>

    </div>
      
    </>
  )
}

export default Diagram
