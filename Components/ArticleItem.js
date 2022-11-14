import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <a href={`/Article/${article.id}`}>
      <div className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <h5>{article.excerpt}</h5>
      </div>
    </a>
  )
}

export default ArticleItem
