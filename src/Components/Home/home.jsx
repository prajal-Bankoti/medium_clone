import "./home_page.css";
import TimelineIcon from '@mui/icons-material/Timeline';
import { useState } from "react";
import ScrollDialog from "../Login/components/page";

export const HomePage = () => {
 
  const x= window.matchMedia("(max-width: 480px)")
  const [text ,setText]=useState(x.matches)
 // Call listener function at run time

 x.addListener(setText)
  return (
    <div>
      <div style={{ height: "68px", width: "100%" }}></div>
      <div className="mid_box">
        <div className="mid_box_l">
          {text?" write, read, and connect":"Medium is a place to write, read, and connect"}
   
        </div>
        <div>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </div>
        <div style={{width:"150px"}}><ScrollDialog value="Start Writing"/> </div>
      </div>
      <div className="card_mid_box">
          <div style={{textAlign:"left",marginBottom:"-29px",marginLeft:'39px'}}> <TimelineIcon style={{fontSize:"14px",marginRight:"10px"}}/><span style={{fontSize:"11px",fontWeight:600}}>TRENDING ON MEDIUM</span></div>
        <div className="mid_box_d">
          <div>01</div>
          <div>
            <div>
              <img
                src="https://miro.medium.com/fit/c/27/27/1*suDnvWWEvtqQCxA2NEHoRA.png"
                alt=""
              />
              <span>Ryan JOHNSON</span>
            </div>
            <div>
              I’m A Twenty Year Truck Driver, I Will Tell You Why America’s
              “Shipping Crisis”..
            </div>
            <div id="time">Oct 27.</div>
            <div id="read"> 10 min read</div>
          </div>
        </div>
        <div id="mid_box_d" className="mid_box_d">
          <div>02</div>
          <div>
            <div>
              <img
                src="https://miro.medium.com/fit/c/30/30/1*iODVVKJIKo4wOlnO8yO10Q.png"
                alt=""
              />
              <span>Ryan JOHNSON</span>
            </div>
            <div>
            3 Python Projects That Will Help Automate Your Life
            </div>
            <div id="time">Oct 27.</div>
            <div id="read"> 10 min read</div>
          </div>
        </div>
        <div className="mid_box_d">
          <div>03</div>
          <div>
            <div>
              <img
                src="https://miro.medium.com/fit/c/27/27/1*suDnvWWEvtqQCxA2NEHoRA.png"
                alt=""
              />
              <span>Ryan JOHNSON</span>
            </div>
            <div>
            SundaeSwap Labs Presents: The Scooper Model
            </div>
            <div id="time">Oct 27.</div>
            <div id="read"> 10 min read</div>
          </div>
        </div>
        <div className="mid_box_d">
          <div>04</div>
          <div>
            <div>
              <img
                src="https://miro.medium.com/fit/c/30/30/1*iODVVKJIKo4wOlnO8yO10Q.png"
                alt=""
              />
              <span>Ryan JOHNSON</span>
            </div>
            <div>
            Dodgers Holiday Festival starts Nov. 26 at Dodger Stadium
            </div>
            <div id="time">Oct 27.</div>
            <div id="read"> 10 min read</div>
          </div>
        </div>
        <div className="mid_box_d">
          <div>05</div>
          <div>
            <div>
              <img
                src="https://miro.medium.com/fit/c/27/27/1*suDnvWWEvtqQCxA2NEHoRA.png"
                alt=""
              />
              <span>Ryan JOHNSON</span>
            </div>
            <div>
              I’m A Twenty Year Truck Driver, I Will Tell You Why America’s
            </div>
            <div id="time">Oct 27.</div>
            <div id="read"> 10 min read</div>
          </div>
        </div>
        <div className="mid_box_d">
          <div>06</div>
          <div>
            <div>
              <img
                src="https://miro.medium.com/fit/c/27/27/1*8sy2fFc6Anumd2PscjsujQ@2x.png"
                alt=""
              />
              <span>Ryan JOHNSON</span>
            </div>
            <div>
            If You Want To Excel At Physics, Read These 20 Books
            </div>
            <div id="time">Oct 27.</div>
            <div id="read"> 10 min read</div>
          </div>
        </div>
      </div>
      <div style={{clear:"both"}}></div>
    </div>
  );
};
