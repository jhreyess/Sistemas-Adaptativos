import '../../styles/Sidebar.css'

function Sidebar(props){
    return(
        <div className="sidebarWrapper">
            <nav className="sidebar">
                {props.children}
            </nav>
        </div>
    )
}

export default Sidebar;