import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/kubijak/',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/sypa234/',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jstepnowski97/',
  },
];

export const Footer = () => {
  return (
    <footer className='relative overflow-visible'>
      <div className='absolute h-[400px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className='container'>
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 pointer-events-none'>
          <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
          <nav className='relative z-20 flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.2 pointer-events-auto'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
