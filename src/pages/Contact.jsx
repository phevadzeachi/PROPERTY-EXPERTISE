
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-hero-content">

          <p className="contact-label">
            CONTACT
          </p>

          <h1>
            დაიწყეთ ქონების
            <span> შეფასება</span>
          </h1>

          <p>
            მოგვაწოდეთ ძირითადი ინფორმაცია ქონების შესახებ
            და მიიღეთ პროფესიონალური ექსპერტული კონსულტაცია
            გადაწყვეტილების მიღებამდე.
          </p>

        </div>
      </section>


      <section className="contact-section">

        <div className="contact-layout">

          <div className="contact-info">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              მოდით განვიხილოთ
              <span> თქვენი ქონება.</span>
            </h2>

            <p className="contact-info-description">
              თითოეული ქონება განსხვავებულია.
              მოგვაწოდეთ ინფორმაცია თქვენი ობიექტის შესახებ
              და ჩვენი ექსპერტი დაგეხმარებათ განსაზღვროთ,
              რომელი ტიპის შეფასებაა თქვენთვის საჭირო.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <span>1</span>

                <div>
                  <h3>მომსახურება</h3>
                  <p>Standard / Premium</p>
                </div>
              </div>


              <div className="contact-detail">
                <span>2</span>

                <div>
                  <h3>კონსულტაცია</h3>
                  <p>
                    ინდივიდუალური ექსპერტული მიდგომა
                  </p>
                </div>
              </div>


              <div className="contact-detail">
                <span>3</span>

                <div>
                  <h3>პასუხი</h3>
                  <p>
                    მოთხოვნის მიღების შემდეგ დაგიკავშირდებით
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/"
              className="contact-back-link"
            >
              ← მთავარ გვერდზე დაბრუნება
            </Link>

          </div>


          <div className="contact-form-wrapper">

            {!submitted ? (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">

                  <p>
                    PROPERTY INFORMATION
                  </p>

                  <h3>
                    მოგვაწოდეთ ინფორმაცია
                  </h3>

                </div>


                <div className="form-group">

                  <label>
                    სახელი და გვარი
                  </label>

                  <input
                    type="text"
                    placeholder="შეიყვანეთ სახელი და გვარი"
                    required
                  />

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label>
                      ტელეფონის ნომერი
                    </label>

                    <input
                      type="tel"
                      placeholder="+995 5XX XX XX XX"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      ელფოსტა
                    </label>

                    <input
                      type="email"
                      placeholder="example@email.com"
                      required
                    />

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label>
                      ქონების ტიპი
                    </label>

                    <select
                      defaultValue=""
                      required
                    >

                      <option value="" disabled>
                        აირჩიეთ ქონების ტიპი
                      </option>

                      <option value="apartment">
                        ბინა
                      </option>

                      <option value="house">
                        კერძო სახლი
                      </option>

                      <option value="commercial">
                        კომერციული ფართი
                      </option>

                      <option value="land">
                        მიწის ნაკვეთი
                      </option>

                      <option value="other">
                        სხვა
                      </option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      მომსახურების ტიპი
                    </label>

                    <select
                      defaultValue=""
                      required
                    >

                      <option value="" disabled>
                        აირჩიეთ მომსახურება
                      </option>

                      <option value="standard">
                        Standard
                      </option>

                      <option value="premium">
                        Premium
                      </option>

                    </select>

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    ქონების მდებარეობა
                  </label>

                  <input
                    type="text"
                    placeholder="ქალაქი, უბანი, მისამართი"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    დამატებითი ინფორმაცია
                  </label>

                  <textarea
                    rows="6"
                    placeholder="მოგვწერეთ დამატებითი ინფორმაცია ქონების შესახებ..."
                  />

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >
                  მოთხოვნის გაგზავნა →
                </button>


                <p className="form-note">
                  თქვენი ინფორმაცია გამოიყენება მხოლოდ
                  მოთხოვნის დასამუშავებლად.
                </p>

              </form>

            ) : (

              <div className="contact-success">

                <div className="success-icon">
                  ✓
                </div>

                <p className="section-label">
                  REQUEST RECEIVED
                </p>

                <h2>
                  მოთხოვნა წარმატებით
                  <span> გაიგზავნა.</span>
                </h2>

                <p>
                  გმადლობთ დაინტერესებისთვის.
                  თქვენი მოთხოვნა მიღებულია და ჩვენი
                  ექსპერტი დაგიკავშირდებათ დამატებითი
                  დეტალების გასარკვევად.
                </p>

                <button
                  type="button"
                  className="contact-submit"
                  onClick={() => setSubmitted(false)}
                >
                  ახალი მოთხოვნის გაგზავნა →
                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      <section className="contact-bottom">

        <div className="contact-bottom-line">

          <span></span>

          <p>
            INFORMED DECISIONS. REAL VALUE.
          </p>

          <span></span>

        </div>

      </section>

    </main>
  );
}

export default Contact;

