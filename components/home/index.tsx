import React from 'react'
import Body from '../body'
import Header from '../header'
import Footer from '../footer'
import styles from '../../styles/home/home.module.css'

function HomePage() {
  return (
    <div className={styles.homepage}  >
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
