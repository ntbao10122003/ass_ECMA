

const Header = () => {
  return `
  
  <section id="header">
            <div class="header container">
                <div class="nav-bar">
                        <div class="brand">
                                <a href="#hero">
                                <h1><span>N</span> T<span>B</span></h1>
                                </a>
                        </div>
                <div class="nav-list">
                    <div class="hamburger">
                         <div class="bar"></div>
                    </div>
                            <ul>
                                    <li><a href="#home" data-after="Home">Home</a></li>
                                    <li><a href="#services" data-after="Service">Services</a></li>
                                    <li><a href="/Projects" data-after="Projects">Projects</a></li>
                                    <li><a href="#about" data-after="About">About</a></li>
                                    <li><a href="/Contact" data-after="Contact">Contact</a></li>
                            </ul>
                    </div>
                </div>
            </div>
</section>

  `
  
}

export default Header