import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero-content">

          <p className="hero-label">
            PROPERTY EXPERTISE
          </p>

          <h1>
            თქვენი ქონების რეალური <span>ღირებულება</span>
          </h1>

          <p className="hero-description">
            პროფესიონალური ექსპერტული მომსახურება,
            რომელიც გეხმარებათ ქონების რეალური ღირებულების,
            მდგომარეობისა და რისკების სრულად შეფასებაში.
          </p>

          <div className="hero-buttons">

            <Link to="/premium" className="primary-button">
              Premium მომსახურება
            </Link>

            <Link to="/standard" className="secondary-button">
              Standard მომსახურება
            </Link>

          </div>

        </div>
      </section>


      {/* =========================
          SERVICES
      ========================= */}

      <section className="services">

        <div className="section-heading">

          <p className="section-label">
            EXPERT SERVICES
          </p>

          <h2>
            აირჩიეთ თქვენთვის სასურველი პროფესიონალური მომსახურება
          </h2>

          <p>
            ორი განსხვავებული მომსახურების დონე — თქვენი
            საჭიროებებისა და მიზნების შესაბამისად.
          </p>

        </div>


        <div className="service-cards">

          {/* STANDARD */}

          <div className="service-card standard-card">

            <div>

              <p className="card-label">
                STANDARD
              </p>

              <h3>
                სტანდარტული
              </h3>

              <p className="card-description">
                ძირითადი პროფესიონალური შეფასება და
                მნიშვნელოვანი რისკების კონტროლი.
              </p>

            </div>

            <Link to="/standard" className="card-button">
              დეტალურად →
            </Link>

          </div>


          {/* PREMIUM */}

          <div className="service-card premium-card">

            <div>

              <p className="card-label">
                PREMIUM
              </p>

              <h3>
                პრემიუმი
              </h3>

              <p className="card-description">
                სრული და გაფართოებული ექსპერტული ანალიზი
                გადაწყვეტილების მისაღებად.
              </p>

            </div>

            <Link to="/premium" className="card-button">
              დეტალურად →
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          WHY US
      ========================= */}

      <section className="why-us">

        <div className="why-us-heading">

          <p className="section-label">
            WHY US
          </p>

          <h2>
            გადაწყვეტილება უნდა ეფუძნებოდეს
            <span> რეალურ ინფორმაციას.</span>
          </h2>

          <p>
            ჩვენი მიზანია, ქონების შეძენამდე მიიღოთ
            მკაფიო და პროფესიონალური სურათი — რას ყიდულობთ,
            რა ღირს და რა რისკები შეიძლება არსებობდეს.
          </p>

        </div>


        <div className="why-us-grid">

          <div className="why-us-item">

            <span>1</span>

            <h3>
              დეტალური ანალიზი
            </h3>

            <p>
              ვაფასებთ ქონებას სხვადასხვა მნიშვნელოვანი
              ფაქტორის გათვალისწინებით და არა მხოლოდ
              ვიზუალური შთაბეჭდილებით.
            </p>

          </div>


          <div className="why-us-item">

            <span>2</span>

            <h3>
              რეალური ღირებულება
            </h3>

            <p>
              ყურადღება ექცევა საბაზრო ფასს, ლიკვიდურობას
              და ქონების რეალურ მდგომარეობას.
            </p>

          </div>


          <div className="why-us-item">

            <span>3</span>

            <h3>
              რისკების კონტროლი
            </h3>

            <p>
              ვიკვლევთ ისეთ ფაქტორებს, რომლებიც შესაძლოა
              შეძენის შემდეგ დამატებით პრობლემად იქცეს.
            </p>

          </div>


          <div className="why-us-item">

            <span>4</span>

            <h3>
              პირადი კონსულტაცია
            </h3>

            <p>
              ექსპერტთან პირადი კონსულტაცია ადგილზე
              გეხმარებათ საბოლოო გადაწყვეტილების მიღებაში.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PROCESS
      ========================= */}

      <section className="process">

        <div className="process-heading">

          <p className="section-label">
            OUR PROCESS
          </p>

          <h2>
            როგორ მუშაობს ექსპერტული მომსახურება
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-item">

            <span>1</span>

            <h3>
              ქონების შესწავლა
            </h3>

            <p>
              ვეცნობით ქონებას, მის მდებარეობას,
              მდგომარეობასა და ძირითად მახასიათებლებს.
            </p>

          </div>


          <div className="process-item">

            <span>2</span>

            <h3>
              ექსპერტული შეფასება
            </h3>

            <p>
              ვაანალიზებთ ფასს, გარემოს, რისკებს,
              ფუნქციურობასა და სხვა მნიშვნელოვან ფაქტორებს.
            </p>

          </div>


          <div className="process-item">

            <span>3</span>

            <h3>
              საბოლოო კონსულტაცია
            </h3>

            <p>
              გაწვდით მკაფიო ინფორმაციას, რათა ქონების
              შესახებ გადაწყვეტილება ინფორმირებულად მიიღოთ.
            </p>

          </div>

        </div>

      </section>


     {/* =========================
    FINAL CTA
========================= */}

<section className="home-cta">

  <div className="cta-content">

    <p className="section-label">
      PROPERTY EXPERTISE
    </p>

    <h2>
      მზად ხართ გაიგოთ
      <span> ქონების რეალური ღირებულება?</span>
    </h2>

    <p>
      პროფესიონალური ექსპერტული შეფასება გეხმარებათ
      დაინახოთ ქონების რეალური ღირებულება, მდგომარეობა
      და შესაძლო რისკები გადაწყვეტილების მიღებამდე.
    </p>

    <div className="cta-line">
      <span></span>
      <p>
        INFORMED DECISIONS. REAL VALUE.
      </p>
    </div>

  </div>

</section>
  </main>
  );
}

export default Home;