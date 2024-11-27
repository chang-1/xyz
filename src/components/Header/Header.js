import './Header.css'
import image from '../../assets/images/image.jpg'

export default function Header(props){

    const isMobile = props.width < 800;

    return(
        <header className=''>
            <div className="header--wrapper row">
        <div className={`header_text--container ${isMobile?'col-12':'col-7'}`}>
            <h1 className="header_name">Isaac Chang</h1>
            <p className="header_job_description">Research Scientist</p>
            <p className="header_body">
                Google DeepMind in San Francisco Leading a small team that mostly works on NeRF.
                At Google I've worked on Glass, Lens Blur, HDR+, VR, Portrait Mode, Portrait Light, and Maps.
                I did my PhD at UC Berkeley, where I was advised by Jitendra Malik. I've received the PAMI Young Researcher Award.
            </p>
            <nav>
                <ul>
                    <li> <a href="/">Email</a> </li>
                    <li> <a href="/">CV</a> </li>
                    <li> <a href="/">Bio</a> </li>
                    <li> <a href="/">Scholar</a> </li>
                    <li> <a href="/">Twitter</a> </li>
                    <li> <a href="/">Github</a> </li>
                </ul>
            </nav>
        </div>
        <div className={`header_image--wrapper ${isMobile?'col-12':'col-3'}`}>
            <div className="header_image--container">
                <img className="header_image" src={image} alt="Jon Barron" />
            </div>
        </div>
    </div>
        </header>
    )
}