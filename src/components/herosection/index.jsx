/* import React, { useState } from 'react'; */
import Video from '../../videos/video.webm';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper /*, ArrowForward, ArrowRight*/ } from './heroElements';
/* import { Button } from '../buttonElements'; */

const HeroSection = () => {

    /*
    const [hover, setHover] = useState(false);

     const onHover = () => {
        setHover(!hover);
    }
    */


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/webm' />
        </HeroBg>
        <HeroContent>
            <HeroH1></HeroH1>
            <HeroP></HeroP>
            <HeroBtnWrapper>
                {/*<Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='false'>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>*/}
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection