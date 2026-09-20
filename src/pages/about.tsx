import { Anchor, Window, WindowContent } from 'react95';

interface AboutLinkProps {
  label: string;
  href: string;
}

const AboutLink = ({ label, href }: AboutLinkProps) => {
  return (
    <Anchor target="_blank" href={href}>
      {label}
    </Anchor>
  );
};

export const About = () => {
  return (
    <div className="about-content">
      <Window className="about-window">
        <WindowContent className={'about-inner-content'}>
          <p>
            I'm passionate about what I do, and I love writing smart,
            well-crafted, minimalist, thoroughly tested, and high-quality code.
            I’m comfortable working with AI tools when they add value, but I’m
            equally comfortable developing without them when the task calls for
            it. Ultimately, I care more about the quality of the code and the
            solution than the tools used to build it.
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
              &nbsp;({`<--`} I added a few code commits to those.)
            </li>
            <li>
              <AboutLink
                href={'https://github.com/OpenBeta/open-tacos'}
                label={'Openbeta'}
              />
              &nbsp;(climbing knowledge platform)
            </li>
            <li>
              <AboutLink
                href={'https://github.com/ankitects/anki'}
                label={'Anki'}
              />
              &nbsp;(Spaced repetition flashcard program)
            </li>
          </div>
          <div>
            <p className={'about-block-title'}>Other interests:</p>
            <li>Music production</li>
            <li>Climbing mountains</li>
            <li>Japanese</li>
          </div>
        </WindowContent>
      </Window>
    </div>
  );
};
