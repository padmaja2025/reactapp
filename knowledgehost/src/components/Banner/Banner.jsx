import knowledgehostlogo from '../../assets/knowledgehostlogo.png'; 
import {logo as logoclass} from'./Banner.module.css';

const subtitleStyle={
    fontStyle: 'italic',
    color:'coral',
    fontSize:"x-large"
}

//function banner component
const Banner = ({headerText}) => {
   return (
    <header className="row mb-4">
        <div className = "col-5">
            <img src={knowledgehostlogo} className={logoclass} alt="knowledgehost logo" />
        </div>
        <div className='col-7 mt-4' style={subtitleStyle}>
            <p> Knowledgehost Host</p>
            <p> {headerText}</p>
        </div>
    </header>
   )
}

// export is important to be import and used and reused by other components
export default Banner;