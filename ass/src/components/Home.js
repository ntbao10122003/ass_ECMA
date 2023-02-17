import Banner from './Banner'
import Header from './Header'
import services from './services'
import Projects from './Projects'
import Contact from './Contact/Contact'
import Footer from './Footer'
const Home = () => {
    return `
    ${Header()}
    ${Banner()}
    ${services()}
    ${Projects()}
    ${Contact()}
    ${Footer()}
    
    `
}

export default Home