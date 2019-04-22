import React, { Component } from "react";

import * as Scroll from "react-scroll";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll
} from "react-scroll";

import SkyLight from "react-skylight";

import LazyLoad from "react-lazyload";

import returnImg from "../img/return.png";
import { Link } from "react-router-dom";
// var popupStyle = {
//   // height: "64vh"
//   // marginTop: "-300px",
//   // marginLeft: "-35%"
// };
var days = [
  {
    day: "day_17",
    url: [1555956548],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_16",
    url: [1555956550, 1555956550, 1555956549],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_15",
    url: [
      1555956096,
      1555956061,
      1555956549,
      1555956549,
      1555956550,
      1555956549
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_14",
    url: [1555956004, 1555956680, 1555956020, 1555956010],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_13",
    url: [1555954124, 1555955530],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_12",
    url: [
      1555953977,
      1555953982,
      1555954016,
      1555954027,
      1555954438,
      1555955135,
      1555955057,
      1555955062
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_11",
    url: [
      1555953052,
      1555953068,
      1555953069,
      1555953127,
      1555953065,
      1555953125
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_9",
    url: [
      1555946936,
      1555946945,
      1555946944,
      1555946929,
      1555946944,
      1555946929
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_8",
    url: [
      1555943705,
      1555943859,
      1555943865,
      1555943864,
      1555943859,
      1555945433
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_7",
    url: [
      1555942536,
      1555921109,
      1555921078,
      1555921114,
      1555942748,
      1555917111
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_6",
    url: [1555919979, 1555920548, 1555920658],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_5",
    url: [1555919932, 1555919941, 1555919925],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_4",
    url: [
      1555918928,
      1555918950,
      1555919060,
      1555919088,
      1555919088,
      1555919114,
      1555919152,
      1555943843,
      1555943843
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],
    text:
      "ended up leaving 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning all my shit to ensure I got all of my deposit (food) money back. Also walked to ups to return my router. Left Baltimore around 545pm. Biked in the dark for awhile. Started thinking about the extremely high possibility of becoming a part of a YouTube video like “top ten people who mysteriously disappeared” or “ten pictures taken before a tragic death” and having a picture of me with like ten circles photoshopped onto it as a video thumb nail... ultra mega poopy. Anyways, I got a little past mt airy at like 1130pm and Katherine looked at my location and saw I was biking in the dark so she ducking drove out and picked me up 😂😂😂😂😂😂😂😂. Ended up sleeping at the Bukis instead of at fspace. Overall pretty poopy day."
  },
  {
    day: "day_3",
    url: [
      1555914310,
      1555915279,
      1555914402,
      1555915654,
      1555912748,
      1555914481,
      1555917111,
      1555917064,
      1555914828,
      1555914798,
      1555914859,
      1555914832,
      1555914864,
      1555914900,
      1555914894,
      1555917559,
      1555914947
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "my camp spot",
      "my camping site",
      "frostburg",
      "tunnel entrance",
      "wind",
      "PA",
      "munching on ramen",
      "big savage",
      "path",
      "continental divide",
      " meyersdale car show",
      "pose",
      "tree",
      "another bridge",
      "fog",
      "dinner",
      "sleep spot"
    ],
    location: " Mt Savage viewpoint to Ohiopyle",
    miles: 64,
    money: 25,
    text:
      "Fear has greatly subsided. Absolutely crushed my miles today. Crossed into PA. Found more tunnel entrances. Stopped at a car show in Meyersdale for a couple hours. Had the best subway sandwich of my life. Slept on a bench in Ohio Pyle then slept under it Bc I couldn’t balance in it. Had two insane dreams. One of them involved a 7 foot tall Elon musk inside fspace taking off his shirt and flexing his chest cavity (?). No longer as scared of naked crackheads."
  },
  {
    day: "day_2",
    date: "04/06/19",
    url: [
      1555912738,
      1555912703,
      1555912402,
      1555912420,
      1555912748,
      1555912594,
      1555912617,
      1555912640,
      1555912658
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "tent",
      "black gate of mordor",
      "nature",
      "bike",
      "chilling",
      "another milepost",
      "cumberland and two biker friends",
      "leaving cumberland",
      "spooky tunnel"
    ],
    location: "Indigo Neck Campground to Mt Savage viewpoint",
    miles: 58,
    money: 15,
    text:
      "woke up feeling good at 830, got 4.5 hours of sleep. Met the other campers at the site. They were cool. The terror from last night had subsided a bit. Biked on the rail trail a bit only to realize it was a dead end. Had to Ford a creek and to get back to the regular c&o trail. Stopped in paw paw for lunch. Nice town besides all the track marks and sunken eyes. Enjoyed my chicken tendies. Met a fellow gap year clown who was walking to California. She was pushing a stroller with googly eyes. Her name was jin or gin. The name of her cart thing was faith. Gotta look her up sometime Bc I said I would. Discovered that I like going on top of tunnel entrances. Elevation gang. Arrived to Cumberland around 7. Chilled in Wendy’s for an hour charging my gear. Ate a disgusting salad. Decided I wanted to try as many sodas as I can on this trip. It was getting dark around the time I left Cumberland. The trail was absolute shit. With the rain making everything soft and sand(?) on the trail, I couldn’t bike at all in the dark. Had to walk my bike for like 5 miles. Almost fell asleep while walking. Decided I would camp at the next open spot on the side of the trail. Found a viewpoint of mt savage and called it a night. "
  },
  {
    day: "day_1",
    date: "04/05/19",
    url: [
      1555910846,
      1555911105,
      1555910874,
      1555910175,
      1555874607,
      1555910079,
      1555912715
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "clearing a couple appalachian mountains",
      "idk",
      "mistake",
      "mudpit",
      "wrecked",
      "pitch black darkness",
      "hancock"
    ],
    location: "Frederick to Indigo Neck Campground",
    miles: 70,
    money: 10,
    text:
      "Woke up this morning at 0900. Shout out to Katherine for the amazing chocolate chip waffles. Went over to fspace (a makerspace/hackerspace/glorified Orion storage area) to move tables over to our new location on market. After that, I went over to the Frederick Fairgrounds to help out my boy Matt and his dad set up their booth for the upcoming gun show. I left Frederick at 1330. It rained the whole day. By the time I got to Williamsport I was soaked and tired after biking over a couple “mountains”. However I was optimistic, the c&o towpath was flat so I was looking forward to crushing the next 40 miles easy. I was wrong. I got fucked. When I got to the trailhead the entire direction in which I needed to go was under construction. There were detour signs but I wanted to save time so I just went around all the fences and walked straight through it. Upon clearing the construction site I was greeted by a huge mud pit, one that took me 30 minutes to trudge through. By the time I got through it was already getting dark. And so began the worst night of my life. I biked the next 40 miles in pitch black darkness. the little led flashlight Zoe had gifted me was stuck in a strobe light mode so I shoved it into my pocket. I went insane around 2100 and came back around 2200. Biking completely alone in a dark trail with 4000+ miles ahead of you is an interesting experience. Besides the crushing loneliness, the physical discomfort from the still pouring rain and the itching regret, I was expecting 5 naked hillbilly crackheads to jump out of the woods and destroy me at any moment. What a night. I stopped at a place called Hancock for water at midnight. met some nice rednecks who wanted to trade their car for my helmet. I said I voted for Obama and they ran away. Finished biking at 330am. Finally slept at 4am. I wanted to quit so bad but I knew I had to set the tone for myself for the rest of the trip so I’m glad I had a rainy, muddy, and shitty first day."
  },
  {
    day: "day_0",
    date: "04/04/19",
    url: [1555862544, 1555862544, 1555862774, 1555862675, 1555862778],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["regret", "departing my apt", "harbor", "cars", "break"],

    location: "Baltimore to Frederick",
    miles: 55,
    money: 6,
    text:
      "Departed 12 hours late today. Spent the morning commuting back to Baltimore after borrowing Elaine’s car to move my couch to Ron’s dorm at around 1am. Once I got back to my apt, I spent the rest of the day cleaning to ensure that my safety deposit (food money) would be returned in full. Left Baltimore around 545pm and decided I would be staying at fspace for the night. Met a couple bikers on my way out, one was a kind biker with red panniers. My doubts amplified as the sun set. Biked in the dark for a while. Just as I was leaving mt airy around 1130pm, Katherine looked at my location and saw I was biking in the dark so she came and picked me up 😂. Ended up sleeping at the Bukis instead of at fspace. "
  }
];
var content;

for (var day = 0; day < days.length; day++) {
  var organizer = 0;
  for (var i = 0; i < days[day].url.length; i++) {
    days[day].col[organizer].push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/q_auto:eco/v" +
        days[day].url[i] +
        "/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );
    days[day].popUrl.push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/" +
        "q_auto:eco,w_400,c_fill,ar_4:3/v" +
        days[day].url[i] +
        "/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );
    days[day].ogUrl.push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/v" +
        days[day].url[i] +
        "/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );

    if (organizer === 2) {
      organizer = 0;
    } else {
      organizer++;
    }
  }
}

class Vis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
      img: "x",
      caption: "x",
      link: "x",
      width: window.innerWidth,
      height: window.innerHeight,
      popupStyle: {}
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();

    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeights },
      this.updateStyle()
    );
  }

  updateStyle() {
    console.log(this.state.width);
    if (this.state.width < 460) {
      this.setState({
        popupStyle: {
          width: "80%",
          left: "50%",
          marginLeft: "-45%",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto"
        }
      });
    } else {
      this.setState({
        popupStyle: {
          width: "400px",
          left: "50%",
          marginLeft: "-216px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto"
        }
      });
    }
  }

  handleMenu(type) {
    this.setState({ filter: type });
    console.log(this.state);
  }
  handlePop(colNum, indexFull, index, dayIndex) {
    console.log("indexFull: ", indexFull);
    console.log("index: ", index);
    console.log("colNum: ", colNum);
    this.setState(
      {
        img: days[dayIndex].popUrl[indexFull],
        link: days[dayIndex].col[colNum][index],
        caption: days[dayIndex].captions[indexFull]
      },
      this.phoPop.show()
    );
  }
  render() {
    return (
      <div className="outerBikeDiv">
        <SkyLight
          closeButtonStyle={{ color: "#000" }}
          dialogStyles={this.state.popupStyle}
          hideOnOverlayClicked
          ref={ref => (this.phoPop = ref)}
        >
          <div className="popDiv">
            <div>
              <p className="absol">click to view raw img</p>
              <a href={this.state.link}>
                <img src={this.state.img} alt="photo" className="photoF" />
              </a>
              <p>
                <i>"{this.state.caption}"</i>
              </p>
            </div>
          </div>
        </SkyLight>

        <div className="returnDiv">
          <Link to="/" className="linkStyle">
            <img src={returnImg} alt="return" className="returnIcon" />
          </Link>
        </div>
        <br />

        <p className="center">
          <i>Baltimore, MD to Anchorage, AK</i>
        </p>
        <div className="center row bottomBord">
          {days.map(day => {
            return (
              <ScrollLink
                to={day.day}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <p className="center hover menuBike">[{day.day}]</p>
              </ScrollLink>
            );
          })}
        </div>
        {days.map((day, dayIndex) => {
          return (
            <Element name={day.day} className="dayDiv">
              <p className="center ">{day.day}</p>
              <div className="row center">
                <p className="menuBike">
                  {day.date} | {day.location} | {day.miles} miles | {day.money}{" "}
                  dollars spent
                </p>
              </div>
              <p className="center photoDiv smallFont">{day.text}</p>
              <div className="photoDiv">
                <div className="tri">
                  {day.col[0].map((address, index) => {
                    return (
                      <LazyLoad height={200} once>
                        <img
                          src={address}
                          alt="img"
                          onClick={() =>
                            this.handlePop(
                              0,
                              index + 2 * index,
                              index,
                              dayIndex
                            )
                          }
                          className="photo hover"
                        />
                      </LazyLoad>
                    );
                  })}
                </div>

                <div className="tri">
                  {day.col[1].map((address, index) => {
                    return (
                      <LazyLoad height={200} once>
                        <img
                          src={address}
                          alt="img"
                          className="photo hover"
                          onClick={() =>
                            this.handlePop(
                              1,
                              index + 1 + 2 * index,
                              index,
                              dayIndex
                            )
                          }
                        />
                      </LazyLoad>
                    );
                  })}
                </div>

                <div className="tri">
                  {day.col[2].map((address, index) => {
                    return (
                      <LazyLoad height={200} once>
                        <img
                          src={address}
                          alt="img"
                          className="photo hover"
                          onClick={() =>
                            this.handlePop(
                              2,
                              index + 2 + 2 * index,
                              index,
                              dayIndex
                            )
                          }
                        />
                      </LazyLoad>
                    );
                  })}
                </div>
              </div>
            </Element>
          );
        })}
      </div>
    );
  }
}
export default Vis;
