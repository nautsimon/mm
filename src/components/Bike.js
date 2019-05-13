import React, { Component } from "react";
import Nav from "./Nav";
import * as Scroll from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import leg1 from "../img/leg1.png";
import comingSoon from "../img/comingSoon.png";
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
    day: "day_37",
    url: [1557651894, 1557651894, 1557651725, 1557703279],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["sky", "deported", "customs", "plane"],
    date: "04/23/19",
    location: "Baltimore Interlude",
    miles: 0,
    money: 17,
    text:
      "Woke up at 545. Connor, the mvp, drove me to the airport. I spent the whole day hopping between 4 different planes. Finally arrived to Baltimore at 1030. Zaz picked me up and I spent the night at his house. We watched some movies and it was super chill. Worked a bunch on this blog and preparing for the 15th event."
  },
  {
    day: "day_36",
    url: [1557651893, 1557651895],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["handle", "best ramen"],
    date: "04/23/19",
    location: "Weyburn to Regina",
    miles: 81,
    money: 9,
    text:
      "Woke up, ate breakfast, and then began biking. Stayed on 39 then 6. Very uneventful. Only took one break to drink a Powerade. Right around where I was supposed to start moving north an extremely strong west wind apparated and slowed me down significantly. As soon as I cleared the corner I started moving really fast. Got to Connors house. Flew my drone a bit in his house. He made some of the best ramen. I’m leaving my bike at his house for a couple of days while I go back to Frederick to work on Makerspace stuff."
  },
  {
    day: "day_35",
    url: [1557651895, 1557651896, 1557651897, 1557651889, 1557651890],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["break", "arriving", "partyvan", "blackbeards", "poutine"],
    date: "04/23/19",
    location: "Estevan to Weyburn",
    miles: 55,
    money: 0,
    text:
      "This morning Kolby the Poutine King took me out to breakfast for my first poutine. I got a huge breakfast Poutine. It was so good. Began a short 50 miles ride to Weyburn. First time using Kilos, got used to doing the conversion in my head. Was so tired bc of the huge poutine I ate, had to stop at a gas station to buy a red bull. Destroyed the rest of the miles after my drink. Arrived to Codies house. Hes a nationally ranked pro dirt bike racer and pretty rad. Drank a bunch, worked on some ghana stuff then went to sleep."
  },
  {
    day: "day_34",
    url: [
      1557651870,
      1557651870,
      1557651873,
      1557651877,
      1557651873,
      1557651881,
      1557651884,
      1557651888,
      1557651886,
      1557651893,
      1557651893,
      1557651882
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "road",
      "sky",
      "the road",
      "road",
      "sky",
      "cool",
      "cool",
      "cool",
      "this pissed me off",
      "oil",
      "the border",
      "waiting..."
    ],
    date: "05/08/19",
    location: "Minot to Estevan",
    miles: 121,
    money: 15,
    text:
      "Another long day. Started very late considering this was a 120 mile day. Biked through very nice scenery. Saw lots of cool hills and oil fields. Google Maps screwed me over and put me onto a bunch of gravel and farm roads. At one point I was literally just biking through a field. After that I just plotted my own route through ND. Arrived to the northern border at portal around 730pm. Got flagged bc of my upcoming flight. Got stuck at the border for 3 hours. They searched me and my bike. Of course they found allllll the contraband I was smuggling into Canada. The main agent was worried that I was a wandering homeless kid trying to die in the Canadian wilderness. They tried to contact my dad to verify that I knew what I was doing. He didn’t answer so they called zo. They asked her if I actually knew how far away Alaska was lol. Finally got out of the border center at 1030. Sprint biked to Estevan in the dark. Arrived to the house late, around 1200, but they were still awake. They were so cool and gave me tons of food. "
  },
  {
    day: "day_33",
    url: [1557651857],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["about that action"],
    date: "05/07/19",
    location: "Minot",
    miles: 0,
    money: 0,
    text:
      "Messed around with swords. Meant to work on scholarships but got super distracted by the intricate uchi ARG that was released that morning. Read part of some random book and made a huge spreadsheet in the process. At the end of the day Ryan googled uchicago and one of the game’s key words and the key for something that should’ve taken us a week or so to find showed up. Supposedly this online scav hunt/ARG took about two years to made and they didn’t even bother adding robots.txt in the root folder or obfuscating their content of their main website (which was supposed to be hidden). Anyways nothing like a day wasted. Ate pizza and sour patch kids. Also this was my first break day in 9 days so it was nice."
  },
  {
    day: "day_32",
    url: [
      1557651838,
      1557651849,
      1557651855,
      1557651853,
      1557651855,
      1557651858,
      1557651861,
      1557651863,
      1557651854
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "cold",
      "tree",
      "break",
      "velva",
      "flower",
      "velva",
      "v cool",
      "road",
      "sword fight"
    ],
    date: "05/06/19",
    location: "Fessenden to Minot",
    miles: 91,
    money: 3,
    text:
      "What a rough night. Temp dropped well below freezing. Started the night with just my sleeping pad Bc I was too lazy to break out the sleeping bag but that proved to be a big mistake. Got my sleeping bag and slipped in. Kept all my clothes and shoes on Bc I was so cold. Woke up at 545. Sat in the park sipping freezing cold oj until 630 (when a nearby gas station opened). Sat in the gas station for a good hour and a half eating doughnuts and drinking hot chocolate. After my regained feeling in my legs I hopped on my bike and grinded out 90 miles. Saw many many cows. Beautiful scenery everywhere. Many grain elevators. Didn’t take too much breaks except in velva which is 22 miles out from minot. I mixed the tuna that I got in valley city with the last bag of ramen that Maddie gave me back in Baltimore. It was actually really good. The dry ramen and chicken powder really complimented the wet tuna. As I was big munchin in the parking lot of an abandoned diner this woman came around the corner. She was definitely scared of me lmao and she turned around. Got to minot. some dude told me that I should be carrying a gun and said he could teach me how to kill anyone. I accepted his mentor ship offer but he said that he was busy. My host is a super cool history nerd. She used to do kendo and challenged me to a Sword battle. Big mistake. She didn’t know that I’ve been studying the blade for quite some time now. Banished her to the shadow realm. Her bf is literally Jeff from American dad, he’s also cool af too. Made a cad model keychain for the event on the 15th then went to bed."
  },
  {
    day: "day_31",
    url: [
      1557651825,
      1557651827,
      1557651828,
      1557651830,
      1557651833,
      1557651835,
      1557651841,
      1557651839,
      1557651841,
      1557651846,
      1557651834,
      1557651836
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "squad",
      "road",
      "snow",
      "water",
      "car",
      "cow",
      "break",
      "sand water",
      "damn",
      "damn",
      "very cool!",
      "OJ"
    ],
    date: "05/05/19",
    location: "Valley City to Fessenden",
    miles: 115,
    money: 3,
    text:
      "Long day today. Slept 5 hours and biked 120 miles in a strong ass headwind all day. Started off by eating two bowls of corn flakes. My hosts sent me off with a bag of tuna a carton of oj. Saw some snow and Urbana high school. Day started off easy, stunning avian wildlife, pretty water, good weather. But as soon as I hit the main highway my morale tanked. The loud cars, the strong wind, and the 100 miles in front of me was a bit discouraging. Took a quick break to get myself together. Lay down on a pile of sand on the side of the road and watched the cars pass by. Got back on my bike and killed the next 100 miles. Stopped in subway for dinner. My dummy self bought two bags of candy for lunch so it was good finally actually getting food in me belly. As the sun started to sent, I truly began to understand how beautiful this place is. Yeah nd is boring as hell but when you’re all alone on an empty highway at night it kinda grows on you. Got to Fessenden at 10. Bikes around trying to find bars. Nothing was open. Went to the Fessenden park and pushed two picnic tables together. Slept on the seats of the tables. It was coolllld. Also will from St. Cloud gave me these shoe covers that he used when motorcycling and they have saved my toes. No more numb toes, on baby. Also my legs are very strong now and I don’t get fatigued anymore. My knees are also better, but still hurt a bit when going uphill, shout out ibuprofen."
  },
  {
    day: "day_30",
    url: [1557651816, 1557651816, 1557651817],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["bike", "cow shelter", "cow shelter"],
    date: "05/04/19",
    location: "Fargo to Valley City",
    miles: 63,
    money: 6,
    text:
      "Struck conversation with a pregnant woman smoking cigarettes outside of a gas station. She was telling me how she needed to hold onto the baby for 22 days until the incarcerated father was freed. Then she started berating me about how I needed to watch my nutrition as I was eating a gas station burrito. Biked fast, north Dakota has cool birds. Found some cool stuff. Found a spongebob and a strangely surreal scene of a bus in the ground with a waiting for godot tree in the distance. Coming across this scene of a decapitated bus partially submerged in a prairie was one of the most beautiful things I’ve seen in a while. While it did remind me of the land of the lost, a will Ferrell movie I liked as a kid, it made me feel strangely content. Existence is absurd. Stimuli, (whether it be art, satire, or literature) that pushes one out of the characteristic incremental mentation that we use to get through each day to truly acknowledge the nonsensical reality of reality is much appreciated by myself. For as long as I can remember, I’ve been drawn to the ridiculous and surreal. So yeah low-resolution images of yoda tposing makes me laugh, but its deeper than that. Im just more woke than you and am experiencing reality on a higher plane of existence, amoebae. Anyways, I took that pic of me on the bus by propping up my camera on a old pile of cow poo. Got to valley city. Stayed with a nice older farming couple. Bought new glasses (my glasses broke way back in Milwaukee and ive been rocking glasses with just a single leg). They kept falling off my face and it was annoying. Responded to emails. Slept well. Also turns out that bus was just for cows."
  },
  {
    day: "day_29",
    url: [
      1557651812,
      1557651810,
      1557651813,
      1557651801,
      1557651801,
      1557651803,
      1557651804
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "alone",
      "water",
      "road",
      "lil homie",
      "rest",
      "my room",
      "bathroom"
    ],
    date: "05/03/19",
    location: "Alexandria to Fargo",
    miles: 112,
    money: 16,
    text:
      "Woke up at 7. Logan took me out to a really nice breakfast. I think the place was called the travel lodge or inn. Something of that sort. Headed out. Met a lil homie. Logan also set me up with a bunch of candy for the road so I was steady munching along the way. It rained pretty hard for awhile. Spaced out for like 2 hours and found myself at this gas station cafe. Ate two sandwiches. Started seeing more Tesoros a gas station that I only remember seeing in Alaska so the logo makes me a bit nostalgic. Logan set me up with a frat guy in Fargo. I never actually met the guy though Bc he was at a Future Farmers Association meeting in a different city. I pulled up to the frat house, which was called “the farm house” as it turns out this was a farming fraternity. The guys who Logan linked me up with had instructed me to go in from the back door and to the third floor, which was an unused room. It was wild Bc I felt so out of place as a non farming individual. Ate a gas station burrito for dinner. Slept well on a couch. Also almost got hit by a 18 wheeler."
  },
  {
    day: "day_28",
    url: [
      1557651791,
      1557651805,
      1557651805,
      1557651797,
      1557651794,
      1557651794,
      1557651795,
      1557651796
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "prep",
      "lil break",
      "path",
      "climb",
      "fix",
      "fix",
      "fix",
      "doggo"
    ],
    date: "05/02/19",
    location: "St Cloud to Alexandria",
    miles: 70,
    money: 12,
    text:
      "Started early. Will set me up with a huge stash of food. Climbed something for the first time in awhile. Met some other bikers, as usual they made fun of me for not using clips. Encountered a big huge bird posted up on the trail. A dog chased me for a good half a mile. Got to Alexandria. My host Logan is the real mvp. He was super chill and took me out to this classic pizza place in Alexandria. Trivia night was going on at the time. Then Logan and I went to his bike shop (shout-out jakes bikes) and they did a complete take down and turn up of my bike. My chain, rear brake, and cassette were all messed up and they replaced it, I got a free water bottle, pedals, light, the list goes on. Idk how I was planning on continuing my trip without having money to fix my bike, I’d probably end up begging for food or something. Thank you Jakes bikes for saving me."
  },
  {
    day: "day_27",
    url: [
      1557651793,
      1557651791,
      1557651799,
      1557651798,
      1557651786,
      1557651787,
      1557651788,
      1557651789,
      1557651789
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "thing",
      "flood",
      "bird",
      "sleep",
      "taco",
      "bike",
      "st cloud",
      "sprite",
      "burger"
    ],
    date: "05/01/19",
    location: "St Paul to St Cloud",
    miles: 66,
    money: 0,
    text:
      "Woke up super late. Ate three bowls of cereal and ended up leaving around 1030. Took a can of sprite with me for the trip. Pretty uneventful ride, lots of rain and toes went numb. Lots of flooding. Arrived to St. Cloud around 530. Met this guy Will. Super chill and funny dude. He took me out to this bar that had a Wednesday special for two tacos for 1$. I ordered 8 tacos. The place was full so Will just ran over to a table with two empty spots and sat down. The two other guys at the table were a bit off put at first but after a few minutes it turned to a pretty lively convo that lasted for like an hour. After consuming 8 tacos Will took me to another place that had another Wednesday special. 1/2 pound burgers for 2$. Consumed that with a bucket of tater tots. Will has done a bunch of motorcycle rides, including to Alaska so he had some cool stories. Worked on some scholarship apps then went to sleep."
  },
  {
    day: "day_26",
    url: [
      1557651777,
      1557651774,
      1557651782,
      1557651782,
      1557651777,
      1557651784,
      1557651790
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["road", "alaska?", "bike", "bike", "flood", "st paul", "sci"],
    date: "04/30/19",
    location: "Wabasha to St Paul",
    miles: 80,
    money: 3,
    text:
      "Woke up at 5am. Surprised that I survived. Got 5 hours of sleep. Headed out at 545. Tried to get a jump on the rain. Got like 25 miles done before it started. Went up a few mountains. Saw the first proper mountains in a long while. Got super wet. Clouds gave me the ultra super soaka wet wet. Didn’t matter tho. Map told me to go on this dirt road, but took the highway instead. Got to Minneapolis at 2. Chilled in a cafe until my host got home at 5. She said “cook whatever you want” and went to bed. I cooked up the whole fridge. Watched the new got episode. Want to update my blog-blog but I’m tired. Gotta apply for some loans for college too. "
  },
  {
    day: "day_25",
    url: [
      1557651751,
      1557651749,
      1557651751,
      1557651752,
      1557651754,
      1557651760,
      1557651768,
      1557651765,
      1557651765,
      1557651765,
      1557651764,
      1557651761
    ],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "rain in sparta",
      "farm",
      "mountain",
      "trail",
      "flood",
      "flood",
      "town",
      "grain",
      "flood",
      "minn",
      "hitchhike attempt",
      "zzz"
    ],
    date: "04/29/19",
    location: "Sparta to Wabasha",
    miles: 86,
    money: 7,
    text:
      "Finally getting a hang of this biking thing. Left knee still b*tches occasionally but I’ve started popping ibuprofen from the bottle jack gave me way back in Ohio. Don’t really need it tho. Started out at 8. Rained all morning. Went up a mountain. Peed on top of the mountain. Got real nice after lunch. The Mississippi wildin fr tho. A road I was supposed to cross was completely flooded (see pics). Went to a kwik stop. It’s so cheap. Met a woman who lives in Alaska. Gave her my blog address. Got near wabasha early. Saw a pizza box on the side of the road and tried to hitchhike and skip the rain tomorrow. Didn’t have any luck. It’s probably Bc my sign looks like it was created by someone with the motor skills of an infant. Anyways, hitchhiking is illegal in Minnesota so a cop pulled up. He ran My Id and let me go. Gonna have to get supa wet tomorrow. Climbed a mountain. Slept in this mansion place completely alone. Kinda creepy but survived. Talked to my family for the first time in a month. Slept at midnight with my knife in my hand."
  },
  {
    day: "day_24",
    url: [1557651731, 1557651734, 1557651732, 1557651734, 1557651735],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["departing", "closed trail", "wrecked", "jump", "crossing"],
    date: "04/28/19",
    location: "Madison to Sparta",
    miles: 69,
    money: 6,
    text:
      "Kate drove me out to some place up the road from Madison to give me a head start. It turned my 120 miles day to 60. Pretty sick. Went on a closed trail up to Elroy. So dumb. There were broken bridges and stuff. like I had to carry my bike numerous times. Once I got to Elroy I went to a bar and ate a blt. The bartender was pooping bricks Bc his race car driver crashed. Biked to Sparta. My hosts were this older couple. There had a full feast ready for me. I ate. Watched some Netflix show about Canadian hunters on Netflix with them. Slept in one the top ten beds I’ve ever slept in. it was so comfy."
  },
  {
    day: "day_23",
    url: [1557651731, 1557651729],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["cheese", "pizza"],
    date: "04/27/19",
    location: "Madison",
    miles: 0,
    money: 15,
    text:
      "Ate some cheese 🧀 CHEESE STATE 🧀. Went to the Madison farmer's market. snowed. Made pizza. Watched a bunch of movies with Kate. The departed is pretty good. "
  },
  {
    day: "day_22",
    url: [1557651734, 1557651739, 1557651743],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["pole", "community ride", "ride"],
    date: "04/26/19",
    location: "Madison",
    miles: 0,
    money: 8,
    text:
      "After some thought this morning, I decided to stay back in madison to wait out the incoming snow after Kate offered her couch for a few more days. Worked on my second leg plan, bought plane tickets, and went on a 'social ride' with the local bike team. Ate dinner with Kate and her friends. Good oriental takeout"
  },
  {
    day: "day_21",
    url: [1557651725, 1557651726, 1557651725, 1557651725],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["drone", "drone", "pooped", "madison"],
    date: "04/25/19",
    location: "Milwaukee to Madison",
    miles: 85,
    money: 0,
    text:
      "After some thought this morning, I decided to stay back in madison to wait out the incoming snow after Kate offered her couch for a few more days. Worked on my second leg plan, bought plane tickets, and went on a 'social ride' with the local bike team. Ate dinner with Kate and her friends. Good oriental takeout"
  },
  {
    day: "day_20",
    url: [1557651735],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["on the way back"],
    date: "04/24/19",
    location: "Milwaukee",
    miles: 0,
    money: 30,
    text:
      "Worked on some projects, looked around Milwaukee. Stopped by this really eccentric coffee shop. Took a bus to Chicago to pick up my deposit, took a bus back. Watched some tv with Ed and his daughter."
  },
  {
    day: "day_19",
    url: [1556126620, 1556120474, 1556126102, 1556126124, 1556126150],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["domes", "beer", "car", "bike", "bird"],
    date: "04/23/19",
    location: "Chicago to Milwaukee",
    miles: 0,
    money: 3,
    text:
      "This morning peter guided me out of Illinois to Wisconsin. He helped me maintain a much faster pace than I usually hold. Left late at 930. Ate in Zion with peter at some midwestern fast food chain called Culver’s (?). Stopped in a Wendy’s for an hour to charge my phone. Tried to take a Snapchat of these geodesic domes once in Wisconsin but it like shorted my phone and I had to charge my phone in a gas station in the hood to navigate the last three miles of my trip. Arrived to Ed’s house, Peters friend, at 830. He’s a nice professor. Gonna have to go back to Chicago to pick up my security deposit tomorrow."
  },
  {
    day: "day_18",
    url: [1556120446],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["Fixing up the bike"],
    date: "04/22/19",
    location: "Chicago",
    miles: 0,
    money: 6,
    text:
      "Worked on this site, picked up a package. My deposit never came so im kinda screwed. Cleaned and oiled up my bike. Went to this cool ice cream place."
  },
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
      "left the apt at 3. couldnt get my bike bc the security guard was ignorant. Carried my panniers to the blue line. got picked up by lily. shes cool. Ate dinner at peter's house. Drank some Bougie wine. It was a passover/easter dinner. Everyone was so cool. Had a little bonfire afterwards. Later that night I started working on this. Sifted through all my pics. Stayed up until 330am working on this damn site. Watched the new GOT episode, Inception, and The Prestige in the process. "
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
      "Woke up, worked on Rd Recicla. Almost done. Little 420 event in this bougie chicago apt. Walked around millennium park area. Roch a huge english skater man led the way. Celebrated. Skaters pulled up. ate cereal. Went back to the apt. Hung out. Two asian girls pulled up. Split an uber to go to the fashion showcase in east chicago. Pretty cool place. megan and i left early. Stopped and got some subway cookies. blue/redline back. drake and josh. case pulled up. they went to a show. watched spongebob w/meg. finished Rd Recicla. passed out after it worked on mobile."
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
      "Woke up not feeling strong. Realized I forgot to plan for today. there’s supposed to be a big rainstorm and snow from Cleveland to Toledo tomorrow which gave me two options: bike to Sandusky, camp, then brave the horrible weather the following day or just bike 120 miles to Toledo all in one day. After staring at some weather maps for half an hour I said f*ck it and chose the latter. I did hop on the red line rta to cle Bc f*ck you. Anyways started from cle. Felt tired Bc I kept waking up in the night plus I didn’t eat too much the previous night shoutout to Zoe for the chicken though. Biked route 6 along lake eerie. Lots of big ass houses. Stopped in Lorain for a god subway sub. Continued smashing miles until like 8 miles out from Huron. Ran over some sharp metal and got a flat. Spent two hours trying to fix it. Had to patch the tires. Repatched my tube at least three times before realizing that the little piece of metal had cut both sides of my tube. After fixing that I continued on my way. Had to pump up every mile or so Bc patches are weak. Fell asleep at some random Dairy Queen by mistake. Got to Huron. Had no clue of what to do. Still had 65+ miles to go and it was already 5. I’m paying for the cheapest data plan so I can’t like set routes or look for bike shops unless I’m on WiFi so I found some cafe and wasted half an hour trying to figure out what to do. Decided I was gonna bike to dicks in Sandusky to get a new tube. Biked to dicks. A bro helped me out. Bought a strong headlight. South Sandusky smells like butt. Stopped in a McDonald’s. Deposited a large load in their toilet.Then began my 62 mile ride to Toledo in the dark. I’ve never biked more than 85 miles before. I didn’t really train for this either but honestly it wasn’t that bad. I bumped music. Raced a train and won. Got 5$ pizza at Fremont. Called Jan, a paramedic I used to work with who introduced me to 5$ pizza. He actually was actually like a yard away from the dudes when a man get popped in the face at ummc. He’s a huge dad and bought me food and stuff in the struggle days. Thanked Jan. My headlight was jumpin with lumens. Saw tons of cats. Arrived to Toledo at 1."
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
    // this._executeAfterModalClose = this._executeAfterModalClose.bind(this);
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
    this.setState(
      {
        img: days[dayIndex].popUrl[indexFull],
        link: days[dayIndex].col[colNum][index],
        caption: days[dayIndex].captions[indexFull]
      },
      () => {
        this.phoPop.show();
      }
    );
  }
  // _executeAfterModalClose() {
  //   this.setState({ img: "x" });
  // }

  render() {
    return (
      <div className="outerBikeDiv">
        <Nav days={days} />
        <SkyLight
          afterClose={this._executeAfterModalClose}
          closeButtonStyle={{ color: "#000" }}
          dialogStyles={this.state.popupStyle}
          hideOnOverlayClicked
          ref={ref => (this.phoPop = ref)}
        >
          <div className="popDiv">
            <div>
              <p className="absol">click to view raw img</p>
              <a href={this.state.link}>
                <LazyLoadImage
                  alt={"img"}
                  src={this.state.img}
                  effect="blur"
                  className="photoF imgPH"
                />
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
        <p className="center bottomBord">
          <i>A Bike Trip to Alaska</i>
          <br />
          <i className="subtitle">Baltimore, MD to Anchorage, AK</i>
          <br />
          <br />
        </p>
        <div className="row bottomBord small">
          <div className="colStat">
            <p className="titleX">Stats</p>
            <p className="mediumSize">
              Total Miles: <i>≈ 4,500</i>
            </p>
            <p className="mediumSize">
              Miles Left: <i>≈ 2,100</i>
            </p>
            <p className="mediumSize">
              Time Elapsed: <i>35 days</i>
            </p>
            <p className="mediumSize">
              Start Date: <i>04/04/2019</i>
            </p>
            <p className="mediumSize">
              Target Completion Date: <i>06/22/2019</i>
            </p>

            <p className="mediumSize">
              Daily Avg: <i>81 miles</i>
            </p>
            <p className="mediumSize">
              Bike Model: <i>Fuji Touring</i>
            </p>
          </div>
          <div className="colBack rightText">
            <p className="titleX">Background/Cause</p>
            <p className="mediumSize">
              I was born and raised in Anchorage Alaska. When I was 15 my family
              packed up all of our belongings into a big uhaul and a van and
              drove down to Maryland. I drove for a portion of this trek, and
              while doing so I continuously noticed myself wanting to pull over
              and check out a mountain, a building, roadside attraction, etc. It
              was then when my idea to “Bike to Alaska” manifested. Initially a
              joke, I can remember telling friends about my “big plans”, of
              course no body believed me, even myself. However, when senior year
              drew to a close, I began investigating the options of doing a gap
              year. I felt as if this ethereal time between high school and
              college could be the perfect time, if not the only time, I could
              embark on such an adventure. So, when I was given an option to
              defer admission at the University of Chicago for a year and
              matriculate in the fall of 2019, I took it. <br /> <br />
              For the first 6 months of my gap year I lived alone in Baltimore
              as my parents and family moved to Tokyo last July. I worked as an
              EMT and a waiter in a Turkish restaurant (although I left my
              waiter job after a few months to just overtime at my EMT job) to
              pay bills, buy food, and most importantly, save for this bike
              ride. When April finally rolled around I sold all my furniture,
              packed my things, and hopped onto my bike. <br /> <br />
              Besides the personal sentimental reasons that this trip holds, I
              am also riding to raise money for a STEM education camp that my
              small non-profit is running with STEMBees (a Ghana based
              nonprofit) at the University of Ghana. While we have completed
              curriculum, secured a location and instructors and have robotics
              parts, we need funding to actually transport myself, another
              instructor and all of the parts to Accra Ghana. Any help is beyond
              greatly appreciated. To donate {""}
              <a
                className="linkK"
                href="https://www.gofundme.com/stem-education-for-ghanaian-students"
              >
                visit our go fund me.
              </a>
              Thank you!
            </p>
          </div>
          <br />
        </div>
        <div className="row bottomBord small">
          <div className="quad center">
            <p className="titleL">First leg</p>
            <i className="mediumSize">Baltimore - Chicago | 821 miles</i>
            <a href="https://youtu.be/7C-V3sWZqw0">
              <img src={leg1} alt="leg1" className="img hover" />
            </a>
          </div>
          <div className="quad center">
            <p className="titleL">Second leg</p>
            <i className="mediumSize">Chicago - Regina | 1,221 miles</i>
            <img src={comingSoon} alt="leg2" className="img hover" />
          </div>
          <div className="quad center">
            <p className="titleL">Third leg</p>
            <i className="mediumSize">Regina - Tok | 2,106 miles</i>
            <img src={comingSoon} alt="leg3" className="img hover" />
          </div>
          <div className="quad center">
            <p className="titleL">Fourth leg</p>
            <i className="mediumSize">Tok - Anchorage | 323 miles</i>
            <img src={comingSoon} alt="leg4" className="img hover" />
          </div>
        </div>
        <br /> <br /> <br />
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
                      // <LazyLoad height={200} once>
                      <LazyLoadImage
                        visibleByDefault
                        alt={"img"}
                        effect="black-and-white"
                        placeholderSrc={address}
                        className="photo hover"
                        src={address}
                        onClick={() =>
                          this.handlePop(0, index + 2 * index, index, dayIndex)
                        }
                      />

                      // </LazyLoad>
                    );
                  })}
                </div>

                <div className="tri">
                  {day.col[1].map((address, index) => {
                    return (
                      <LazyLoadImage
                        visibleByDefault
                        alt={"img"}
                        effect="black-and-white"
                        placeholderSrc={address}
                        className="photo hover"
                        src={address}
                        onClick={() =>
                          this.handlePop(
                            1,
                            index + 1 + 2 * index,
                            index,
                            dayIndex
                          )
                        }
                      />
                    );
                  })}
                </div>

                <div className="tri">
                  {day.col[2].map((address, index) => {
                    return (
                      <LazyLoadImage
                        visibleByDefault
                        alt={"img"}
                        effect="black-and-white"
                        placeholderSrc={address}
                        className="photo hover"
                        src={address}
                        onClick={() =>
                          this.handlePop(
                            2,
                            index + 2 + 2 * index,
                            index,
                            dayIndex
                          )
                        }
                      />
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
