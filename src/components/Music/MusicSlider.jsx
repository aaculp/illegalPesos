import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const sliderData = [
    {
        id: 1,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/827198962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "WTM Scoob World Tour Mafia Mix"
    },
    {
        id: 2,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/780050401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Detour Outwest Mix"
    },
    {
        id: 3,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/779419846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Toosii Platinum Heart Mix"
    },
    {
        id: 4,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743482729&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Big Speaker Mix 2020"
    },
    {
        id: 5,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/656501687&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Chicago Mix Volume 3"
    },
    {
        id: 6,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/567255762&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Chicago Mix Volume 2"
    },
    {
        id: 7,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511906158&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Chicago Mix"
    },
    {
        id: 8,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490168581&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Illegal Summer Mix"
    },
    {
        id: 9,
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410314287&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        title: "Str8 Hits Never Miss Pesos"
    },
];

const MusicSlider = ({ id }) => {
    const [currentSlide, setCurrent] = useState(0);
    const [cssStyling, setCss] = useState("")
    const length = sliderData.length;

    useEffect(() => {
        setCss(id)
    },);

    const slider = sliderData.map((data, index) => (
      (index === currentSlide && ( <iframe key={data.id} src={data.src} className={index === currentSlide ? 'slide active' : 'slide'} title={data.title} /> ))
    ));

    const nextSlide = () => {
        setCurrent(currentSlide === length - 1 ? 0 : currentSlide + 1);
        console.log(currentSlide);
    };

    const prevSlide = () => {
        setCurrent(currentSlide === 0 ? length - 1 : currentSlide - 1);
        console.log(currentSlide);
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <div className="sliderContainer" id={cssStyling}>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            {slider}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
    );
};

export default MusicSlider;
