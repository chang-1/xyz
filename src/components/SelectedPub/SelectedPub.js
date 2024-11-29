import '../SelectedPub/SelectedPub.css'
import Image from '../../assets/images/zoriginal1.gif'
import Bobbly from '../../assets/images/bobbly.gif'
import CoolImage from '../../assets/images/image.jpg'
import PCART from '../../assets/images/pcart.png'

export default function SelectedPub(props){
    const isMobile = props.width < 800;

    return(
        <section className={`research ${ isMobile?'col-12':'col-8'}`} id="publication">
            <h2 className='research_title'> Research & Projects</h2>

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
                <img className="research_image" src={PCART} alt="#"/>
            </div>
        </div>
            

            {/* Research Item 1*/}
            <div className="research_item--wrapper">
            <div className={`${isMobile?'col-12':'col-4'}`}>
                <a href="https://github.com/jorgechang/3DWGAN" target="_blank" rel="noopener noreferrer">
                    <h5 className="research_title">
                        Wasserstein GAN with gradient penalty for 3d point cloud generation
                    </h5>
                </a>
                <p className="research_body">
                PyTorch implementation inspired by <a href="https://arxiv.org/abs/1707.02392" target="_blank" rel="noopener noreferrer">Learning Representations and Generative Models for 3D Point Clouds</a> that aims to analyze and improve the plain Wasserstein GAN.
                </p>


            </div>
            <div className={`research_image--container ${isMobile?'col-12':'col-3'}`}>
                <img className="research_image" src={Image} alt="#"/>
            </div>
        </div>


        {/* Research Item 1*/}
        <div className="research_item--wrapper">
            <div className={`${isMobile?'col-12':'col-4'}`}>
                <a href="https://github.com/jorgechang/SpikingNeuralNetworks" target="_blank" rel="noopener noreferrer">
                    <h5 className="research_title">
                        Conversion of artiﬁcial neural network layers to spiking neurons.
                    </h5>
                </a>
                <p className="research_body">Ablation studies and Conversion of ReLU, Batch Normalization, Max-Pooling, and Softmax layers in VGG16 to spiking architectures.</p>

            </div>
            <div className={`research_image--container ${isMobile?'col-12':'col-3'}`}>
                <img className="research_image" src={CoolImage} alt="#"/>
            </div>
        </div>

        {/* Research Item 1*/}
        <div className="research_item--wrapper">
            <div className={`${isMobile?'col-12':'col-4'}`}>
                <a href="https://github.com/jorgechang/Metaballs" target="_blank" rel="noopener noreferrer">
                    <h5 className="research_title">
                    ”Blobby objects” or isosurface implementation
                    </h5>
                </a>
                <p className="research_body">
                    C++ and OpenGL implementation of <a href="https://en.wikipedia.org/wiki/Metaballs" target="_blank" rel="noopener noreferrer">Metaballs</a> with GPU Ray Marching and multiple shaders.
                </p>

            </div>
            <div className={`research_image--container ${isMobile?'col-12':'col-3'}`}>
                <img className="research_image" src={Bobbly} alt="#"/>
            </div>
        </div>
        
        </section>
    )
}
