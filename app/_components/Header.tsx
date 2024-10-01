
import Logo from '@/app/_components/Logo';
import NavBar from './NavBar';
import Button from './Button';


function Header() {
  return (
    <header className='border-b border-stone-900 px-8 py-5  '>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <NavBar />
        <Button>
        <a href='/CV.pdf' download='CV.pdf' className='btn'>
          Download CV
        </a>
        </Button>
      </div>
    </header>
  );
}
export default Header;
