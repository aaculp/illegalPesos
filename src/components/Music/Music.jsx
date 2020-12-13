import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function MusicSlider() {
  return (
    <div style={{ textAlign: "center", width: "100%", paddingTop: '5em'}}>
      <span> Latest Mixes </span>
      <Carousel>
        <Carousel.Item>
          <iframe
            title="WTM Scoob World Tour Mafia Mix"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/827198962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Detour Outwest Mix"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/780050401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Toosii Platinum Heart Mix"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/779419846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Big Speaker Mix 2020"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743482729&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Chicago Mix Volume 3"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/656501687&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Chicago Mix Volume 2"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/567255762&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Chicago Mix"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511906158&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Illegal Summer Mix"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490168581&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Str8 Hits Never Miss Pesos"
            width="50%"
            height="150px"
            scrolling="no"
            frameBorder="no"
            pause="hover"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410314287&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
