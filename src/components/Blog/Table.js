import '../../styles/Table.css'

function Table(props){
    const classname = props.border ? 'table-border' : 'table'; 
    return(
        <div className={classname}>
            <table>
                {props.children}
            </table>
        </div>
    )
}

export default Table;