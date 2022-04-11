
import React, {useState} from 'react'
import styles from '../../../../styles/donatePage/body/building/building.module.scss'
import { buildingData } from '../../../../_data/buildingData'

function Building(){
    const [isClicked, setIsClicked] = useState(false)
    const [type, setType] = useState('')
    const handleClick = ( type: any) => {
        setType(type)
        setIsClicked(!isClicked)
    }
    console.log(isClicked, 'see them')
    const data = buildingData
    console.log(data, 'in the donate page')
    return(
        <div className={`container  ${styles.containerBuild} `}>
            {data.map((data, i) => {
                return(
                    <>
             <div className={`row  pt-5 px-5 ${styles.wrapperBuild} `}>
               <div className={`col-md-6 pt-3  flex flex-col  col-sm-12 ${styles.buildLeftContainer} `}>
                   <h5 className={`my-2 py-2  ${styles.leftTitle}`}>{data.Title}</h5>
                   <p className={`my-2 text-justify ${styles.leftText} `}>{data.Text}</p>
                </div>
               <div className={`col-md-6 my-2 col-sm-12 ${styles.buildRightContainer} `}>
                   <div className={`${styles.buildRightWrapper}`}>
                  <p className={`${styles.bibleProjectText}`}>{data.GiveBible}</p>
                  <div className={`howOften ${styles.howOften}`}>
                  {/* <p className={`${styles.oftenText}`}>Select A Campaign To Donate To</p> */}
                  <select name="pets" className={`bg-green-600 mb-5 ${styles.howOftenSelect}`} id="pet-select">
                  <option value="">--Please choose an option--</option>
                  {data.campaignSelect.map((data, i) =>{
                      return(
                          <>
                              <option value={data.value}>{data.value}</option>
                          </>
                      )
                  })}
                    </select>
                
                  <div className={`OftenBtns flex flex-row justify-between ${styles.oftenBtns} `}>
                  <div className={`text-center ${styles.oftenBtn} ${styles.oftenBtn1} `} onClick={(type) =>handleClick('oneTime')} style={{backgroundColor: type != "" && !isClicked && '#55baba'  }} >One-Time</div>
                  <div  className={`text-center  ${styles.oftenBtn} ${styles.oftenBtn2}`} onClick={(type) =>handleClick('month')} style={{backgroundColor: type != "" && isClicked && '#55baba'  }} >Monthly</div>
                  </div>
                  </div>
                  <div className={`howMuch ${styles.howMuch} `}>
                      <p className={`${styles.howMuchText}`}>Give How Much?</p>
                      <div className="howMuchBtns mb-3 flex flex-row justify-between ">
                          {data.howMuch.map((data, i) => {
                              return(
                                  <>
                                     <div className={`text-center  ${styles.howMuchBtn}`}>{data.cash}</div>
                                  </>
                              )
                          })}
               
                  </div>
                  <div className={`input-group input-group-lg ${styles.InputContainer}`}>
                      <input type="text" className={`form-control text-center ${styles.inputText}`} placeholder="Other Amount" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                  </div>
                    </div>
                    </div>
                    <div className="d-grid mb-1 gap-2">
                         <button className={`btn btn-lg ${styles.giveNowBtn}`} type="button">Give Now</button> 
                    </div>
                </div>
            </div>
                    </> 
                )
            })}
        </div>
    )
}

export default Building