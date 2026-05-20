
export default function Home() {
    return (
        <>
            {/* HEADER */}
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

            {/* HERO SECTION */}

            <section
                className="position-relative"
                style={{
                    background: "#F6E4D7",
                    minHeight: "100vh"
                }}
            >
                <div className="container py-5">

                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}

                        <div className="col-lg-7">

                            <div
                                className="rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 mb-4"
                                style={{
                                    background: "#F3D7C5",
                                    color: "#b35b30",
                                    fontSize: "14px"
                                }}
                            >
                                ⚙ India's Most Trusted Outstation Network
                            </div>

                            <h1
                                className="fw-bold"
                                style={{
                                    fontSize: "72px",
                                    lineHeight: "1.1"
                                }}
                            >
                                India's Smarter
                                <br />

                                <span style={{ color: "#ff4d21" }}>
                                    Outstation
                                </span>{" "}
                                Cab
                                <br />
                                Platform.
                            </h1>

                            <p
                                className="mt-4"
                                style={{
                                    fontSize: "22px",
                                    maxWidth: "700px"
                                }}
                            >
                                Experience executive-grade travel with
                                AAVORide. Punctual arrivals,
                                verified luxury fleet and transparent
                                pricing for your intercity journeys.
                            </p>

                            <div className="d-flex gap-3 mt-5">

                                <button
                                    className="btn rounded-pill px-5 py-3 text-white"
                                    style={{
                                        background: "#ff4d21"
                                    }}
                                >
                                    Start Your Journey
                                </button>

                                <button
                                    className="btn bg-white rounded-pill px-5 py-3"
                                >
                                    Download App
                                </button>

                            </div>

                            <div className="d-flex align-items-center gap-3 mt-5">

                                <div className="d-flex">

                                    <img
                                        src="https://randomuser.me/api/portraits/men/1.jpg"
                                        className="rounded-circle border border-3 border-white"
                                        width="45"
                                    />

                                    <img
                                        src="https://randomuser.me/api/portraits/women/2.jpg"
                                        className="rounded-circle border border-3 border-white ms-n2"
                                        width="45"
                                    />

                                    <img
                                        src="https://randomuser.me/api/portraits/men/3.jpg"
                                        className="rounded-circle border border-3 border-white ms-n2"
                                        width="45"
                                    />

                                </div>

                                <span className="fw-semibold">
                                    ⭐ 4.9/5 Rating from
                                    50k+ Happy Travelers
                                </span>

                            </div>

                        </div>

                        {/* RIGHT CARD */}

                        <div className="col-lg-5">

                            <div
                                className="bg-white p-4 rounded-5 shadow-lg"
                            >

                                <h2 className="fw-bold mb-4">
                                    Plan Your Trip
                                </h2>

                                <div className="d-flex justify-content-around border-bottom mb-4">

                                    <div
                                        className="pb-2 fw-bold"
                                        style={{
                                            color: "#ff4d21",
                                            borderBottom:
                                                "3px solid #ff4d21"
                                        }}
                                    >
                                        One Way
                                    </div>

                                    <div
                                        className="pb-2 text-secondary"
                                    >
                                        Round Trip
                                    </div>

                                </div>

                                <input
                                    className="form-control mb-3 p-3"
                                    placeholder="Enter City or Airport"
                                />

                                <input
                                    className="form-control mb-3 p-3"
                                    placeholder="Where are you heading?"
                                />

                                <div className="row">

                                    <div className="col-6">
                                        <input
                                            type="date"
                                            className="form-control p-3"
                                        />
                                    </div>

                                    <div className="col-6">
                                        <input
                                            type="time"
                                            className="form-control p-3"
                                        />
                                    </div>

                                </div>

                                <select
                                    className="form-select p-3 mt-3"
                                >
                                    <option>
                                        1 Passenger
                                    </option>

                                    <option>
                                        2 Passenger
                                    </option>

                                </select>

                                <div className="row text-center mt-4">

                                    {[
                                        "Hatchback",
                                        "Sedan",
                                        "SUV",
                                        "Comfort Van"
                                    ].map((car) => (

                                        <div
                                            className="col-3"
                                            key={car}
                                        >
                                            <div className="border rounded p-2">

                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
                                                    width="50"
                                                />

                                            </div>

                                            <small>
                                                {car}
                                            </small>

                                        </div>

                                    ))}

                                </div>

                                <div
                                    className="border rounded p-3 mt-4 d-flex align-items-center justify-content-between"
                                >

                                    <div>

                                        <h6 className="fw-bold mb-0">
                                            Premium Sedan
                                        </h6>

                                        <small>
                                            Honda City or similar
                                        </small>

                                    </div>

                                    <h5
                                        style={{
                                            color: "#ff4d21"
                                        }}
                                    >
                                        ₹12/km
                                    </h5>

                                </div>

                                <button
                                    className="btn w-100 py-3 text-white rounded-pill mt-4"
                                    style={{
                                        background: "#ff4d21",
                                        fontSize: "20px"
                                    }}
                                >
                                    Search Cabs
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

                {/* Car image */}
                <img
                    src="/car.png"
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "28%",
                        width: "600px",
                        zIndex: 2
                    }}
                />

            </section>
        </>
    );
}