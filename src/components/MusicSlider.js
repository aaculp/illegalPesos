import React from "react";
import Carousel from "react-bootstrap/Carousel";

const styles = {
  color: "red",
  textDecoration: "none",
};

const divStyle = {
  fontSize: "15px",
  color: "ccc",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontFamily:
    "Interstate, Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
  fontWeight: "100",
};

export default function MusicSlider() {
  return (
    <div style={{ textAlign: "center" }}>
      <span> Latest Mixes </span>
      <Carousel>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="yes"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/827198962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/780050401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/779419846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743482729&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/656501687&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/567255762&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511906158&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490168581&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="50%"
            height="150px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410314287&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
