import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid px-0 container-overflow">
   <header className="navbar navbar-expand-lg bg-white py-4 border-bottom">
                <div className="container">

                    <a className="navbar-brand fw-bold fs-1 text-danger">
                        AAVORide
                    </a>

                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="nav"
                    >
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <a
                                    className="nav-link text-danger fw-semibold border-bottom border-3 border-danger"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Safety</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <button
                        className="btn rounded-pill px-4 py-3 text-white"
                        style={{
                            background: "#ff4d21",
                            fontWeight: "600"
                        }}
                    >
                        Join as AAVoRider Partner
                    </button>
                </div>
            </header>

          <section className="hero-section">
  <div className="container py-4  py-md-5 py-lg-5 mainpage-prop">

    <div className="row g-5">

      <div className="col-lg-7 m-0">

        <div className="trust-badge">
          ⚙ India's Most Trusted Outstation Network
        </div>

        <h1 className="hero-title mt-4">
          India's Smarter
          <br />

          <span>Outstation</span> Cab
          <br />
          Platform.
        </h1>

        <p className="hero-desc">
          Experience executive-grade travel with AAVORide.
          Punctual arrivals, verified luxury fleet and
          transparent pricing for your intercity journeys.
        </p>

        <div className="hero-btns">

          <button className="journey-btn">
            Start Your Journey
          </button>

          <button className="download-btn">
            Download App
          </button>

        </div>

        <div className="rating-box">

          <div className="users">

            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt=""
            />

            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt=""
            />

            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt=""
            />

          </div>

          <span>
            ⭐ <b>4.9/5 Rating</b> from 50k+ Happy Travelers
          </span>

        </div>

      </div>
      <div className="col-lg-5 m-0">

        <div className="trip-card">

          <div className="trip-icon">
            🚗
          </div>

          <h2>
            Plan Your Trip
          </h2>

          <div className="trip-tabs">

            <span className="active">
              One Way
            </span>

            <span>
              Round Trip
            </span>

          </div>

          <input
            type="text"
            className="form-control custom-input"
            placeholder="📍 Enter City or Airport"
          />

          <input
            type="text"
            className="form-control custom-input"
            placeholder="📌 Where are you heading?"
          />

          <div className="row g-3">

            <div className="col-6">
              <input
                type="date"
                className="form-control custom-input"
              />
            </div>

            <div className="col-6">
              <input
                type="time"
                className="form-control custom-input"
              />
            </div>

          </div>

          <select
            className="form-select custom-input mt-3"
          >
            <option>
              1 Passenger
            </option>

            <option>
              2 Passenger
            </option>

            <option>
              4 Passenger
            </option>

          </select>

          <div className="vehicle-grid">

            {[
              "Hatchback",
              "Sedan",
              "SUV",
              "Comfort Van",
              "Innova"
            ].map((item) => (

              <div
                className="vehicle-item"
                key={item}
              >
                <img
                  src="/Images/car-icon.png"
                  alt=""
                />

                <small>{item}</small>
              </div>

            ))}

          </div>

          <p className="recommend-text">
            RECOMMENDED FOR YOU
          </p>

          <div className="recommend-box">

            <div>

              <h6>
                Premium Sedan
              </h6>

              <small>
                Honda City or similar
              </small>

            </div>

            <h5>
              ₹12/km
            </h5>

          </div>

          <button className="search-btn">
            Search Cabs
          </button>

        </div>

      </div>

    </div>

  </div>
</section>
<section
  className="py-5"
  style={{
    background: "#f8ede6"
  }}
>
  <div className="container">

    <div className="row g-4">

      {[
        {
          number: "10k+",
          text: "Active Travelers"
        },
        {
          number: "5k+",
          text: "Verified Drivers"
        },
        {
          number: "100+",
          text: "Cities Covered"
        },
        {
          number: "4.9",
          text: "User Rating"
        }
      ].map((item, index) => (

        <div
          className="col-lg-3 col-md-6"
          key={index}
        >
          <div className="stats-card">

            <h1>{item.number}</h1>

            <p>{item.text}</p>

          </div>
        </div>

      ))}

    </div>

  </div>
</section>

<section className="py-5">

<div className="container">

<div className="text-center mb-5">

<h2
className="fw-semibold mb-3"
style={{
fontSize:"34px"
}}
>
Why AAVORide is Smarter?
</h2>

<p
className="mx-auto text-secondary"
style={{
maxWidth:"744px",
fontSize:"18px"
}}
>
We've redesigned outstation travel from the
ground up to solve every pain point of
traditional cab bookings.
</p>

</div>



<div className="row g-5">

<div className="col-lg-6">

<div className="compare-card">

<div className="compare-label gray">
Traditional Cabs
</div>

<div className="compare-item">

<div className="cross-icon">
✕
</div>

<div>
<h5>Last Minute Cancellations</h5>

<p>
Drivers often cancel just before
the trip starts.
</p>
</div>

</div>

<div className="compare-item">

<div className="cross-icon">
✕
</div>

<div>
<h5>Hidden Tolls & Charges</h5>

<p>
Vague pricing that changes at
the end of the trip.
</p>
</div>

</div>


<div className="compare-item">

<div className="cross-icon">
✕
</div>

<div>
<h5>Unverified Drivers</h5>

<p>
Lack of safety standards and
background checks.
</p>
</div>

</div>

</div>

</div>



{/* RIGHT */}

<div className="col-lg-6">

<div className="compare-card">

<div className="compare-label orange">
AAVORide Experience
</div>

<div className="compare-item">

<div className="check-icon">
✓
</div>

<div>

<h5>
Zero Cancellation Policy
</h5>

<p>
Confirmed rides guaranteed every
single time.
</p>

</div>

</div>


<div className="compare-item">

<div className="check-icon">
✓
</div>

<div>

<h5>
Fixed & Transparent
</h5>

<p>
Pay exactly what you see. No
hidden toll surprises.
</p>

</div>

</div>


<div className="compare-item">

<div className="check-icon">
✓
</div>

<div>

<h5>
Luxury Fleet & Elite Drivers
</h5>

<p>
5-point background checks for
premium safety.
</p>

</div>

</div>

</div>

</div>

</div>

</div>

</section>
       <section className="travel-services py-5">
  <div className="container">

    <div className="text-center mb-5">
      <span className="service-badge">Services</span>

      <h2 className="fw-bold mt-3">
        Travel Solutions for Every Journey
      </h2>

      <p className="text-muted mx-auto service-text">
        From airport rides to outstation adventures — experience smarter,
        safer, and more comfortable travel with AAVORide.
      </p>

      <div className="title-line"></div>
    </div>

    <div className="row g-4">

      <div className="col-lg-8">

        <div className="service-card large-card">

          <div
            className="service-bg"
            style={{
              backgroundImage: "url('/Images/car-11.png')"
            }}
          />

          <span className="tag-popular">
            Most Popular
          </span>

          <div className="glass-box">

            <small className="brand">AAVORide</small>

            <h4 className="fw-bold">
              Outstation Trips
            </h4>

            <p>
              Intercity journeys made luxurious with professional chauffeurs
              and guaranteed fleet availability.
            </p>

            <div className="d-flex gap-2 flex-wrap">

              <button className="btn explore-btn">
                Explore Routes
              </button>

              <button className="btn learn-btn">
                Learn More
              </button>

            </div>
          </div>

        </div>

      </div>
      <div className="col-lg-4">

        <div className="row g-4">

          <div className="col-12">
            <div className="service-card small-card">

              <div
                className="service-bg"
                style={{
                  backgroundImage: "url('/Images/car-22.png')"
                }}
              />

              <div className="small-content">

                <h5>Airport Transfers</h5>

                <p>
                  Punctual pickups & drops with real-time flight tracking.
                </p>

              </div>

            </div>
          </div>


          <div className="col-12">
            <div className="service-card small-card">

              <div
                className="service-bg"
                style={{
                  backgroundImage: "url('/Images/car-3.png')"
                }}
              />

              <div className="small-content">

                <h5>Wedding Cars</h5>

                <p>
                  Make your special day grand with our luxury fleet.
                </p>

              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="col-md-4">

        <div className="service-card bottom-card">

          <div
            className="service-bg"
            style={{
              backgroundImage:"url('/Images/car-4.png')"
            }}
          />

          <div className="small-content">

            <h5>Local Rentals</h5>

            <p>
              Hourly packages for all your city exploration needs.
            </p>

          </div>

        </div>

      </div>


      <div className="col-md-4">

        <div className="service-card bottom-card">

          <div
            className="service-bg"
            style={{
              backgroundImage:"url('/Images/car-6.png')"
            }}
          />

          <div className="small-content">

            <h5>Round Trips</h5>

            <p>
              Seamless multi-day travel with zero hidden costs.
            </p>

          </div>

        </div>

      </div>


      <div className="col-md-4">

        <div className="service-card bottom-card">

          <div
            className="service-bg"
            style={{
              backgroundImage:"url('/Images/car-8.png')"
            }}
          />

          <div className="small-content">

            <h5>Tempo Travellers</h5>

            <p>
              Premium group travel with spacious modern vans.
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-5">Your Journey in 4 Simple Steps</h2>
        <div className="row position-relative">
          <div className="steps-line d-none d-md-block"></div>
          <div className="steps-line-active d-none d-md-block"></div>
          
          <div className="col-md-3 mb-4 mb-md-0 position-relative">
            <div className="step-icon-wrapper activeadd">
              <i className="bi bi-geo-alt step-icon active"></i>
              <div className="step-number step-active">1</div>
            </div>
            <h5 className="fw-bold">Enter Destination</h5>
            <p className="text-gray small px-3">Tell us where you want to go and when you want to start.</p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="step-icon-wrapper">
              <i className="bi bi-arrows-expand step-icon"></i>
              <div className="step-number text-gray bg-light">2</div>
            </div>
            <h5 className="fw-bold">Compare Cabs</h5>
            <p className="text-gray small px-3">Choose from a fleet of hatchbacks, sedans, and premium SUVs.</p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="step-icon-wrapper">
              <i className="bi bi-check-circle step-icon"></i>
              <div className="step-number text-gray bg-light">3</div>
            </div>
            <h5 className="fw-bold">Instant Booking</h5>
            <p className="text-gray small px-3">Confirm with a small advance or pay later in full.</p>
          </div>
          <div className="col-md-3">
            <div className="step-icon-wrapper">
              <i className="bi bi-emoji-smile step-icon"></i>
              <div className="step-number text-gray bg-light">4</div>
            </div>
            <h5 className="fw-bold">Travel Comfortably</h5>
            <p className="text-gray small px-3">Experience the premium hospitality of AAVORide.</p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4">Our Drivers are our Heroes</h2>
            <p className="text-gray mb-4">Every AAVORide driver undergoes a rigorous 5-step verification process, background checks, and hospitality training.</p>
            
            <div className="check-item">
              <div className="icon-circle text-primary bg-light-pink" style={{width: '32px', height: '32px'}}>
                <i className="bi bi-shield-check"></i>
              </div>
              <span>Background Verified by Top Agencies</span>
            </div>
            <div className="check-item">
              <div className="icon-circle text-primary bg-light-pink" style={{width: '32px', height: '32px'}}>
                <i className="bi bi-brain"></i>
              </div>
              <span>Psychometric Safety Testing</span>
            </div>
            <div className="check-item">
              <div className="icon-circle text-primary bg-light-pink" style={{width: '32px', height: '32px'}}>
                <i className="bi bi-award"></i>
              </div>
              <span>Hospitality & Professionalism Certified</span>
            </div>
          </div>
          
          <div className="col-lg-6 offset-lg-1">
            <div className="driver-card shadow-sm">
              <div className="d-flex align-items-center md:gap-4 mb-4">
                <div className="driver-image-container">
                  <Image src="/driver.png" width={90} height={90} alt="Rajesh Kumar" className="img-fluid" />
                </div>
                <div>
                  <h3 className="fw-bold mb-1">Rajesh Kumar</h3>
                  <div className="badge-elite mb-2">Elite Partner • 5.0 ★</div>
                  <div className="d-flex gap-2">
                    <span className="badge-gray" style={{background: '#fff0eb', color: '#f34236'}}>VERIFIED</span>
                    <span className="badge-gray">1000+ TRIPS</span>
                  </div>
                </div>
                <div className="ms-auto align-self-start opacity-25">
                  <i className="bi bi-person-badge fs-1"></i>
                </div>
              </div>
              
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="driver-info-box">
                    <div className="driver-info-label">VEHICLE</div>
                    <div className="driver-info-value">Toyota Innova Crysta</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="driver-info-box">
                    <div className="driver-info-label">LANGUAGE</div>
                    <div className="driver-info-value">Hindi, English, Kannada</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="driver-info-box">
                    <div className="driver-info-label">BASE CITY</div>
                    <div className="driver-info-value">Bangalore</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="driver-info-box">
                    <div className="driver-info-label">EXPERTISE</div>
                    <div className="driver-info-value">Night Driving, Hill Stations</div>
                  </div>
                </div>
              </div>
              
              <div className="quote-box">
                <div className="text-gray fst-italic">"Ensuring every traveler reaches their destination with a smile."</div>
                <div className="quote-icon">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0 text-center">
            <div className="app-mockup">
              <div className="d-flex justify-content-between align-items-center mb-3 text-primary">
                <span className="fw-bold small">AAVORide</span>
                <i className="bi bi-bell"></i>
              </div>
              <div className="bg-light rounded-4 w-100 mb-3 d-flex align-items-center justify-content-center text-primary" style={{height: '180px', backgroundColor: '#eef2ff !important'}}>
                <div className="small fw-bold">Live Map View</div>
              </div>
              <div className="d-flex justify-content-between mb-4 border-bottom pb-3">
                <span className="small fw-bold">Trip ID: #AAVO784</span>
                <span className="small text-primary">OTP: 4521</span>
              </div>
              <div className="bg-light rounded-3 w-100 mb-2" style={{height: '40px'}}></div>
              <div className="bg-light rounded-3 w-100 mb-2" style={{height: '40px'}}></div>
              
              <div className="floating-badge left">
                <div className="icon-circle">
                  <i className="bi bi-share"></i>
                </div>
                Live Link Shared
              </div>
              <div className="floating-badge right">
                <div className="icon-circle green">
                  <i className="bi bi-check2"></i>
                </div>
                Payment Success
              </div>
            </div>
          </div>
          <div className="col-md-6 px-4">
            <h2 className="fw-bold mb-3">Control Your Journey from Your Pocket</h2>
            <p className="text-gray mb-4" style={{lineHeight: '1.8'}}>
              Our cutting-edge app offers real-time tracking, SOS security features, and one-tap booking history. Share your live location with family for absolute peace of mind.
            </p>
            
            <div className="row mb-5">
              <div className="col-sm-6 mb-4 mb-sm-0">
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-circle" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Live Tracking</h6>
                    <p className="text-gray small mb-0">Precisely track your ride's ETA.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-circle" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">SOS Safety</h6>
                    <p className="text-gray small mb-0">Instant emergency assistance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex gap-3">
              <button className="btn btn-dark rounded-pill px-4 py-2 d-flex align-items-center gap-2">
                <i className="bi bi-google-play fs-4"></i>
                <div className="text-start">
                  <div style={{fontSize: '0.65rem', lineHeight: '1'}}>Get it on</div>
                  <div className="fw-bold" style={{lineHeight: '1'}}>Google Play</div>
                </div>
              </button>
              <button className="btn btn-dark rounded-pill px-4 py-2 d-flex align-items-center gap-2">
                <i className="bi bi-apple fs-4"></i>
                <div className="text-start">
                  <div style={{fontSize: '0.65rem', lineHeight: '1'}}>Download on the</div>
                  <div className="fw-bold" style={{lineHeight: '1'}}>App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 bg-light-pink rounded-4 px-4 my-5" style={{background: '#f9f9f9'}}>
        <h2 className="fw-bold text-center mb-5">Stories from Our Travelers</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="review-card">
              <div className="star-rating">★★★★★</div>
              <p className="review-text">"AAVORide has transformed my monthly Bangalore-Chennai trips. The cars are spotless, and the drivers are incredibly professional. Best outstation experience in India!"</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-secondary rounded-circle" style={{width:'45px', height:'45px'}}></div>
                <div>
                  <h6 className="fw-bold mb-0">Ananya Sharma</h6>
                  <small className="text-gray">Frequent Traveler</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review-card">
              <div className="star-rating">★★★★★</div>
              <p className="review-text">"Booking was seamless. I used them for a family trip to Ooty. The Innova was well-maintained and the driver knew the terrain perfectly. Highly recommended for families."</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-secondary rounded-circle" style={{width:'45px', height:'45px'}}></div>
                <div>
                  <h6 className="fw-bold mb-0">Vikram Malhotra</h6>
                  <small className="text-gray">Tech Executive</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review-card">
              <div className="star-rating">★★★★★</div>
              <p className="review-text">"Transparent pricing is the best part. I knew exactly what I was paying before the trip started. No haggling with the driver for tolls. Truly premium."</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-secondary rounded-circle" style={{width:'45px', height:'45px'}}></div>
                <div>
                  <h6 className="fw-bold mb-0">Priya Das</h6>
                  <small className="text-gray">Digital Nomad</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      <section className="container mt-4 mb-5">
        <div className="hero-container">
          <h1 className="hero-title">Ready to Travel Smarter?</h1>
          <p className="hero-subtitle">
            Join 50,000+ travelers who choose AAVORide for their executive outstation journeys. Book your first ride today and get ₹500 off.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <button className="btn btn-white">Book Your Ride Now</button>
            <span className="call-text">Or Call Us: 1800-AAVO-RIDE</span>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h2 className="text-primary fw-bold mb-3">AAVORide</h2>
              <p className="text-gray mb-4" style={{maxWidth: '280px'}}>
                Redefining outstation travel across India with safety, luxury, and transparency at its core.
              </p>
              <div className="d-flex">
                <a href="#" className="social-icon"><i className="bi bi-share-fill"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-globe"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-camera-video-fill"></i></a>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-4">Company</h6>
              <a href="#" className="footer-link">Partner with Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press Kit</a>
              <a href="#" className="footer-link">Luxury Fleet</a>
            </div>
            <div className="col-lg-2 col-6 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-4">Resources</h6>
              <a href="#" className="footer-link">Safety Protocol</a>
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Travel Blog</a>
              <a href="#" className="footer-link">Sitemap</a>
            </div>
            <div className="col-lg-4">
              <h6 className="fw-bold mb-4">Newsletter</h6>
              <p className="text-gray small mb-3">Get travel tips and exclusive luxury offers.</p>
              <div className="position-relative" style={{maxWidth: '300px'}}>
                <input type="email" className="form-control newsletter-input" placeholder="Your email" />
                <button className="newsletter-btn">
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="border-top pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-gray small mb-3 mb-md-0">© 2024 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.</p>
            <div className="d-flex gap-4">
              <a href="#" className="text-gray small text-decoration-none">Privacy Policy</a>
              <a href="#" className="text-gray small text-decoration-none">Terms of Service</a>
              <a href="#" className="text-gray small text-decoration-none">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
