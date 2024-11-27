import "../Aside/Aside.css"


export default function Aside(props){
    return(
        <aside className="col-2">
            <ul className="aside--container">
                <a href="#research" className="aside_nav_link"> 
                    <li className="aside_nav_item">
                        <small> – Research Interest </small>
                    </li>
                </a> 
                <a href="#news" className="aside_nav_link"> 
                    <li className="aside_nav_item">
                        <small> – News </small>
                    </li>
                </a> 
                <a href="#publication" className="aside_nav_link"> 
                    <li className="aside_nav_item">
                        <small> – Selected Publication </small>
                    </li>
                </a> 
            </ul>
        </aside>
    )
}