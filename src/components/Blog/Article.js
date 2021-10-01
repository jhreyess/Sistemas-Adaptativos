import '../../styles/Article.css'

function Article(props){
    return(
        <article className="section">
            {props.children}
        </article>
    )
}

export default Article;