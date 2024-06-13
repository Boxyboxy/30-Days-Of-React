import React from 'react'

export default function Footer(){

    const copyRight = 'Copyright 2020'
    // JSX element, footer
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>{copyRight}</p>
        </div>
      </footer>
    )
}

