import '../SelectedPub/SelectedPub.css'
import Image from '../../assets/images/zoriginal1.gif'

export default function SelectedPub(props){
    const isMobile = props.width < 800;

    return(
        <section className={`research ${ isMobile?'col-12':'col-8'}`} id="publication">
            <h2 className='research_title'> Selected Projects</h2>
            

            {/* Research Item 1*/}
            <div className="research_item--wrapper">
            <div className={`${isMobile?'col-12':'col-4'}`}>
                <a href="/">
                    <h5 className="research_title">
                        Wasserstein GAN with gradient penalty for 3d point cloud generation
                    </h5>
                </a>
                <p className="research_body">
                PyTorch implementation inspired by <a href="https://arxiv.org/abs/1707.02392" target="_blank" rel="noopener noreferrer">Learning Representations and Generative Models for 3D Point Clouds</a> that aims to analyze and improve the plain Wasserstein GAN.
                </p>

                <p className="research_body">
                    <a href="https://github.com/jorgechang/3DWGAN" target="_blank" rel="noopener noreferrer">project page</a>
                </p>

                <div className="research_collab">
                    <a className="research_colleague" href="/">Alexander Mai,</a>
                    <a className="research_colleague" href="/">Peter Hedman,</a>
                    <a className="research_colleague" href="/">George Kopanas,</a>
                    <a className="research_colleague" href="/">Dor Verbin,</a>
                    <a className="research_colleague" href="/"> David Futschik,</a>
                    <a className="research_colleague" href="/">Qiangeng Xu,</a>
                    <a className="research_colleague" href="/">Falko Kuester,</a>
                    <a className="research_colleague" href="/">Jonathan T. Barron,</a>
                    <a className="research_colleague" href="/">Yinda Zhang</a>
                </div>
            </div>
            <div className={`research_image--container ${isMobile?'col-12':'col-3'}`}>
                <img className="research_image" src={Image} alt="#"/>
            </div>
        </div>


        {/* Research Item 1*/}
        <div className="research_item--wrapper">
            <div className={`${isMobile?'col-12':'col-4'}`}>
                <a href="/">
                    <h5 className="research_title">
                        EVER: Exact Volumetric Ellipsoid Rendering for Real-time View Synthesis
                    </h5>
                </a>
                <p className="research_body">Raytracing constant-density ellipsoids yields more accurate and flexible radiance fields than splatting Gaussians, and still runs in real-time</p>
                <p className="research_body">
                    arXiv, 2024
                    <br/>
                    project page / arXiv
                </p>
                <div className="research_collab">
                    <a className="research_colleague" href="/">Alexander Mai,</a>
                    <a className="research_colleague" href="/">Peter Hedman,</a>
                    <a className="research_colleague" href="/">George Kopanas,</a>
                    <a className="research_colleague" href="/">Dor Verbin,</a>
                    <a className="research_colleague" href="/"> David Futschik,</a>
                    <a className="research_colleague" href="/">Qiangeng Xu,</a>
                    <a className="research_colleague" href="/">Falko Kuester,</a>
                    <a className="research_colleague" href="/">Jonathan T. Barron,</a>
                    <a className="research_colleague" href="/">Yinda Zhang</a>
                </div>
            </div>
            <div className={`research_image--container ${isMobile?'col-12':'col-3'}`}>
                <img className="research_image" src={Image} alt="#"/>
            </div>
        </div>
        
        </section>
    )
}
