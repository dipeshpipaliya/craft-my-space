import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";


export default function Home() {
  return (
    <>
      <div className="page-wraper">
        <Navbar />
        
        {/* <!-- slider start --> */}
        <div className="page-content">
          <div className="slider-section">
            <div className="slider-section">
              <div
                id="welcome_wrapper"
                className="rev_slider_wrapper fullscreen-container"
                data-alias="goodnews-header"
                data-source="gallery"
                style={{ background: "#eeeeee", padding: "0px" }}
              >
                <div
                  id="welcome"
                  className="rev_slider fullscreenbanner"
                  style={{ display: "none" }}
                  data-version="5.4.3.1"
                >
                  <ul>
                    {/* <!-- SLIDE 1 --> */}
                    <li
                      data-index="rs-901"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="/assets/pic/header1.webp"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide1.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-901-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-901-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          01
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                           Living
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span className="text-white">Conceptual Designs</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-901-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: 13, textTransform: "uppercase" }}
                      >
                        <a
                          href="javascript:;"
                          className="rev-slider-custom-btn"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                          }}
                        >
                          view The Projects
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-901-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="901-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img
                          src="/assets/pic/headersmall2.avif"
                          alt=""
                        />
                      </div>
                    </li>

                    {/* <!-- SLIDE 2 --> */}
                    <li
                      data-index="rs-902"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="/assets/pic/header2.webp"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide2.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-902-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-902-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          02
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Sma /ll title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                             Kitchens
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                          <span className="text-white">Stylish. Modified. Space.</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-902-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: 13, textTransform: "uppercase" }}
                      >
                        <a
                          href="javascript:;"
                          className="rev-slider-custom-btn"
                          style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                        view The Projects
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-902-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="902-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img
                          src="/assets/pic/headersmall.avif"
                          alt=""
                        />
                      </div>
                    </li>

                    {/* <!-- SLIDE 3 --> */}
                    <li
                      data-index="rs-903"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="/assets/pic/header3.webp"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide3.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-903-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-903-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          03
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                           Bedrooms
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                          <span className="text-white">Made-To-Measure Designs</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-903-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          textTransform: "uppercase",
                        }}
                      >
                        <a
                          href="javascript:;"
                          className="rev-slider-custom-btn"
                          style={{ fontFamily: " 'Oswald', sans-serif" }}
                        >
                         view The Projects
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-903-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="903-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img
                          src="/assets/pic/headersmall3.avif"
                          alt=""
                        />
                      </div>
                    </li>
                    
                  </ul>
                  <div
                    className="tp-bannertimer tp-bottom"
                    style={{
                      visibility: "hidden",
                    }}
                  ></div>
                </div>
              </div>

              <div className="slider-social-right">
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-facebook"></i>
                      </span>
                      facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-instagram"></i>
                      </span>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- SLIDER END --> */}

            {/* <!--SLIDER-SOCIAL-RIGHT START--> */}
            <div className="slider-social-right">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-facebook"></i>
                    </span>
                    facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-twitter"></i>
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-instagram"></i>
                    </span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--SLIDER-SOCIAL-RIGHT END--> */}
          </div>
        </div>

        {/* <!-- slider END --> */}
        <div
          className="bg-gray overflow-hide v-title-outer"
          style={{ padding: "100px 0px" }}
        >
          <div className="section-content">
            <div
              className="custom-block-outer clearfix bg-cover"
              style={{ backgroundImage: "url(images/background/video-bg.png)" }}
            >
            

              {/* <div className="custom-right-part "> */}
                <div className="custom-right-part-content">
                  {/* <div className="video-section-outer"> */}
                    <div className="section-head clearfix">
                      <div style={{textAlign:'center'}}>
                        <small className="wt-small-title">
                          [ Latest Projects ]
                        </small>
                        <h2 className="m-b5">Our Projects</h2>
                      </div>
                    </div>

                   

                    <div className="our-ability m-t50">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <div className="m-b30 text-black wt-icon-box-wraper center">
                            <h1 className="counter font-weight-800 m-b5 site-text-primary">
                              132
                            </h1>
                            <h4 className="wt-tilte m-b0">Five stars rating</h4>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                          <div className="m-b30 text-black wt-icon-box-wraper center">
                            <h1 className="counter font-weight-800 m-b5 site-text-primary">
                              206
                            </h1>
                            <h4 className="wt-tilte m-b0">Happy customer</h4>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                          <div className="m-b30 text-black wt-icon-box-wraper center">
                            <h1 className="counter font-weight-800 m-b5 site-text-primary">
                              336
                            </h1>
                            <h4 className="wt-tilte m-b0">Project Complete</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* [ our services ] start  */}
        <div className="section-full p-t80 p-b50 bg-white">
          <div className="container">
            <div className="row equal-wraper">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="section-head clearfix">
                  <div className="wt-tilte-main ">
                    <small className="wt-small-title">[ our services ]</small>
                    <h2 className="m-b5">Our Latest Services</h2>
                  </div>
                  <div>
                    <p>
                      Our latest services include customized solutions designed
                      to meet your unique needs, offering innovative and
                      high-quality options tailored to enhance functionality and
                      aesthetics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="">
                      <img src="/assets/pic/stratford.webp" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="" className=" m-t0">
                          Fitted Wardrobes
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Made-to-measure, customised to your choice, maximise
                        space in your bedroom. All the more reason to have
                        fitted wardrobes and make a statement. Fitted wardrobes
                        can very easily compliment the layout and the style of
                        your room, and are available in a variety of different
                        colours, ranging from different types of wood to more
                        mirrored finishes, giving your fitted wardrobe and your
                        room a more elegant feel.Stylemyspace will help you pick
                        out the perfect material for you, so all you have to do
                        is let us know how you want it to look..
                      </p>
                    </div>
                    <a href="" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="">
                      <img src="/assets/pic/ImageNewAdd5.avif" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="" className=" m-t0">
                          Fitted Kitchen
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Our kitchen range offers contemporary as well as
                        traditional layouts in popular finishes like acrylic
                        gloss, high gloss, exotic wood grains, or even the newly
                        introduced supermatt. Each of those finishes are applied
                        by advanced airtronic machinery that not only ensure
                        spotless edging but also an operating life running into
                        decades. Stylemyspace offers an exceptional choice of
                        appliances to go with your fitted kitchen. Finished in
                        high gloss to help evade the wear and tear that is
                        typical of kitchens, these appliances have lifespans of
                        multiple years.
                      </p>
                    </div>
                    <a href="" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12"></div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="">
                      <img src="/assets/pic/bespoke.jpg" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="" className=" m-t0">
                          Bespoke Furniture
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Bedrooms need to be a relaxing and personal sanctuary,
                        somewhere to feel comfortable. At Cosi Living, we can
                        create a bespoke bedroom based on your visions using our
                        German suppliers. Beauty space, beds and wardrobes, we
                        can make your dream personal space a reality.
                        Stylemyspace bespoke bedroom furniture range offers
                        diverse furniture designs in contemporary, classic and
                        traditional styles.
                      </p>
                    </div>
                    <a href="" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="">
                      <img src="/assets/pic/display.jpg" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="" className=" m-t0">
                          Awkward Spaces
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Temples, Studies, Home Office Furniture, Sliding Door
                        Wardrobes
                      </p>
                    </div>
                    <a href="" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* [ our services ] end  */}
        {/* STEP INSPIRED SOLUTION start  */}
        <div className="section-full p-t80 p-b50 bg-white">
          <div className="container">
            <div>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                OUR 4-STEP INSPIRED SOLUTION
              </h2>
            </div>
            <div
              className="section-content  "
              style={{ textAlign: "center", verticalAlign: "moddle" }}
            >
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>DISCUSS & PLAN</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>DESIGN & INNOVATE</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>MANUFACTURE & DELIVER</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>FINAL FITTING</p>
                      </div>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* STEP INSPIRED SOLUTION end  */}
        {/* Testimonial start  */}
        <div
          className="section-full p-tb80 testimonial-slider-outer bg-white bg-cover bg-left-center"
          style={{ backgroundImage: "url(images/background/bg-1.jpg)" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                <small className="wt-small-title">[ Client Testimonial ]</small>
                <h2 className="m-b5">Our Client gave us Feedback</h2>
              </div>
              <div className="title-right-detail">
                <p>
                  We are uncompetitor in architectural solutions Friendly
                  neighbour there that power. Keep away Architecture who try to
                  Ambitions people do that really great.
                </p>
              </div>
            </div>

            <div className="testimonial-slider">
              <div id="sync1" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            The services provided by the officials was smooth
                            and satisfactory. Products and goods delivered were
                            up to satisfaction and compared to market price.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">James Bond</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            Very attractive collection. We roamed and roamed but
                            we didn't find quality items. Finally we entered to
                            Durian. Really satisfied with quality and service.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">R K Varma</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            We purchased so many products from durian and we
                            would recommend Durian Furniture to everyone who
                            needs quality and decent looking furniture.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">
                            Haris Gulati
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            The office furniture is ergonomic in design, it is
                            very comfortable to use for long hours in office. Be
                            it design, comfort or the shopping experience, it
                            ticks all the boxes for us.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">Liam Noah</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="sync2"
                className="owl-carousel owl-theme testimonial-1-thumb center"
              >
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile.webp" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile.webp" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile.webp" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile.webp" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile.webp" alt="" />
                  </div>
                </div>
                {/* New Thumbnail for the new testimonial */}
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial end  */}
        {/* Why Choose start   */}
        <div className="section-full p-t80 p-b50 bg-gray">
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                <small className="wt-small-title">[ Why Choose Craft My Space]</small>
                <h2 className="m-b5">Why Craft My Space?</h2>
              </div>
              <div className="title-right-detail">
                <p>
                Choose Craft My Space for custom, high-quality furniture that fits your style and space. Our expert craftsmanship and attention to detail ensure durability and elegance, transforming any area into a functional and beautiful space.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="G">
                    Guaranteed Quality
                    </h4>
                    <p>
                    Guaranteed Quality" means we deliver durable, high-quality furniture crafted with the finest materials for lasting performance and beauty.                
                        </p>
                  
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-mansion v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="P">
                    Professional Manufacturing
                    </h4>
                    <p>
                    Professional Manufacturing guarantees precision and high-quality craftsmanship in every piece of furniture.
                    </p>
                    
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-stair v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="H">
                    High Quality Service
                    </h4>
                    <p>
                    High Quality Service ensures personalized attention and exceptional results, delivering furniture that exceeds expectations in both style .
                    </p>
                    
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-apartment v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="C">
                    Convenience of Choice
                    </h4>
                    <p>
                    Convenience of Choice offers a wide range of customizable furniture options, allowing you to select designs that perfectly fit your style and needs.
                    </p>
                  
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-photo v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="E">
                    Easy Delivery
                    </h4>
                    <p>
                    Easy and Timely Delivery ensures your furniture arrives quickly and safely, right to your doorstep with minimal hassle.
                    </p>
                   
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-sketch v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="M">
                    Made in Britain
                    </h4>
                    <p>
                    Made in Britain guarantees high-quality craftsmanship, using locally sourced materials and skilled artisans to create durable and stylish furniture.
                    </p>
                   
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-kitchen v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose end   */}

        {/* our blog start  */}
        <div
          className="section-full  p-t80 p-b80 bg-secondry"
          style={{ marginBottom: "100px" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white">
                <small className="wt-small-title">[ our blog ]</small>
                <h2 className="m-b5">Read Our Latest News</h2>
              </div>
              <div className="title-right-detail text-white">
                <p>
                Our blog offers expert insights, tips, and inspiration on furniture design, home decor, and space optimization. We share the latest trends, DIY ideas, and advice to help you create beautiful, functional spaces that reflect your personal style.
                </p>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="container-fluid">
              <div className="container">
                <div className="projects-slider-two">
                  <div
                    className="owl-carousel projects-carousel-two owl-btn-vertical-center col-12"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="item col-12 col-md-6 col-lg-4 mb-4">
                        <div className="projects-two-info text-white">
                          <h4 className="wt-tilte m-t0" data-title="01">
                            <a href="" className="text-white">
                            Custom Creations
                            </a>
                          </h4>
                          <p>
                          Discover how custom furniture can perfectly fit your space and elevate your home’s style.
                          </p>
                          <div className="wt-media img-reflection">
                            {/* <img src="assets/images/gallery/pic1.jpg" alt="" /> */}
                            <img src="/assets/pic/blog.png" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="item col-12 col-md-6 col-lg-4 mb-4">
                        <div className="projects-two-info text-white">
                          <h4 className="wt-tilte m-t0" data-title="02">
                            <a href="" className="text-white">
                            Space Solutions
                            </a>
                          </h4>
                          <p>
                          Turn awkward areas into functional, stylish spots with tailor-made furniture that maximizes every inch.
                          </p>
                          <div className="wt-media img-reflection">
                            {/* <img src="assets/images/gallery/pic2.jpg" alt="" /> */}
                            <img src="/assets/pic/blog2.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="item col-12 col-md-6 col-lg-4 mb-4">
                        <div className="projects-two-info text-white">
                          <h4 className="wt-tilte m-t0" data-title="03">
                            <a href="" className="text-white">
                            Trend Watch
                            </a>
                          </h4>
                          <p>
                          Stay updated on the latest furniture trends to refresh your space with modern and functional designs.
                          </p>
                          <div className="wt-media img-reflection">
                            {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                            <img src="/assets/pic/blog3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our blog end  */}

       <Footers />

        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
      {/* <!-- LOADING AREA START ===== --> */}
      {/* <div className="loading-area">
                <div className="loading-box"></div>
                <div className="loading-pic">
                    <div id="loadFacebookG">
                        <div id="blockG_1" className="facebook_blockG"></div>
                        <div id="blockG_2" className="facebook_blockG"></div>
                        <div id="blockG_3" className="facebook_blockG"></div>
                    </div>
                </div>
            </div> */}
      {/* <!-- LOADING AREA  END ====== -->  */}

      {/* <!-- JAVASCRIPT  FILES ========================================= -->  */}
    </>
  );
}
