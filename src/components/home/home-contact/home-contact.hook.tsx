import GmailImage from '../../../assets/image/gmail.png';
import LinkedinImage from '../../../assets/image/linkedin.png';
import MaltImage from '../../../assets/image/malt.png';
import GithubImage from '../../../assets/image/github.svg';

export const useHomeContact = () => {
  const contactItemsProps = [
    {
      to: 'mailto:florentcadot.dev@gmail.com',
      label: 'florentcadot.dev@gmail.com',
      image: GmailImage,
    },
    {
      to: 'https://www.linkedin.com/in/florent-cadot',
      label: 'Linkedin',
      image: LinkedinImage,
    },
    {
      to: 'https://www.malt.fr/profile/florentcadot',
      label: 'Malt freelance',
      image: MaltImage,
    },
    {
      to: 'https://github.com/florentcadot',
      label: 'Github',
      image: GithubImage,
    },
  ];

  return {
    contactItemsProps,
  };
};
