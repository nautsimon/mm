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
    captions: ["bonfire"],
    date: "04/21/19",
    location: "Chicago",
    miles: 0,
    money: 3,
    text:
      "left the apt at 3. couldnt get my bike bc the security guard was ignorant. Carried my panniers to the blue line. got picked up by lily. shes cool, deciding between princeton and colorado college. Ate dinner at her house. Drank some Bougie wine. It was a passover/easter dinner. Everyone was so cool. Had a little bonfire afterwards. Later that night I started working on this. Sifted through all my pics. Stayed up until 330am working on this damn site. Watched the new GOT episode, Inception, and The Prestige in the process. "
  },
  {
    day: "day_16",
    url: [1555956550, 1555956550, 1555956549],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["up in da apt", "420", "statue"],
    date: "04/20/19",
    location: "Chicago",
    miles: 0,
    money: 17,
    text:
      "Woke up, worked on Rd Recicla. Almost done. Little 420 event in this bougie chicago apt. Walked around millennium park area. Roch a huge english skater man led the way. Celebrated. Skaters pulled up. Danced. ate cereal. Went back to the apt. Hung out. Two asian girls pulled up. Split an uber to go to the fashion showcase in east chicago. Pretty cool place. megan and i left early. Stopped and got some subway cookies. blue/redline back. drake and josh. case pulled up. they went to a show. watched spongebob w/meg. finished Rd Recicla. passed out after it worked on mobile."
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
    captions: [
      "quadrangles",
      "hot",
      "talent",
      "singing",
      "punk rock",
      "megan's chinese food"
    ],
    date: "04/19/19",
    location: "Chicago",
    miles: 0,
    money: 12,
    text:
      "Ate in Cathy. Saw Lucy from the Alaska Middle school days. Wild. Bought a shirt with some ghostbuster goons. Walked around campus with some ghostbusters. Stopped by the Oriental museum. Went back to inner Chicago with the Metra. Went to a fashion show rehearsal with megan. Went to the actual fashion show with megan. Megan performed. Absolutely killed it. Talented. Went to get some food afterwards with her, case, and hannah. Went to Harry's. Watched spongebob with megan. Geeked. Tried Dill Chips. Pretty good. Megan resolved a long time polygon related issue."
  },
  {
    day: "day_14",
    url: [1555956004, 1555956680, 1555956020, 1555956010],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    date: "04/18/19",
    location: "Chicago",
    miles: 0,
    money: 0,
    captions: [
      "ghost busters",
      "another group photo",
      "growth spurt/i love ibra",
      "growth spurt/i love ibra"
    ],
    text:
      "First night of the UChicago overnight. Sat in on a cs security class. Took a tour of the physics building. Hung out. My host showed me the cs building and a few Astrophysics labs. I am ecstatic and beyond excited to start school. Played smash. Went to a root beer float party in max p. Went to a hitchcock house meeting, it was bizarre to say the least. Jayson and I dipped. Hung out in south for a bit. Stopped by a frat party. Went to a boba party. Ate homemade pretzels and cheese. Slept at midnight. So excited to start school. "
  },
  {
    day: "day_13",
    url: [1555954124, 1555955530],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    date: "04/17/19",
    location: "South Bend to Chicago",
    miles: 0,
    money: 0,
    captions: ["bean", "bean gang"],
    text:
      "Took the ssl into Chicago. Worked 8 hours straight in a cafe answering emails, cooking up some footage and working on rd recicla. Still got tons responsibilities on this trip. Smh. Linked up with Megan. Ate some good ass burgers. Walked around. Started my YouTube vlogging career. Acted like a fool. Saw like 20 bike police try to break up a big fight. We almost got murked by some geese. Made ice cream cookie sandwich’s. Pulled up to this kid Harry’s bday. Hype to meet uchicago homies tomorrow."
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
    date: "04/16/19",
    location: "Angola to South Bend",
    miles: 75,
    money: 15,
    captions: [
      "road",
      "pig",
      "friend",
      "goodbye",
      "damn",
      "damn",
      "dinner",
      "sleep"
    ],
    text:
      "woke up at 8. My hosts had spread out a feast of bagels doughnuts and muffins. I ate. Left at 9. Went through a lot of yeehaw country. Country music hits different in the country. (Re?)discovered mean by Taylor Swift. Bumped that. Met a bunch of Amish people. Amish people are the nicest people ever. Stopped at this place called blue gate bakery. Had the best doughnut of all time. It had this glaze nicknamed Amish crack. Good stuff. Finally got around to adjusting my seat. Lifted it up like two inches and my knees instantly stopped bitching as hard as they usually do. i really messed around an injured myself Bc I procrastinated lifting up my seat. Smh. Met a feline homie on a trail. We became close friends. Felt bad when I just left him. Sorry bro, gotta get to Alaska. Ate a good as Argentinian sandwich for dinner. Sleeping in the south bend airport tonight."
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
    date: "04/15/19",
    location: "Toledo to Angola",
    miles: 81,
    money: 0,
    captions: ["trees", "power", "corn", "rest", "my house", "posted up"],
    text:
      "stayed in two houses. My first host was the coolest mf ever. First of all when I told him I was rolling up at 1am he was just like “ok I’ll leave the front door unlocked”. I pulled up to his house last night at 1am and opened the door and it was like a ligit mueseum. Mans like traveled everywhere and has like artifacts literally everywhere. Bro let me hit his didgeridoo. He has all these cool ass paintings on the walls and in the vents too. In his bedroom he has the Michelangelo creation of Adam on the ceiling and these hand sculptures on the window seals. He also had this self sustaining garden with snails and fish that somehow contribute through their poop and stuff. It was wild. When I woke up he walked outside and got fresh eggs from his hens. He spent awhile today singing and recording music. He played some music of his own creation, see final slide. Man is a living legend. At 5 I did a slow rollover to Toledo university, where I’m at rn. Jack, the guy I’m staying with, is a senior at toledo uni and the raddest man alive. Jack is A botanist of sorts (of the fungi variety), a rock climber and an intelligent physics major. Dudes even interned a cern. What a god. Made some pasta, jack made good sauce. Got my trail mix reserve refilled. My knees hurt."
  },
  {
    day: "day_10",
    url: [1555947846, 1555947988, 1555947838, 1555954579],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    date: "04/14/19",
    location: "Toledo",
    miles: 0,
    money: 0,
    captions: ["yo lemmie hit that", "art", "cooking up with Jack"],
    text:
      "stayed in two houses. My first host was the coolest mf ever. First of all when I told him I was rolling up at 1am he was just like “ok I’ll leave the front door unlocked”. I pulled up to his house last night at 1am and opened the door and it was like a ligit museum. Dude had all the artifacts and souvenirs from his may travels spread throughout his house. Bro let me hit his didgeridoo. He has all these cool ass paintings on the walls and in the vents too. In his bedroom he has the Michelangelo creation of Adam on the ceiling and these hand sculptures on the window seals. He also had this self sustaining garden with snails and fish that somehow contribute through their poop and stuff. It was wild. When I woke up he walked outside and got fresh eggs from his hens. He spent awhile today singing and recording music. He played some music of his own creation. Man is a living legend. At 5 I did a slow rollover to Toledo university, where I’m at rn. Jack, the guy I’m staying with, is a senior at toledo uni and the raddest man alive. Jack is A botanist of sorts (of the fungi variety), a rock climber and an intelligent physics major. Dudes even interned a cern. What a god. Made some pasta, jack made good sauce. Got my trail mix reserve refilled. My knees hurt."
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
    date: "04/13/19",
    location: "Case Western Reserve University to Toledo",
    miles: 120,
    money: 40,
    captions: [
      "CLE",
      "flat",
      "shoddy patching job",
      "barn",
      "yes",
      "MLK bridge @ Toledo"
    ],
    text:
      "Woke up not feeling strong. Realized I forgot to plan for today. there’s supposed to be a big rainstorm and snow from Cleveland to Toledo tomorrow which gave me two options: bike to Sandusky, camp, then brave the horrible weather the following day or just bike 120 miles to Toledo all in one day. After staring at some weather maps for half an hour I said f*ck it and chose the latter. I did hop on the red line rta to cle Bc f*ck you. Anyways started from cle. Felt tired Bc I kept waking up in the night plus I didn’t eat too much the previous night shoutout to Zoe for the chicken though. Biked route 6 along lake eerie. Lots of big ass houses. Stopped in Lorain for a god subway sub. Continued smashing miles until like 8 miles out from Huron. Ran over some sharp metal and got a flat. Spent two hours trying to fix it. Bernie, the bike homie who hooked me up with my extra inner tubes gave me ones that were too big. Was definitely feeling the bern. Had to patch the tires. Repatched my tube at least three times before realizing that the little piece of metal had cut both sides of my tube. After fixing that I continued on my way. Had to pump up every mile or so Bc patches are weak. Fell asleep at some random Dairy Queen by mistake. Got to Huron. Had no clue of what to do. Still had 65+ miles to go and it was already 5. I’m paying for the cheapest data plan so I can’t like set routes or look for bike shops unless I’m on WiFi so I found some cafe and wasted half an hour trying to figure out what to do. Decided I was gonna bike to dicks in Sandusky to get a new tube. Biked to dicks. A bro helped me out. Bought a strong headlight. South Sandusky smells like butt. Stopped in a McDonald’s. Deposited a large load in their toilet.Then began my 62 mile ride to Toledo in the dark. I’ve never biked more than 85 miles before. I didn’t really train for this either but honestly it wasn’t that bad. I bumped music. Raced a train and won. Got 5$ pizza at Fremont. Called Jan, a paramedic I used to work with who introduced me to 5$ pizza. He actually was actually like a yard away from the dudes when a man get popped in the face at ummc. He’s a huge dad and bought me food and stuff in the struggle days. Thanked Jan. My headlight was jumpin with lumens. Saw tons of cats. Arrived to Toledo at 1."
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
    date: "04/12/19",
    location: "Youngstown to Case Western Reserve University",
    miles: 69,
    money: 2,
    captions: [
      "BAIL BONDS",
      "farmin ft clouds coming in",
      "lunch",
      "??",
      "bridge",
      "nature walk"
    ],
    text:
      "left joys house at 730. She made me a bomb breakfast and even packed me a lunch. Thank you mommy. Saw the clouds coming in all morning. Got mega dripped on and got soaked. Saw lots of Amish people. Ate joys lunch under a Walgreens overhang. Started biking again but thunder and lighting started coming down so I chilled in a McDonald’s for two hours to wait out the rain. Had the saddest 1$ hamburger. Met this woman in the McDonald’s that was trying to solve a Rubik’s cube. I told her that there are algorithms that smart people figured out for the cube. She insisted that because she had figured out sudoku herself that she could solve a cube by herself. Good luck McDonald’s lady. Biked the rest of the way to case at 2. Encountered lots of hills. Will the pizza guy from yesterday said that Ohio was flat. The only thing flat about today was the Fanta I had at McDonald’s. Got to case. Engaged in some dummy behavior. Met some cool dudes. Went on a nature walk."
  },
  {
    day: "day_7",
    url: [
      1555942536,
      1555921109,
      1555921078,
      1555921114,
      1555942748,
      1555917111,
      1555963201
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],

    date: "04/11/19",
    location: "Pittsburgh to Youngstown",
    miles: 81,
    money: 2.39,
    captions: [
      "on the road",
      "abandoned",
      "the rusty staircase",
      "cleared the staircase",
      "trail in ohio",
      "youngstown cemetary",
      "Will"
    ],
    text:
      "Left Wyatt’s house at 8. Almost perished Bc I was biking on a skinny path next to the road and my left pannier bumped into a telephone phone that sent me into oncoming traffic. Car swerved barely missing me, smh. Got to this bridge but it was closed so I had to take a 5 mile detour up a mountain. Google maps bike trail api or whatever wrecked me as well and took me to a highway with no side room for me to bike. Had to walk two miles on the other side of the impact barrier. So many bushes and trash. Got to this rusty staircase that went down to train tracks and a road. Was done with walking so I moved my bike on the staircase. I had to stand on the impact barrier and lift my bike over the rail as shown on pic two. Then I had to push through all the branches and stuff on the stairs while carrying my bike and stuff. Once I cleared that I felt invincible. Crushed the rest of the trip. Met a nice guy named will who bought me a pizza. Love you will. Secured pizza box with my jacket and finished it in Youngstown. Staying in joys house. She’s a nice mom and professor. Saw lots road kill at least."
  },
  {
    day: "day_6",
    url: [1555919979, 1555920548, 1555920658],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    date: "04/10/19",
    location: "Pittsburgh",
    miles: 0,
    money: 5,
    captions: ["upitt", "the triangle", "flex"],

    text:
      "Explored, rested, worked on rd recicla, payed 150$ worth of speeding tickets, learned adobe pro, made new friends, showered, relaxed, and healed my ass. "
  },
  {
    day: "day_5",
    url: [1555919932, 1555919941, 1555919925],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    date: "04/09/19",
    location: "Pittsburgh",
    miles: 0,
    money: 0,
    captions: ["@luisorlouie", "alley", "getting my bike oiled up"],
    text:
      "Explored and went out to dinner with wyatt and his friends. Went down to the Triangle and saw lots of cool stuff. "
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
    captions: [
      "break",
      "pretty",
      "bridhe",
      "red",
      "bike",
      "white",
      "train",
      "friend",
      "back"
    ],
    date: "04/08/19",
    location: " Ohiopyle to Pittsburgh",
    miles: 75,
    money: 50,
    text:
      "Biked to Pittsburgh, went fast so I would arrive early. Had another godly subway sandwich. Tried taking a shortcut through an abandoned building in Pittsburgh and a cop rolled up out of no where and told me it was private property. Took my first shower in 5 days. My ass is ruined. My legs are super sore and the ligaments under my knee hurt so bad. Anyways, my ass. In the shower chunks of skin were peeling off. It’s literally like a huge exposed blister with a big bruise underneath. Gonna stay awhile to heal. That’s what I get for literally doing no training 🤡. Bought a lot of pizza and played smash with Wyatt, the couchsurfing host/upitt student and his roommates and friends. Good time. "
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
    date: "04/07/19",
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
    date: "04/05/19",
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
              <div className="outerBikeDiv">
                <p className="center  smallFont">{day.text}</p>
              </div>
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
