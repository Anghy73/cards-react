import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__message">
        Create with
        <a className="footer__link footer__link--vite" href="https://vitejs.dev/" target="_blank">
          <img src="vite.svg" alt="" />
        </a>
        by
        <a className="footer__link footer__link--creator" href="https://github.com/Anghy73" target="_blank">
          Andy
        </a>
      </p>
    </footer>
  )
}