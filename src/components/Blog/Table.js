import '../../styles/Table.css'

function Table(props){
    return(
        <div className="table">
            <table>
                {props.children}
            </table>
        </div>
    )
}

export default Table;