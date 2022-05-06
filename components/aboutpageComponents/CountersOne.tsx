import React from 'react'

const CountersOne = () => {
  return (
    <div>
       <div className="container">
              <ul className="counters-one__box list-unstyled">
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="870">
                    00
                  </h3>
                  <span className="counter-one__letter">K</span>
                  <p className="counter-one__text">Total Donations</p>
                </li>
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="480">
                    00
                  </h3>
                  <p className="counter-one__text">Campaigns Closed</p>
                </li>
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="977">
                    00
                  </h3>
                  <span className="counter-one__letter">K</span>
                  <p className="counter-one__text">Happy People</p>
                </li>
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="63">
                    00
                  </h3>
                  <span className="counter-one__letter">+</span>
                  <p className="counter-one__text">Our Volunteers</p>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default CountersOne
