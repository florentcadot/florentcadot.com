import { useHomeContact } from './home-contact.hook.tsx';

interface ConctactItemProps {
  to: string;
  label: string;
  image: string;
}

const ConctactItem = ({ to, label, image }: ConctactItemProps) => {
  return (
    <div className="home-contact-item">
      <img className="contact-image" src={image} />
      <a href={to}> {label}</a>
    </div>
  );
};

export const HomeContactComponent = () => {
  const { contactItemsProps } = useHomeContact();
  return (
    <div className="home-contact-container">
      <div className="title-container">
        <p className="title">Contact</p>
      </div>

      <div className="home-contact-content">
        <div>
          {contactItemsProps.map((item, i) => (
            <ConctactItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
