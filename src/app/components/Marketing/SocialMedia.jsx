import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost, FaYoutube, FaMedium } from 'react-icons/fa';

// Social media data
const socialMedia = [
  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://www.linkedin.com' },
  { name: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com' },
  { name: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com' },
  { name: 'TikTok', icon: FaTiktok, link: 'https://www.tiktok.com' },
  { name: 'Snapchat', icon: FaSnapchatGhost, link: 'https://www.snapchat.com' },
  { name: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com' },
  { name: 'Medium', icon: FaMedium, link: 'https://www.medium.com' },
];

const SocialMediaSection = () => {
  return (
    <section className="max-w-[1135px] mx-auto flex justify-center items-center bg-gradient-to-r from-[#e4e4ec] to-[#f9e8eb]">
      <div className="flex flex-row flex-wrap space-x-10 justify-between">
        {/* Loop through social media array */}
        {socialMedia.map((social, index) => {
          const IconComponent = social.icon; // Dynamically use the correct icon
          return (
            <Link href={social.link} key={index} target="_blank" rel="noopener noreferrer">
              <div className="relative p-4 group transition duration-500">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#080a62] to-[#dc3d52] opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <IconComponent className="text-[#080a62] group-hover:text-white text-3xl md:text-8xl z-10 relative transition duration-300 md:px-5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SocialMediaSection;
