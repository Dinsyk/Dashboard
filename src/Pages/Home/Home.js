import React from 'react'
import './Home.css'

import Diagram from '../../Components/Diagram/Diagram'
import Table from '../../Components/Table/Table'

function Home() {
  return (
    <>
    <div className='container home-container mt-5'>
        <div className='row'>
            <div className='col-lg-6 mt-5 '>
            <Table/>

            </div>
            <div className='col-lg-6 mt-5'>
            <Diagram/>
            </div>

        </div>
       
   


    </div>
      
    </>
  )
}

export default Home
