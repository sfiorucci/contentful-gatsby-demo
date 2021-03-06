import * as React from 'react'

const Footer = () => (
  <footer className='footer'>
    <div className='content has-text-centered'>
      © {new Date().getFullYear()} Made with 💖 by{' '}
      <a arial-label='Commerce Layer' href='https://commercelayer.io'>
        Commerce Layer
      </a>
    </div>
  </footer>
)

export default Footer
