import '../Research/Research.css'
import Image from '../../assets/images/image.jpg'

export default function Research(props){
    const isMobile = props.width < 800;

    return(
        <section className={`research ${ isMobile?'col-12':'col-8'}`} id="research">
            <h2 className='research_title'> Research Interest</h2>
            <p className='research_text'>  I'm interested in computer vision, neuroscience, deep learning, and generative AI.</p>
        </section>
    )
}
