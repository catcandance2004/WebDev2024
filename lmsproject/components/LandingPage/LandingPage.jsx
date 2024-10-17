import "./LandingPage.css";
import stats from "./images/stat.png";
import calendar from "./images/calendar.png";
import mail from "./images/email.png";
import online from "./images/Ellipse 4.png";

const LandingPage = () => {
  return (
    <>
      <div className="first-page">
        <div className="first-page-container">
          <h1>
            <span>Studying</span> Online is now much easier
          </h1>

          <div className="first-page-container-description">
            <p>
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>
          </div>

          <div className="first-page-button-tray">
            <button id="join-button">Join for free</button>
            <div className="work-button">
              <button></button>
              <p>Watch how it works</p>
            </div>
          </div>
        </div>

        <img src={stats} className="stat-icon" />

        <div id="card1">
          <img src={calendar} className="card-icon" />
          <div className="card-text-box">
            <h1>250k</h1>
            <p>Assited Student</p>
          </div>
        </div>

        <div id="card2">
          <img src={mail} className="card-icon" />
          <div className="card-text-box">
            <h1>Congratulations</h1>
            <p>Your admission completed</p>
          </div>
        </div>

        <div id="card3">
          <div className="card3-container">
            <div className="card-icon" id="avatar">
              <img src={online} />
            </div>
            <div className="card-text-box">
              <h1>User Experience class</h1>
              <p>Today at 12:00 PM</p>
            </div>
          </div>

          <button>Join Now</button>
        </div>
      </div>

      <div className="second-page"></div>
    </>
  );
};

export default LandingPage;
