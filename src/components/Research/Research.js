import '../Research/Research.css'
import Image from '../../assets/images/image.jpg'

export default function Research(props){
    const isMobile = props.width < 800;

    return(
        <section className={`research ${ isMobile?'col-12':'col-8'}`} id="research">
            <h2 className='research_title'> Research Interest</h2>
            <p className='research_text'>  I'm interested in computer vision, deep learning, generative AI, and image processing. Most of my research is about inferring the physical world (shape, motion, color, light, etc) from images, usually with radiance fields. Some papers are highlighted.</p>
            

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