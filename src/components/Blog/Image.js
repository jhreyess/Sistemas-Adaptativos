import '../../styles/Image.css'

function Image(props){

    const className = `imgWrapper ${props.size}`;

    return(
        <div className={className} >
            {props.children}
        </div>
    )
}

export default Image;