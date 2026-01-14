import Logo1 from '../assets/Logo/Logo1.png'
import Logo2 from '../assets/Logo/Logo2.png'
import Logo3 from '../assets/Logo/Logo3.png'

import image from '../assets/Hero/Hero1.png'
import image1 from '../assets/Hero/Hero2.png'
import image2 from '../assets/Hero/Hero3.png'

function Hero(){
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={Logo2} />
            <source media="(min-width: 800px)" srcSet={Logo3} />
            <img src={Logo1} alt="Ourblooms Logo" />
        </picture>

        <picture>
            <source media="(min-width: 1200px)" srcSet={image1} />
            <source media="(min-width: 800px)" srcSet={image2} />
            <img src={image} alt="Ourblooms Logo" />
        </picture>




        </>
    )
}
export default Hero;