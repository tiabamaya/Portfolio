export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} Isaiah Concepcion
        </p>

        <p>
          Designed & developed by Isaiah
        </p>

        <a href="#">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}