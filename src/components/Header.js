import AboutMe from "./About-Me"
import Contact from "./Contact"
import Projects from "./Projects"



function Header({setPage}) {
    return ( 
    <ul>
        <li onClick = {()=> setPage(<AboutMe/>)}>About Me </li>
        <li onClick = {()=> setPage(<Contact/>)}>Contact</li>
        <li onClick = {()=> setPage(<Projects/>)}>Projects</li>
    </ul>

    )
}
export default Header