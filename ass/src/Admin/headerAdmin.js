
const headerAdmin = () => {
  return `
  <section id="header">
                <div class="header container">
                        <div class="nav-bar">
                        <div class="brand">
                                <a style="text-decoration: none;" href="/home">
                                <h1><span>H</span><span>OME</span></h1>
                                </a>
                        </div>
                <div class="nav-list">
                    <div class="hamburger">
                         <div class="bar"></div>
                    </div>
                            <ul>
                                    <li><a href="/admin/projects" data-after="Home">Home</a></li>
                                    <li><a href="/AdminServicesList" data-after="Service">Services</a></li>
                                    <li><a href="/admin/projects" data-after="Projects">Projects</a></li>
                                    <li><a href="/ContactList" data-after="Contact">Contact</a></li>
                            </ul>
                    </div>
                </div>
            </div>
</section>
}
  `
  
}

export default headerAdmin