import React from "react";

import { Section, SectionText, SectionTitle, Link } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Let’s create impactful digital products
        </SectionTitle>
        <SectionText>We are doers and creatives, who will accelerate your awesome idea to market.</SectionText>
        <Button>Let's talk</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
