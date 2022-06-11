import React from 'react'
import styles from './counter.module.scss'

const CountersOne = () => {
  return (
    <div className={`counters-one about-page-counter ${styles.countersone} ${styles.aboutpagecounter}`}>
       <div className="container">
              <ul className={`counters-one__box list-unstyled ${styles.countersonebox} ${styles.listunstyled}`}>
                <li className={`counter-one__single ${styles.counteronesingle}`}>
                  <h3 className="odometer" data-count="870">
                    00
                  </h3>
                  <span className={`counter-one__letter ${styles.counteroneletter}`}>K</span>
                  <p className={`counter-one__text ${styles.counteronetext}`}>Total Donations</p>
                </li>
                <li className={`counter-one__single ${styles.counteronesingle}`}>
                  <h3 className="odometer" data-count="480">
                    00
                  </h3>
                  <span className={`counter-one__letter ${styles.counteroneletter}`}>K</span>
                  <p className={`counter-one__text ${styles.counteronetext}`}>Campaigns Closed</p>
                </li>
                <li className={`counter-one__single ${styles.counteronesingle}`}>
                  <h3 className="odometer" data-count="977">
                    00
                  </h3>
                  <span className={`counter-one__letter ${styles.counteroneletter}`}>K</span>
                  <p className={`counter-one__text ${styles.counteronetext}`}>Happy People</p>
                </li>
                <li className={`counter-one__single ${styles.counteronesingle}`}>
                  <h3 className="odometer" data-count="63">
                    00
                  </h3>
                  <span className={`counter-one__letter ${styles.counteroneletter}`}>+</span>
                  <p className={`counter-one__text ${styles.counteronetext}`}>Our Volunteers</p>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default CountersOne
