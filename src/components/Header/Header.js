import './Header.css'
import image from '../../assets/images/crop.gif'
import { SunIcon } from './Icons';
import { MoonIcon } from './Icons';


export default function Header(props){

    const isMobile = props.width < 800;
    const isDarkMode = props.isDarkMode;

    return(
       <header className={`header ${isDarkMode?'header-dark':'header-light'}`}>
          <div className='theme-toggle row'>
            <div className={`toggle-wrap ${isMobile? 'col-12': 'col-10'}`}>
          <button
              onClick={props.toggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              className="theme-toggle-button"
              style={{
                "--background-color": isDarkMode ? "#333" : "#ddd",
              }}
            >
              {/* Sun Icon */}
              <div className="theme-toggle-icon">
                <SunIcon color={isDarkMode ? "#555" : "black"} /></div>

              {/* Moon Icon */}
              <div className="theme-toggle-icon">
                <MoonIcon color={isDarkMode ? "white" : "#555"} /></div>

              {/* Slider */}
              <div
                className="theme-toggle-slider"
                style={{
                  left: isDarkMode ? "32px" : "3px",
                }}></div>
            </button>
            </div>
          </div>
          <div className="header--wrapper row">
            <div className={`header_text--container ${isMobile?'col-12':'col-7'}`}>
            <h1 className="header_name">Jorge Chang</h1>
            <p className="header_job_description">Research Associate</p>
            <p className="header_body">
                <p className="header_body">
                I am a Research Associate in the <a href="https://www.brown.edu/academics/neuroscience/" target="_blank" rel="noopener noreferrer">Department of Neuroscience</a> at <a href="https://www.brown.edu/" target="_blank" rel="noopener noreferrer">Brown University</a>, where I have the pleasure of working with <a href="https://vivo.brown.edu/display/mparadis" target="_blank" rel="noopener noreferrer">Dr. Michael Paradiso</a> to develop accessible technology 
                for legally blind individuals. My research is supported by the <strong>Veteran Affairs Medical Center</strong> and the <strong>Center for Neurorestoration and Neurotechnology (CfNN)</strong>.<br /><br />
            
                I also conduct research in the (awesome) <a href="https://serre-lab.clps.brown.edu/person/thomas-serre/" target="_blank" rel="noopener noreferrer">Dr. Thomas Serre</a> Lab at the intersection of computer vision and neuroscience, building hypotheses to understand the mechanisms that support visual perception.
            </p>

            </p>
            <nav>
                <ul>
                    <li> <a href="mailto:jorge_chang@alumni.brown.edu">Email</a> </li>
                    <li> <a href="https://github.com/jorgechang/">Github</a> </li>
                </ul>
            </nav>
        </div>
        <div className={`header_image--wrapper ${isMobile?'col-12':'col-3'}`}>
            <div className="header_image--container">
                <img className="header_image" src={image} alt="Jorge" />
            </div>
        </div>
    </div>
        </header>
    )
}
