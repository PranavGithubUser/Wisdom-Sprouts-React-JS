import React from 'react'
import './Greeting.css'

const Greeting = ({name1}) => {
  return (
    <div className='divGreet'>
      Hello {name1.n1}  {name1.n2}
      <br></br>
      Welcome to React World.... 
    </div>
  )
}

export default Greeting