import React from 'react'
import HexaColor from './HexaColor'

export default function Main(){

    // JSX element, header

const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
  }
  
  
  
  const numOne = 3
  const numTwo = 2
  
  const result = (
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  )
  
  const yearBorn = 1820
  const currentYear = new Date().getFullYear()
  const age = currentYear - yearBorn
  const personAge = (
    <p>
      {' '}
      {author.firstName} {author.lastName} is {age} years old
    </p>
  )
  
  // JSX element, main
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li>{tech}</li>)
  
  
  
  // JSX element, main
  return  (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <div>
        <HexaColor/>
      </div>
    </main>
  )
  

}