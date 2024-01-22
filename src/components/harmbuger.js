import { useContext } from "react"
import "../style.css"
import { AppContext } from "../App"


const Harmbuger = (props) => {
    const {toggle, toggleClick} = useContext(AppContext)
    
  return (
    <div className=' fixed right-0 top-2 z-20  md:hidden'>
        {/* <Heading handleHarmbugerclick={props.handleHarmbugerclick} toggle ={props.toggle}/> */}
        <button onClick={toggleClick} className="button-three mt-[-2px] md:hidden" aria-controls="primary-navigation" aria-expanded={toggle}>
    <svg stroke="var(--button-color)" fill="none" className="hamburger" viewBox="-10 -10 120 120" width="45">
      <path className="line" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
      </path>
    </svg>
  </button>
    </div> 
  )
}

export default Harmbuger
