import "../Aside/Aside.css"


export default function Aside(props){

    const isDarkMode = props.isDarkMode
    
    return(
        <aside className="col-2">
            <ul className="aside--container">
                <a href="#news" className={`aside_nav_link ${ isDarkMode ? 'aside_dark' : 'aside_light'}`}> 
                    <li className={`aside_nav_item ${ isDarkMode ? 'aside_item_dark' : 'aside_item_light'}`}>
                        <small> – Education </small>
                    </li>
                </a> 
                <a href="#research" className={`aside_nav_link ${ isDarkMode ? 'aside_dark' : 'aside_light'}`}> 
                    <li className={`aside_nav_item ${ isDarkMode ? 'aside_item_dark' : 'aside_item_light'}`}>
                        <small> – Research Interest </small>
                    </li>
                </a> 
                <a href="#publication" className={`aside_nav_link ${ isDarkMode ? 'aside_dark' : 'aside_light'}`}> 
                    <li className={`aside_nav_item ${ isDarkMode ? 'aside_item_dark' : 'aside_item_light'}`}>
                        <small> – Selected Publication </small>
                    </li>
                </a> 
            </ul>
        </aside>
    )
}
