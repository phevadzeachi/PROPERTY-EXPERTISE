function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-logo">
            PROPERTY
            <span>EXPERTISE</span>
          </div>

          <p>
            პროფესიონალური ექსპერტული მომსახურება
            უძრავი ქონების რეალური ღირებულების,
            მდგომარეობისა და რისკების შესაფასებლად.
          </p>

        </div>


        {/* NAVIGATION */}

        <div className="footer-column">

          <h3>
            NAVIGATION
          </h3>

          <a href="/">
            მთავარი
          </a>

          <a href="/standard">
            Standard
          </a>

          <a href="/premium">
            Premium
          </a>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>
            SERVICES
          </h3>

          <a href="/standard">
            სტანდარტული მომსახურება
          </a>

          <a href="/premium">
            პრემიუმ მომსახურება
          </a>

        </div>


        {/* PROJECT */}

        <div className="footer-column">

          <h3>
            PROJECT
          </h3>

          <p>
            Project Author — David Titmeria
          </p>

    

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 PROPERTY EXPERTISE. ყველა უფლება დაცულია.
        </p>

        <span>
          REAL ESTATE EXPERTISE
        </span>

      </div>

    </footer>
  );
}

export default Footer;