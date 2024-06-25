interface AboutLinkProps {
  label: string;
  href: string;
}

const AboutLink = ({ label, href }: AboutLinkProps) => {
  return (
    <a className={'about-link'} target="_blank" href={href}>
      {label}
    </a>
  );
};

export const About = () => {
  return (
    <div className="content">
      <div className="about-content">
        <div className={'about-inner-content'}>
          <p>
            I started my career in IT as a front-end developer in 2018. Then
            I've started working as a full-stack freelancer in 2020. I'm really
            passionate about the job, and I'm fond of
            smart-well-crafted-minimalist-tested-high-quality code.
          </p>
          <div>
            <p className={'about-block-title'}>Tech watch:</p>
            <li>
              <AboutLink
                href={'https://javascriptweekly.com'}
                label={'javascriptweekly newsletter'}
              />
            </li>
            <li>
              <AboutLink
                href={'https://newsletter.systemdesign.one'}
                label={'systemdesign newsletter'}
              />
            </li>
            <li>
              <AboutLink
                href={'https://frontendfoc.us'}
                label={'frontendfocus newsletter'}
              />
            </li>
          </div>
          <div>
            <p className={'about-block-title'}>Open source bangers:</p>
            <li>
              <AboutLink
                href={'https://github.com/c2corg/v6_api'}
                label={'Camptocamp backend'}
              />
              &nbsp;&&nbsp;
              <AboutLink
                href={'https://github.com/c2corg/c2c_ui'}
                label={'Camptocamp frontend'}
              />
              &nbsp;({`<--`} I've pushed a few commit to those one.)
            </li>
            <li>
              <AboutLink
                href={'https://github.com/OpenBeta/open-tacos'}
                label={'Openbeta '}
              />
              &nbsp;(climbing knowledge platform)
            </li>
            <li>
              <AboutLink
                href={
                  'https://github.com/electricitymaps/electricitymaps-contrib'
                }
                label={'Electricitymaps'}
              />
              &nbsp; (electricity & C02 emission visualization tool)
            </li>
          </div>
          <div>
            <p className={'about-block-title'}>Other interests:</p>
            <li>Music production</li>
            <li>Climbing mountains</li>
            <li>Sustainability</li>
          </div>
        </div>
      </div>
    </div>
  );
};
