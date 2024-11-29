import '../Research/Research.css'
import Image from '../../assets/images/pcart.png'

export default function Research(props){
    const isMobile = props.width < 800;

    return(
        <section className={`research ${ isMobile?'col-12':'col-8'}`} id="research">
            <h2 className='research_title'> Research Interest</h2>
            <p className='research_text'>  I am interested in reverse engineering visual intelligence to create hypotheses at the intersection of computer vision and neuroscience, ultimately empowering individuals of all abilities.</p>


        
        </section>
        



    )
}
