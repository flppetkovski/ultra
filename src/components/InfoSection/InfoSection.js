import React from 'react'
import {Link} from "react-router-dom"
import Button from "../../globalStyles"
import {Container} from "../../globalStyles"
import {
 InfoSec,
 InfoRow, 
 InfoColumn,
 TextWrapper,
 TopLine,
 Heading,
 SubTitle,
 ImgWrapper,
 Img

} from "./InfoSection.elements"
const InfoSection = ({
primary,
lightBg,
imgStart,
lightTopLine,
lightTextDesc,
buttonLabel,
description,
headline,
lightText,
img,
alt, 
start,
topLine }) => {
 return (
  <>
   <InfoSec lightBg={lightBg}>
    <Container>
    <InfoRow imgStart={imgStart}>
    <InfoColumn>
    <TextWrapper>
    <TopLine lightTopLine={lightTopLine}>
    {topLine}
    </TopLine>
    <Heading lightText={lightText}> {headline} </Heading>
    <SubTitle lightTextDesc={lightTextDesc} > {description} </SubTitle>
<Link to="/sign-up">
<Button big fontBig primary={primary}>
{buttonLabel}
</Button>
</Link>

    </TextWrapper>
    </InfoColumn>
<InfoColumn>

</InfoColumn>
<ImgWrapper start={start}>
<Img src={img} alt={alt} />
</ImgWrapper>
    </InfoRow>
    </Container>
   </InfoSec>
  </>
 )
}

export default InfoSection
