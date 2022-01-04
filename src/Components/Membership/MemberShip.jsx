import React from "react";
import "./MemberShip.css";

const Membership = () => {
  return (
    <>
      <div className="member">
        <div className="m-first">
          <h1>
            <span>Fuel great thinking.</span>
          </h1>
          <p>
            <span className="fs-5">
              Upgrade to membership for $5/month or $50/year.
            </span>
          </p>
          <button className="m-first-button"> Subscribe today</button>
        </div>
        {/* second div  */}
        <div className="m-second">
          <div className="m-second-mid">
            <div className="m-second-1">
              <h1>
                <span>Get unlimited access to every story</span>
              </h1>
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
                alt=""
              />
              <p>
                Read any article in our entire library across all your devices —
                with no paywalls, story limits or ads.
              </p>
            </div>
            <div className="m-second-2">
              <h1>
                <span>Support the voices you want to hear more from.</span>
              </h1>
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
                alt=""
              />
              <p>
                A portion of your membership will directly support the writers
                and thinkers you read the most.
              </p>
            </div>
          </div>
        </div>
        {/* third div */}

        <div className="m-third">
          <h1>
            <span>Why I'm a Medium Member...</span>
          </h1>
          <div
            className="black-box-one-right"
            style={{
              width: "40%",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "60% 70%",
            }}
          >
            <div className="black-box-one-right-image">
              <div>
                <img
                  src="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Bina-1.png"
                  alt="asdf"
                />
              </div>
              <div className="black-box-one-right-image-two"></div>
              <div className="black-box-one-right-image-three"></div>
            </div>
            <div
              className="black-box-one-right-content"
              style={{
                color: "black",
                marginLeft: "-40%",
                textAlign: "justify",
              }}
            >
              “There’s no ther place that combines such an excellent level of
              writing with a truly engaged and active community. Medium is truly
              where ideas are born, shared and spread.”
              <br />
              <br/>
              -Jasmine Alladin
            </div>
          </div>
        </div>
        {/* forth-div */}
        <div className="m-four">
          <h1>
            <span>
              Take your mind <br />
              in new directions.
            </span>
          </h1>
          <button>Become a member</button>
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <div className="footeMember">
        <span className="ms-2">
          <u>About</u>
        </span>
        <span className="mx-3">
          <u>Terms</u>
        </span>
        <span>
          <u>Privacy</u>
        </span>
        <span className="mx-3">
          <u>Help</u>
        </span>
      </div>
    </>
  );
};

export { Membership };
