import React from 'react'

export default function Header(){

    // JSX element, header
    const welcome = 'Welcome to 30 Days Of React'
    const title = 'Getting Started React'
    const subtitle = 'JavaScript Library'
    const author = {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    }
    const date = 'Oct 2, 2020'
    
    // JSX element, header
    return (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
    )
}


