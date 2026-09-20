import { Anchor, Window, WindowContent, WindowHeader } from 'react95';
import { useHomeContact } from './home-contact.hook.tsx';

interface ConctactItemProps {
  to: string;
  label: string;
  image: string;
}

const ConctactItem = ({ to, label, image }: ConctactItemProps) => {
  const isExternal = to.startsWith('http');
  return (
    <div className="home-contact-item">
      <img className="contact-image" src={image} />
      <Anchor
        href={to}
        {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      >
        {' '}
        {label}
      </Anchor>
    </div>
  );
};

export const HomeContactComponent = () => {
  const { contactItemsProps } = useHomeContact();
  return (
    <div className="home-contact-container">
      <Window className="section-window">
        <WindowHeader>Contact</WindowHeader>
        <WindowContent>
          {contactItemsProps.map((item, i) => (
            <ConctactItem key={i} {...item} />
          ))}
        </WindowContent>
      </Window>
    </div>
  );
};
