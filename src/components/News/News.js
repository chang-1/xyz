import '../News/News.css'

export default function News(props){
    return(
        <section className="news_wrapper" id="news">
            <h2 className='news_heading'>Education</h2>
            <p className='research_text'>
                I earned my <strong>MS in Computer Science</strong> from <a href="https://www.brown.edu/" target="_blank" rel="noopener noreferrer">Brown University</a>, focusing on visual computing and machine learning, and a <strong>BS in Computer Engineering</strong> from <a href="https://www.itam.mx/" target="_blank" rel="noopener noreferrer">Instituto Tecnológico Autónomo de México</a>. 
                <br /><br />
                I discovered my passion for computer vision under the mentorship of 
                <a href="https://scholar.google.com/citations?user=Me-kqtIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Dr. Edgar Román-Rangel</a>, with whom I collaborated to reconstruct artistic images from highly compressed representations.
            </p>
        </section>
    )
}


