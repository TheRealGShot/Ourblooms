import styles from '../styles/Services.module.css';

import sm1a from '../assets/servicesModule1/Image-1.png';
import sm1b from '../assets/servicesModule1/Image-2.png';
import sm1c from '../assets/servicesModule1/Image-3.png';

import sm2a from '../assets/servicesModule2/Image-1.png';
import sm2b from '../assets/servicesModule2/Image-2.png';
import sm2c from '../assets/servicesModule2/Image-3.png';

import sm3a from '../assets/servicesModule3/Image-1.png';
import sm3b from '../assets/servicesModule3/Image-2.png';
import sm3c from '../assets/servicesModule3/Image-3.png';

function Services() {
    return (
        <>
            <section>
                <div className={styles.servicesContent}>
                    <div className={styles.section_header}>
                        <h2>Services</h2>
                    </div>
                    <div className={styles.mod1}>
                        <hr />
                        <div className={styles.serviceModule}>
                            <div>
                                <p className="heading1">FLORAL INSTALLATIONS</p>
                                <p className="paragraph1">
                                    We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.
                                </p>
                            </div>
                            <picture>
                                <source media="(min-width: 1200px)" srcSet={sm1a} />
                                <source media="(min-width: 800px)" srcSet={sm1b} />
                                <img src={sm1c} alt="Person creating a floral installation" />
                            </picture>
                        </div>
                        <hr />
                    </div>
                    <div className={styles.mod2}>
                        <div className={styles.serviceModule}>
                            <div>
                                <p className="heading1">NATIVE PLANT ARRANGEMENTS</p>
                                <p className="paragraph1">
                                    Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.
                                </p>
                            </div>
                            <picture>
                                <source media="(min-width: 1200px)" srcSet={sm2a} />
                                <source media="(min-width: 800px)" srcSet={sm2b} />
                                <img src={sm2c} alt="Native plant arrangement being prepared" />
                            </picture>
                        </div>
                        <hr />
                    </div>
                    <div className={styles.mod3}>
                        <div className={styles.serviceModule}>
                            <div>
                                <p className="heading1">CUSTOM FLORAL CONCEPTS</p>
                                <p className="paragraph1">
                                    Collaborate with our designers to create unique floral concepts tailored to your vision and needs.
                                </p>
                            </div>
                            <picture>
                                <source media="(min-width: 1200px)" srcSet={sm3a} />
                                <source media="(min-width: 800px)" srcSet={sm3b} />
                                <img src={sm3c} alt="Custom floral concept design in progress" />
                            </picture>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;