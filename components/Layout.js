import Link from 'next/link'

export default function Layout({ children }) {
  const year = new Date().getFullYear()

  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright {year} Just Add Marmite :)</p>
      </footer>
    </div>
  )
}