import '../../styles/Legend.css'

function Legend(props){
    return(
        <div className="legend">
            <span>{props.children}</span>
        </div>
    )
}

export default Legend;