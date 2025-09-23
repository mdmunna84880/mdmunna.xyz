import Professional from './assets/Professional.jpg'
function Navbar() {
  return (
    <header className="h-24 w-full bg-[#F9FAFB] text-[#1E3A8A]">
      <nav className="w-full h-full flex justify-between items-center px-8">

        <div className="flex gap-5 items-center justify-center">
          <a href="#"><img src={Professional} alt="mypicture" className="h-16 w-16 rounded-full transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_#06B6D4]"/></a>
          <a href="#" className='hover:text-[#06B6D4]'><h1>Md Munna</h1></a>
        </div>

        <ul className="flex justify-center items-center gap-5">
          <li><a href="#projects" className='hover:text-[#06B6D4]'>Projects</a></li>
          <li><a href="#education" className='hover:text-[#06B6D4]'>Education</a></li>
          <li><a href="#skills" className='hover:text-[#06B6D4]'>Skills</a></li>
          <li><a href="#about" className='hover:text-[#06B6D4]'>About</a></li>
          <li><a href="#contact" className='hover:text-[#06B6D4]'>Contact</a></li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Navbar;
