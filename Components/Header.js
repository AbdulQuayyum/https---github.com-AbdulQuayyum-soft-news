import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Soft</span>-News
      </h1>
      <span className={headerStyles.description}>
        Keep up to date with the latest news
      </span>
    </div>
  )
}

export default Header
