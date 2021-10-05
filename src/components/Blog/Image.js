import '../../styles/Image.css'

function Image(props){
    return(
        <div className='imgWrapper'>
            {props.children}
        </div>
    )
}

export default Image;