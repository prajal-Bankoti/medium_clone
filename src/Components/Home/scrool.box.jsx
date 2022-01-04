import "./home_page.css";
import StarIcon from "@mui/icons-material/Star";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
export default function PermanentDrawerRight() {
  return (
    <>
      <div
        style={{
          borderTop: "0.1px solid rgba(204, 201, 201, 0.774)",
          marginTop: "50px",
        }}
      >
                 <div className="mid_box_news_right">
          <div
            style={{
              textAlign: "left",
              fontSize: "13px",
              fontWeight: "bold",
              color: "rgb(102, 99, 99)",
            }}
          >
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </div>
          <div className="button"> Self</div>
          <div className="button">Relationships</div>
          <div className="button">Data Science</div>
          <div className="button">Health</div>
          <div className="button">Productivity</div>
          <div className="button">Javascript</div>{" "}
          <div className="button">Machine Learning</div>
          <div className="button">Politics</div>
          <div className="button">Programming</div>
          <div
            style={{
              clear: "both",
              width: "100%",
              height: "30px",
              marginBottom:"15px",
              borderBottom: "0.5px solid rgba(209, 207, 207, 0.87)",
            }}
          ></div>
          <div className="button_about"> Help</div>
          <div className="button_about">Status</div>
          <div className="button_about">Blog</div>
          <div className="button_about">Careers</div>
          <div className="button_about">Privacy</div>
          <div className="button_about">Terms</div>
          <div className="button_about">About</div>
        </div>
        <div className="mid_box_news_left">
          {[
            "https://miro.medium.com/fit/c/270/181/0*OR_rD_SPiLtWj5cU",
            "https://miro.medium.com/fit/c/270/181/1*v67H4_u-bwmAGaj7a2lQMw.jpeg",
            "https://miro.medium.com/fit/c/270/181/1*Af95VLpodjQkyADaLTC1Lg.png",
            "https://miro.medium.com/fit/c/270/181/1*vMZqE-OGY4QumdwiZHpBJQ.jpeg",
            "https://miro.medium.com/fit/c/270/181/1*im94p8ZSlWLY_JoOS1AVIA.png",
            "https://miro.medium.com/fit/c/270/181/1*W6DKkB94myOFZRFSFzDi7w.png",
            "https://miro.medium.com/fit/c/270/181/1*YfEg6rANrUYe6MMJssPQXQ.png",
            "https://miro.medium.com/fit/c/270/181/0*OR_rD_SPiLtWj5cU",
            "https://miro.medium.com/fit/c/270/181/1*v67H4_u-bwmAGaj7a2lQMw.jpeg",
            "https://miro.medium.com/fit/c/270/181/1*Af95VLpodjQkyADaLTC1Lg.png",
            "https://miro.medium.com/fit/c/270/181/1*vMZqE-OGY4QumdwiZHpBJQ.jpeg",
            "https://miro.medium.com/fit/c/270/181/1*im94p8ZSlWLY_JoOS1AVIA.png",
            "https://miro.medium.com/fit/c/270/181/1*W6DKkB94myOFZRFSFzDi7w.png",
            "https://miro.medium.com/fit/c/270/181/1*YfEg6rANrUYe6MMJssPQXQ.png",
          ].map((e) => (
            <div className="blog_cart">
              <div className="blog_cart_left">
                <div className="blog_cart_1">
                  <img
                    src="https://miro.medium.com/fit/c/30/30/1*suDnvWWEvtqQCxA2NEHoRA.png"
                    alt=""
                  />
                  <div>James Michael Sama</div>
                </div>
                <div className="blog_cart_2">
                  10 Things Good Men Never Do In Relationships
                </div>
                <p>
                  I have a simple question for every ‘expert’ who thinks they
                  understand the root causes of the shipping crisis:.
                </p>
                <div id="blog_cart_3">
                  <span>Oct 27.</span> <span>6 min read.</span>{" "}
                  <span>Love</span>{" "}
                  <span>
                    <StarIcon style={{ fontSize: "11px", paddingTop: "5px" }} />
                  </span>
                  <span style={{ float: "right" }}>
                    <BookmarkAddOutlinedIcon
                      style={{ fontSize: "19px", marginRight: "15px" }}
                    />
                  </span>
                </div>
              </div>
              <img className="mid_box_news_right_photo" src={e} alt="" />
            </div>
          ))}
        </div>

 
      </div>
    </>
  );
}
