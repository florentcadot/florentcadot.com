import { useEffect } from 'react';
import { HomeMainComponent } from '../components/home/home-main.component';
import { HomeTechnoComponent } from '../components/home/home-techno/home-techno.component.tsx';
import { HomeContactComponent } from '../components/home/home-contact/home-contact.component.tsx';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  const elementName = location.state?.elementName;
  useEffect(() => {
    if (elementName) {
      scroller.scrollTo(elementName, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
      });
    }
  }, [elementName]);

  return (
    <div>
      <Element name="home-main">
        <HomeMainComponent />
      </Element>
      <Element name="home-techno">
        <HomeTechnoComponent />
      </Element>
      <Element name="home-contact">
        <HomeContactComponent />
      </Element>
    </div>
  );
};
