import styles from '../styles/About.module.css'
import Footer from '../components/Footer.jsx'

import lady1 from '../assets/lady/Image.png'
import lady2 from '../assets/lady/Image-1.png'
import lady3 from '../assets/lady/Image-2.png'

import three1 from '../assets/AboutPage/three1.png'
import three2 from '../assets/AboutPage/three2.png'
import three3 from '../assets/AboutPage/three3.png'

import tulip1 from '../assets/AboutTulip/tulip1.png'
import tulip2 from '../assets/AboutTulip/tulip2.png'
import tulip3 from '../assets/AboutTulip/tulip3.png'
function About(){
    return(
        <>
            <div className={styles.head}>
            <p className="heading1">ABOUT</p>
            </div>

            <div className={styles.container}>
                <div className={styles.story}>
                    <p className="caption1">OUR STORY</p>
                </div>
                <div className={styles.rightColumnContainer}>
                    <div className={styles.AuthorInformation}>
                        <picture>
                            <source media="(min-width:1200px)" srcSet={lady1}/>
                            <source media="(min-width:800px)" srcSet={lady2}/>
                            <img src={lady3} alt="Author" className={styles.authorImage}/>
                        </picture>
                        <div className={styles.authorDetails}>
                            <p className="caption2">LILY SMITH</p>
                            <p className="heading4">Owner</p>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p className="heading2">Our Blooms was founded in honor of Lily Smiths loving aunts, Teresa and Beth.</p>
                    </div>
                    <picture>
                        <source media="(min-width:1200px)" srcSet={three1}/>
                        <source media="(min-width:800px)" srcSet={three2}/>
                        <img src={three3} alt="threeimgs" className={styles.threeimgs}/>
                    </picture>
                    <div className={styles.text}>
                        <p className="paragraph2">
                        Lilys journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.
                        <br/>
                        <br/>
                        Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.
                        </p>
                    </div>
                    <picture>
                        <source media="(min-width:1200px)" srcSet={tulip1}/>
                        <source media="(min-width:800px)" srcSet={tulip2}/>
                        <img src={tulip3} alt="threeimgs" className={styles.threeimgs}/>
                    </picture>
                    <div className={styles.text}>
                        <p className="paragraph2">
                        From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.
                        <br/>
                        <br/>
                        Discover how we can add a touch of natural beauty to your next event.
                        </p>
                    </div>
                    <button className="button_danger">• BOOK A CONSULTATION</button>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}
export default About;