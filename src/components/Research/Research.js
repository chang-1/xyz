import '../Research/Research.css'
import Image from '../../assets/images/pcart.png'

export default function Research(props){
    const isMobile = props.width < 800;

    return(
        <section className={`research ${ isMobile?'col-12':'col-8'}`} id="research">
            <h2 className='research_title'> Research Interest</h2>
            <p className='research_text'>  I am interested in reverse engineering visual intelligence to create hypotheses at the intersection of computer vision and neuroscience, ultimately empowering individuals of all abilities.</p>


            {/* Research Item 1*/}
        <div className="research_item--wrapper">
            <div className={`${isMobile?'col-12':'col-4'}`}>
                <a href="https://github.com/jorgechang/Artistic-Image-Recovering-from-Principal-Components/blob/main/Artistic_Image_Recovering_from_Principal_Components.pdf" target="_blank" rel="noopener noreferrer">
                    <h5 className="research_title">
                    Artistic Image Recovering from Principal Components
                    </h5>
                </a>
                <p className="research_body">Evaluated the capacity of convolutional neural networks to reconstruct artistic images from highly compressed latent representations (1% of the original feature
                    space) and presented results at the <a href="http://lacsc2020.itam.mx/index.php/lacsc-2020/" target="_blank" rel="noopener noreferrer">V Latin American Conference on Statistical Computing</a> .</p>

            </div>
            <div className={`research_image--container ${isMobile?'col-12':'col-3'}`}>
                <img className="research_image" src={Image} alt="#"/>
            </div>
        </div>

        
        </section>
        



    )
}
