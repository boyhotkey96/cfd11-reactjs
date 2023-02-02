import React from "react";
import Flickity from "react-flickity-component";
import "./style.scss";

const flickityOptions = {
  initialIndex: 0, // index default
  draggable: true, // dragging active
  freeScroll: true, // scrolling whithout to an end position.
  contain: true,
  wrapAround: true, // infinite scrolling.
  prevNextButtons: false, // show button prev & next
  pageDots: true, // show dots
  autoPlay: 3000, // time auto play
  lazyLoad: true,
  // adaptiveHeight: true,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={true} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img
        className="slider-team__image"
        src="/img/team/img_team1.png"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team2.png"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team3.png"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team4.png"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team5.jpg"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team6.jpg"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team7.jpg"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team8.jpg"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team9.jpg"
        alt="team-image"
      />
      <img
        className="slider-team__image"
        src="/img/team/img_team10.jpg"
        alt="team-image"
      />
    </Flickity>
  );
}

function TeamSection() {
  return (
    <section className="section-gallery">
      <div className="textbox">
        <h2 className="main-title">Chúng ta là một team</h2>
      </div>
      <Carousel />
    </section>
  );
}

export default TeamSection;
