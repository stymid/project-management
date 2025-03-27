const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">درباره ما</h3>
          <ul>
            <li>
              <a href="/about-us">درباره ما</a>
            </li>
            <li>
              <a href="/contact">تماس با ما</a>
            </li>
            <li>
              <a href="/privacy-policy">حریم خصوصی</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">شبکه‌های اجتماعی</h3>
          <ul className="flex flex-col md:flex-row space-x-4">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                لینکدین
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
