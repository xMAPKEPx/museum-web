import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay, DotGroup, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './carousel.module.css'

const Carousel = () => {
    
    return <div className={styles.carousel}>
        <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={15}
        totalSlides={3}
        infinite={true}
        isPlaying={true}
        interval={3000}>
            <ButtonBack>Back</ButtonBack>
            <Slider>
                <Slide index={0}><div className={styles.card}>I am the first Slide.</div></Slide>
                <Slide index={1}><div className={styles.card}>I am the second Slide.</div></Slide>
                <Slide index={2}><div className={styles.card}>I am the third Slide.</div></Slide>
            </Slider>
            <DotGroup />
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    </div>
}

export default Carousel
