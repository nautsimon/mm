import React, { Component } from "react";
import Nav from "./Nav";
import * as Scroll from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import leg1 from "../img/leg1.png";
import leg2 from "../img/leg2.png";
import comingSoon from "../img/comingSoon.png";
import gofund from "../img/gofund.PNG";
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
    day: "day_69",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "cool",
      "where it all started",
      "climbing",
      "border",
      "rain",
      "drone",
      "hot mountains",
      "bridge",
      "had to do it to em",
      "sleeping in a bus",
      "international border"
    ],
    date: "06/12/19",
    location: "Beaver Creek to Tok",
    miles: 118,
    money: 24,
    text:
      "Woke up at 4am to a wet feeling on my leg. Opened my eyes are realized it was pouring. Moved to the lodge under an overhang and just sat there with my eyes closed until 7 when buckshot betty’s reopened. I hung up my sleeping bag outside the restaurant (it still hadn’t dried) and went inside. Ordered two pancakes and a Nanaimo bar, which is a dessert of Canadian origin that zach had recommended I try before I leave Canada back in Dawson creek. Ate up and then went to pay and found out the owner had paid for me. Thank you so much. Had some coffee, filled up my water, and then headed out. Spent the last of my CAD cash on maynards fuzzy peach gummies, a treat that I had grown quite fond of. Biked the last 20 miles in Canada quite fast. Met a group of five bikers making their way down to Seattle. Once at the border, I took a bunch of pics, and met this guy named Yousef (I think, didn’t quite hear correctly). He had come from Amish country with his big family and was planning on staying in anchorage for a while. He and his wife used to be big bikers so he ended up giving me loads of food. Loaded up and headed to customs, which were a complete breeze compared to the 3 hours fiasco at the north Dakota/Canada border. Biked into Alaska feeling very content, after 4,100 miles, I had finally made it. Biked fast to Tok as I still had 90 miles to go and It was already noon. Met a pair of bikers from Belgium going down to NYC. Entered a few rainstorms. One of which I met another biker who was going down to Vancouver. The final rainstorm of the day was absolutely massive and lasted for about 2 miles. The rain drops were literally the size of grapes. It was absolutely mad. I couldn’t see and it felt as if I was in a hail storm. Once out of the storm I stopped to take a pic at Tanana river and then made the final push to Tok, which was a straight away. Got to my hosts house, found out I’m sleeping in the old bus he turned into a hunting vehicle. My host is like a complete G, not only has be motorcycled all around the world, but he is a diesel mechanic and has taught engineering all over Alaska. He even cut out the back out of the bus and put it on hinges so he can load a f*cking truck into the back of it when he goes out to hunt. He cooked up some rabbit and pasta and we ate while exchanging stories. Went to bed. Going to a clinic tomorrow to finally get my thumb fixed. The fact that I am finally back in Alaska after 4 years has not set in yet."
  },
  {
    day: "day_68",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "classroom",
      "drone",
      "eating like a king",
      "crazy horse man",
      "AMR!",
      "bridge",
      "fingie",
      "burwash landing",
      "road",
      "drone"
    ],
    date: "06/11/19",
    location: "Destruction Bay to Beaver Creek",
    miles: 121,
    money: 24,
    text:
      "Slept like a rock and made espresso to wake up. Ate some yogurt which im almost sure now that had been passed and then packed up. Walked through the school one last time and realized that the students get to see these amazing mountains right outside their window. Got on my bike and started moving. Kept getting cars yelling at me that there was a grizzly just a few km down the road but I never saw one. I did see a moose though. I also saw met this guy who is actually riding a horse down to Calgary. He had previously ridden from Brazil to Calgary and now was going to Calgary from Fairbanks. He had his gf driving a motorhome just a few meters behind him. I also saw the couple who I stayed with at summit lake which was absolutely crazy. Got to white water creek and took some pics as it was another place my family stayed four years ago. I also got my water filled up there which was really nice. I started to feel sick and put on all my clothes to try to sweat it out. I biked the rest of the miles pretty quick, completing the entire 120 mile ride to beaver creek in about 8 hours. When I got to Beaver creek I stopped at the visitor center to ask about the cheapest food in town bc I only had 12.65 dollars left. Walked in every place in town and decided to go and get a BLT at Buckshot Betty’s because that’s what I could afford. As I was going in I started talking with a woman I met at the visitor center. She ended up giving me a bit more money to get more food. Thank you so much. I ate a buckshot burger and got a drink highly concentrated with vitamin C to combat my cold. After dinner I went back to this lodge and plugged in my battery and just was chilling. The woman at the desk came out and gave me halibut which was extremely nice. After 11pm, when everyone had pretty much gone home and to sleep, I went to the parking lot behind the lodge, put my bike next to a tree and lay on the ground with my sleeping bag. Went to bed."
  },
  {
    day: "day_67",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "broke pannier",
      "extra terrestrial",
      "jump",
      "walk",
      "sand",
      "sand",
      "walk",
      "washing clothes",
      "drone",
      "biking"
    ],
    date: "06/10/19",
    location: "Otter Falls to Destruction Bay",
    miles: 94,
    money: 8,
    text:
      "Woke up at 8 and met wally for breakfast. He ordered me the “Alcan Surprise” which was  huge breakfast and then paid for it. Thank you so much Wally. I got packed up and then took one picture with him at otter falls then headed out. Met this biker who was a legitimate homeless biker. Big respect. Made to haines junction. As I pulled into a gas station, my right pannier got caught onto the railing of some steps and got completely ripped off. Smh. I went inside the gas station and plugged in my camera’s battery then went outside and fixed my pannier with paracord. I don’t have a knife so I walked around the gas station for broken glass. Sure enough I found some and used it to cut my rope. Secured the pannier and then just loitered around waiting for the battery to charge. After 30 mins I went back in the gas station, thanked the woman working there and hopped on my bike. Biked without any breaks until I got to Kluane lake. A absolutely beautiful lake that I remember back when we drove down 4 years ago. However the lake really changed, and has receded so much. Part of where the lake used to be is now super sandy and because of the wind is constantly blowing up in the air. It was such a beautiful place and looked as if I had landed on a different planet. Flew my drone around the “desert” and then continued. Flew my drone again on another section of the lake. Arrived to destruction bay around 740 which was early so I had a bowl of soup with my remaining cash that Wally had given me (which was 20$). I spent the rest on water and Powerade back at haines junction. Chilled at a fasgas until my host arrived and then biked over to his place. My host works as a teacher and has a suite that is connected to the school. I had the entire place to myself as he went to burwash landing after I settled in. I went through my drone footage, took my first shower in about a week, washed my clothed and socialized with the janitor. I also cooked up some chili which had also been given to me by Wally. Thank you so much Wally. I ate all 6 servings and went to bed. My thumb has now been infected for a week."
  },
  {
    day: "day_66",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["flip", "flip", "flower", "flip", "drone", "gn", "a bluff"],
    date: "06/09/19",
    location: "Whitehorse to Otter Falls",
    miles: 74,
    money: 0,
    text:
      "Met the hosts at the airport at 430 after sleeping like 3 hours. Got a ride back and then fell asleep. Woke up at 1030 and packed up. Ended up pushing off to haines junction. I was so tired the whole day, only stopped twice to take pics of a cool sand area and at this cool sand cliff place on the side of the road to do backflips and stuff. I stayed there for an hour just jumping off these huge cliffs onto this powder-like sand. 20 miles out from haines junction I was so out of water so I stopped at a lodge called otter falls. Filled up on water and was chilling looking at some footage of me falling off the sand cliffs. As I was laughing the owner of the place, wally, came up to me and was like “you talking to yourself”. Iol. I showed him some footage and he asked me where I was planning on staying. I said on the side of the road somewhere by haines junction, which was true and he basically said, alright you stayin here for free boy. He showed me to this little area that he was developing into a camping spot exclusively for bikers. It was really nice and had a closed tarp area. Then Wally fed me which was a huge blessing bc I had no money. He recommended I check out this trail by the campsite so I did. Flew my drone around then biked back and went to sleep."
  },
  {
    day: "day_65",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["dogg", "yukon inn", "whitehorse at night", "steps", "sleep"],
    date: "06/08/19",
    location: "Whitehorse",
    miles: 0,
    money: 24,
    text:
      "Woke up at 7 and headed out. Because the place is so off there grid I couldn’t wash my clothes and now that I had 0$ there was no way I could take my clothes to a laundromat to wash them. Fortunately I had 10$ that the people at the rainy hotdog party the day before had given me was still in my pants pocket. I used that to eat at Boston pizza, where we had celebrated my sisters birthday 4 years ago while we were on the road down to Maryland. Anyways I biked down to Whitehorse because my hosts didn’t want to drive lol. I tried to hitchhike but that didn’t work. In Whitehorse I biked around the places my family visited four years ago. I also got my bike checked out. My chain is so stretched (it skips a lot). But I can’t fix it because I’m a broke boy. Worked in a tim hortons updating blogs and answering emails. At 7 I went to this bar to meet some other couch surfers. Had some good conversation. Went back to tim hortons to try to find ways to work in Anchorage. Saw two French guys from back at the bar and hung out with them. They, like myself, had no place to stay for the night. The reason why I was bumming it was because I really didn’t feel like biking 20 miles back in the rain with my laptop and camera in my backpack. Because my hosts were driving to Whitehorse at 430 the next morning to the airport, we made a deal that I would just meet them at the airport for a ride back. Anyways, ended up sleeping at the airport with the French guys. Ate my last specialty long john doughnut from tim hortons. Also ate a 2000 calorie 3$ strudel from the Canadian Walmart in town. The way to the airport (which is on a bluff overlooking the city) was actually really pretty. "
  },
  {
    day: "day_64",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "hot water boys",
      "breakfast 2",
      "lunch",
      "house",
      "omw",
      "cool",
      "hot springs"
    ],
    date: "06/07/19",
    location: "Teslin Lake to Whitehorse",
    miles: 118,
    money: 24,
    text:
      "Woke up with a sore throat and feeling sick. Had 130 miles ahead of me to get to Whitehorse so I was a bit worried. Jake fired up his stove and we ate warm oatmeal. Took a sick pic and parted ways. Biked 25 miles then had “the best cinnamon buns in the world” according to the milepost. They were alright, personally I think the great harvest cinnamon buns in anchorage are way better though. Biked to jakes corner, to my disappointment everything was closed, leaving me to face an incoming rain storm without any lunch. I zipped up my rain jacket and headed out. It pretty much rained for the whole rest of the day. I stopped by this lake and was feasting on my trailmix under a day use area. A family came in and started cooking hotdogs. They offered me a some and I ate 5 hotdogs. They also gave me a lot of beverages. One guy was super drunk and he started treating my helmet like a soccer ball. After they left I pulled myself together and biked the next 70 miles without stopping for water or food. Once in white horse it cleared up a bit. Contacted my host for an address and realized that they were 20 miles north from Whitehorse completely off the grid. “well shit” I thought to myself. Anyways, biked on some rough road in pouring rain then on gravel road to get to the house. The place was actually really nice and completely self-sustained by solar panels. We went to the kahini hotsprings so I could get cleaned. Met this really cool dude who had recently broken his skull and neck at a skate park. It rained as we soaked in the springs. When we returned home I realized all my cash had been stolen out of my wallet in my locker while I was in the hotsprings. That was disappointing, no more salmon and ribs :’(. Ate some dry pasta from J-M’s house and then went to sleep. "
  },
  {
    day: "day_63",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "bike",
      "dum",
      "dum",
      "car comin",
      "spiky boy",
      "dinner",
      "teslin lake",
      "road"
    ],
    date: "06/06/19",
    location: "Continental Divide to Teslin Lake",
    miles: 93,
    money: 24,
    text:
      "Last night was rough, not the roughest night, but still pretty rough. I woke up at midnight, very cold. I moved to the bathroom which was heated and fell asleep sitting in a chair. I woke up at 3am cold once again – the heat had been turned off. I went outside and moved my bike back to the overhang outside of the lodge, this time pulling out my sleeping bag. I fell back asleep only to wake up about two hours later soaking wet. I had been half asleep this whole time and remember noticing the rain coming down and ignoring it because I was under the overhang. Well the rain came down really hard and splashed all over me. I stood up and took my bike to a day use area and fell asleep on a picnic table in my sleeping bag. Woke up at 7 and went and got breakfast. The Owner sauced me some coffee. Had really really good toast. Had a orange fresca which are super good btw. Finally got off the 10km stretch of gravel and biked pretty fast, got lots of drone footage. Took some pics by an abandoned lodge. Sat in the seat of this old volvo and had a piece of glass slice my left buttcheek. Rip. Got to Teslin lake. Met a guy named jake driving up from Utah to UAF for an internship. He invited me to his campsite. Met another biker going south in a gas station. He bought me a coke and shared stories. Gave him some advice. Had a cheap burger at the diner across the street and then headed to the government campground at Teslin lake. Camped with jake, talked a bunch, ate pasta then went to sleep."
  },
  {
    day: "day_62",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "bike",
      "lunch",
      "fellow biker",
      "nice",
      " clouds",
      "dinner",
      "dinner",
      "gn",
      "gn"
    ],
    date: "06/05/19",
    location: "Watson Lake to Continental Divide",
    miles: 85,
    money: 15,
    text:
      "Woke up at 8 and got everything packed up and ready to go. Met J-M at his house at 1030 because he had to go out to a meeting. He gave me some leftovers for breakfast and a bunch of dried food. I don’t have a stove but I happily accepted. I also had that godly hot chocolate for the last time. Headed out the latest I’ve ever headed out: 1145. Lots of rain in the morning. Stopped at the junction 2km before nugget city for a snack. Ate ketchup chips (which are really good) and mikenikes. Once at nugget city I paid 10$ for a ridiculously small sandwich. Met this couple driving back to anchorage. After some conversation the guy offered me a job which is a huge blessing. Will be contacting him once I get to Anchorage. Kept biking. Met an Estonian biker and a retired guy who had run into a damn wolf along the way. Was loudly singing along to “the less I know the better” and realized I was passing by a recreation site. People waved to me lol. Arrived to the continental divide and tried eating some dried pad tai without cooking it. It was very disgusting. Chilled at a campsite eating trail mix and crunchy uncooked pad tai. Moved to the front of the lodge and fell asleep under an overhang, cowboy style without a sleeping bag."
  },
  {
    day: "day_61",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["my sign"],
    date: "06/04/19",
    location: "Watson Lake",
    miles: 0,
    money: 0,
    text:
      "Slept in, woke up at 9. Went inside and took a shower and started washing my clothes. J-M had cooked a massive amount of pancakes and made literally the best hot chocolate ive ever had in my life. Ate about 9 pancakes. He told me about the Japanese guy who has and still is on an adventure around the world. Crazy and inspiring. J-M, an RCMP officer, got a ride in a cop car from his friend. I sat in the back. We parted ways and I went back to the rec center to do scholarship applications. Worked on my sign for the sign forest and went to put it up. I basically took off the makeshift fender made of the slow sign I found on the side of highway 16 and wrote on it. I put the sign by the little bridge on the west side of the forest. A nice family that I saw at Liard let me their screwdriver. I took a picture of their crew in exchange. J-M is one of the main people promoting hockey in the town so he and a police officers, EMT/medics and Dads ran a free barbecue in the rain. Ate 7 burgers. After the rec center closed I walked back to the house and then oiled up my bike. Went to bed early to finished ronin and sorting through pics."
  },
  {
    day: "day_60",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "yukon",
      "first fellow biker",
      "the crew",
      "contact creek",
      "burnt",
      "forest",
      "jump"
    ],
    date: "06/03/19",
    location: "Liard Hot Springs to Watson Lake",
    miles: 43,
    money: 20,
    text:
      "Woke up at 530, me and kelvin’s crew had negotiated last night on possible ride situations. Kelvin wanted to drive me all the way to Whitehorse to take me out to dinner at a salmon and ribs place. Unfortunately, I couldn’t skip that much of the Alcan. We settled that I go with them for a few miles outside of the prominent Bison zone – a few miles before contact creek.  I hopped in their truck and we drove for a bit, stopped at a few rapids, spotted a swan and saw plenty bison. Once we stopped after about 50 miles I got out and biked to Watson lake. Before I we parted ways, kelvin gave me 50$ to go to the restaurant he wanted to take me to and an address to send a letter to him once I finished my trip. Such great people. He also gave me some more “vitamin L” (Lindor Chocolates”) which was what he gave me when we first met a few days ago. *unfortunately all my money got stolen so I didn’t get to go to the restaurant rip lol*. Stopped at contact creek gas station, chugged a red bull and then grinded out the miles to Watson lake. Lots of rain, and a single bear. Finished my beef jerky. Crossed into the Yukon and in classic simon nature I climbed the sign and took a picture of me on top of it. Once in Watson lake I had lunch in a small diner and then went to the library. It was closed so I went to the rec center. On the way some native people told me I probably would get eaten by wolves. Very spooky. Watson lake was my first place with reception and wifi for a few days so I got caught up with emails and such in the rec center. It hailed like crazy. Checked out the sign forest, got an idea for a sign of my own. Met my first biker on the road, an Austrian guy who was about 60 biking to Vancouver. Met my host J-M and camped in his backyard. Ate Chinese takeout for dinner. Fell asleep watching ronin in my tent."
  },
  {
    day: "day_59",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "tent: 0 wind: 100",
      "table",
      "mountain",
      "going down",
      "bridge",
      "lodge",
      "caution",
      "huge",
      "chillin",
      "woah",
      "plane",
      "clear",
      "almost died",
      "hotsprings",
      "hotsprings",
      "uphill",
      "uhh",
      "recreation of my bison encounter by dr joe",
      "asserting dominance on the road"
    ],
    date: "06/02/19",
    location: "Summit Lake to Liard Hot Springs",
    miles: 84,
    money: 35,
    text:
      "Wind wrecked me yet again. My cheap 80$ tent from amazon collapsed from all the wind at night and I had to wake up at 2am and re stake everything. Ofc it got all blown away. Around 730 a voice outside of my tent said “anyone alive?” I woke up and stayed quiet for a few moments, I decided to answer, “yeah what’s up” I responded. Turns out it was a park ranger. He made me give him 20$ for camping there. Should’ve stayed quiet. Hiked a tiny bit then began my descent. Saw a bunch of bears, nbd tho my yelling scared them off. Saw two moose as well. Had lunch in toad river. Had a nice wrap. Met some cool veterans going up to Alaska for the Veteran games. Terrain changed up yet again after toad river, with grand cliffs stretching way above me. After a couple miles terrain changed again and I found myself going up a mountain. Halfway up I was taking a break and this dude in a shitty car going south (I’m going north) stopped next to me and started telling me to get in his car. I was like tf, why tf would I get in your car. He kept insisting. I just gave home a thumbs up and said no thanks lmao. Then I filmed myself dancing to tame impala’s eventually. At the top of the mountain I got a bunch of drone footage. Got to muncho lake Then I realized that I still had to get through bison territory and it was already 705 and I had over 43 miles to go. Then began the fastest 43 miles I’ve ever biked. I got to liard hot springs at 930. It was crazy, I absolutely booked it. Also I almost got killed by a bison Bc APPARENTLY you’re not supposed yell at them. Anyways, was going down a hill that curved to the left. Spotted like five bison chilling on the left side as I was descending. Concluded I would just zoom past them. Went around the turn came across a huge herd with tons of calves on the left side of the road. My Ayo’s scared them and they started running away along the left hand side of the road in front of me which was chill until they decided to hang a right. The back half of the herd stopped in the middle of the road in front of me. As I began to slow down I looked behind me and was greeted by a charging bull from the small satellite herd that I just passed. As I began switching my gears so I could swerve onto the muddy grass and dip, I yelled “f*ck”. This f*ck saved my life. My yell scared the herd in front of me and they ran off the road, I hauled ass. The bull lost interest after I passed the other herd. Met a man named dr joe. He let me set up camp at his site while I took a dip in the hotsprings. At the hot springs I met kelvin carrol and Norris, an elderly trio of tourists that I had met the previous day at a viewpoint. They gave me Gatorade and chocolate (back at the viewpoint) and offered me food and to let me sleep in their car. I said, “bet” then continued to the springs. Was in black spandex underwear Bc I don’t have a swimsuit. Met some cool people. One dude that saw me early down the road asked if I was the crazy biker guy, I said yessir. A guy there got in a argument with a park ranger about where he was parked and said he would axe the parks gate if they closed it. The ranger was lowkey a narc. The bro then gave me his last beer. Ate cheese and chilled with kelvin and his crew. Moved my stuff quietly from dr joes spot. Dr joe also is a orthopedic dr and gave me some recommendations for my knees. Shoutout dr joe, for helping me out. Slept well."
  },
  {
    day: "day_58",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "cool",
      "leaving",
      "cow",
      "clouds",
      "first bear",
      "uphill",
      "uphill",
      "third bear, he was huge",
      "snow",
      "after the storm",
      "almost",
      "arrived"
    ],
    date: "06/01/19",
    location: "Ft Nelson to Summit Lake",
    miles: 84,
    money: 35,
    text:
      "Alright, what a day. I saw ten bears on the side of the road man. In just one day. Like I’ve seen bears and all that plenty of times but when I do I usually go the other way and avoid them, not try to go around them. Anyways, the second bear I saw started coming at me. I had my bear spray thang on me, although I didn’t want to spray him Bc it could blind him and really hurt him. Fortunately, this truck pulled out of nowhere and saved me. From then on, my bear encounters were alright, except the one right after. I came across two bears on both sides of the road. The one on the right was so huge. I couldn’t scare him off so I slowly biked past him with my thang ready to go. He was all stanced up and ready to destroy me. He stared me down. It was so intense. After that I perfected my bear repellent protocol. Anyways besides the bears, today was the most ascent I will and have had in a single day: over 6000 feet. Summit lake is at the highest point of the alcan. Anyways so besides shredding my knees all day, it stormed all morning and then again about an hour out. Headwind was huge. By the last few hours of my bike trip I was like 110% alert scanning every bush for a bear. I was literally acting like a crackhead. I also saw the biggest moose I’ve ever seen ever chillin on the side of the road. But I got through it. Arrived to the summit pass campground a little before 10. A couple that had passed me while I biked through the storm fed me and gave me beverages. I slept well and dreamed about bears."
  },
  {
    day: "day_57",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "smoke",
      "smoke",
      "smoke",
      "smoke",
      "bike",
      "smoke",
      "bridge",
      "arrive",
      "quilt",
      "sun",
      "best doughnut ever"
    ],
    date: "05/31/19",
    location: "Prophet River to Ft Nelson",
    miles: 57,
    money: 20,
    text:
      "Woke up early. Left early. After 20 minutes of biking I entered a huge smoke cloud. This cloud enveloped me and the following 70 miles. Fort Nelson is full of smoke as well. It looks really cool Bc it looks like fog, and it also constantly smells like a campfire but it lowkey messes with your lungs if you breath really hard. Got a bunch of drone footage. Stopped in a quilt shop. Chilled in a Tim Horton’s before going to my hosts house and almost fought a guy Bc I dropped my wallet and then this guy said that he saw this dude sitting where I was sitting and that he might have taken it so I went to confront the guy and then this cop came over and was like son I got your wallet. The guy was super mad tho but oh well. Talked to the fam. Ate lasagna."
  },
  {
    day: "day_56",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "bathroom break",
      "gate",
      "sigh",
      "drone",
      "drone",
      "mountain",
      "yee",
      "bad",
      "konichiwa",
      "longg dogg",
      "bed"
    ],
    date: "05/30/19",
    location: "Pink Mountain to Prophet River",
    miles: 84,
    money: 35,
    text:
      "Got stung by a wasp going down a hill. Yelled motherfucker super loud and it echoed throughout the mountains. I also have a spider bite that is acting suspiciously like a brown recluse bite. It really hurt yesterday. Woke up at 630 and walked to the inn across the street. Meant just to buy a hot drink but ended up buying a buffet of food. Smh I’m gonna run outta money. I started watching this Steven Spielberg movie called ai artificial intelligence and ended up staying at the inns lobby to finish the movie. It almost made me cry man, they did David so wrong😢. Was supposed to see a few bears as reported by the people at the inn but didn’t see any. Saw more mountains in the distance. Almost ran out of water but made it to prophet river in time. My current water carrying capacity is about 3.2 liters. I have two empty 950ml Gatorade bottle I use for water purification and storage. Anyways got to prophet river. Debated on biking another sixty to just get to ft Nelson a day early. Ended up not Bc this Chinese lady who owns this big house and advertises it as an inn said I could sleep in her parking lot for free. She made me dinner but charged me 20$ lmao. She unlocked the bathroom and Then I realized that the bathroom was heated so I ended up sleeping on the bathroom floor. One year ago I graduated high school, come a long way lol. Got a bunch of Ghana stuff done."
  },
  {
    day: "day_55",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "drone",
      "hill",
      "mountain",
      "fire",
      "run",
      "pink mountain",
      "walk"
    ],
    date: "05/29/19",
    location: "Ft St John to Pink Mountain",
    miles: 90,
    money: 12,
    text:
      "It was very hot today. Biked many hills. Began seeing big boy mountains. Flew drone a bit.  Got super mentally tired, kept going. Got some drone footage. Arrived to pink mountains late and slept in front of the air pump at the gas station. Watched the rest of the Maze runner movie. Ate some really good curry leftovers from last night’s dinner."
  },
  {
    day: "day_54",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "cya dawson creek",
      "mile 0",
      "4 years apart",
      "4 years apart",
      "4 years apart",
      "4 years apart",
      "cliff",
      "woah",
      "drone"
    ],
    date: "05/28/19",
    location: "Dawson Creek to Ft St John",
    miles: 45,
    money: 6,
    text:
      "Woke up late. Zach’s wife made me taco salad and literally it was so good that I ate it all before I left Dawson creek. Stopped by the historic Dawson creek. Took some corny pics mirroring the pics that my family took when we were here four years ago. Checked out some other souvenir shops. Biked for awhile but got very mentally tired. Bought a milkshake at an inn and justified it Bc it was one of the last inns on the way. Watched maze runner. Got some drone footage. Arrived to ft St. John early. Stopped in a Walmart McDonald’s. Met this bike tourer. He forgot his wallet. A security guard gave me a hard time about having my bike indoors but eventually he caved. Spent the night with my host. He is so chill and fixed my bike up, cooked bomb food and let me take whatever I wanted. Such a guy."
  },
  {
    day: "day_53",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "running",
      "zach",
      "climb",
      "jumpin pic",
      "down",
      "bridge",
      "zach",
      "bridge"
    ],
    date: "05/27/19",
    location: "Dawson Creek",
    miles: 0,
    money: 12,
    text:
      "Went to a bike shop to get my chain checked out. Spent the rest of the day trying to fundraise for ghana. We are screwed, we have everything but money. I wish I was born into a rich family sometimes (not really). A fat trust fund would make everything so much easier lol. After Zach came back from work he took me to this abandoned train bridge. We climbed it and messed around with my drone. I tried to land it on a skinny piece of wood and almost crashed it. Then we went to McDonald’s with his wife and her friend. He introduced me to how I met your mother and it’s a pretty good show. We tried to fly the drone around his apt. Zach flew the drone from outside into his house but it crash landed into the couch Bc the sport and regular mode is wired backwards on the remote for some reason. Ate some pizza and ham. Went to bed feeling excited as i am about to embark on the final stretch."
  },
  {
    day: "day_52",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "a superior form of transportation?",
      "jumpin pic",
      "jumpin pic",
      "jumpin pic",
      "horse",
      "bridge",
      "beaverlodge",
      "rio",
      "BC",
      "pouce coupe",
      "ayo",
      "sign",
      "pic"
    ],
    date: "05/26/19",
    location: "Grand Prairie to Dawson Creek",
    miles: 70,
    money: 10,
    text:
      "Woke up at 530 on the sidewalk. Didn’t get robbed. Walked to Tim hortons and chilled there for a solid hour and a half. Started biking to Dawson creek. Some serious hills going on. Got watched some movies. Watched this weird abduction movie. Stopped in an A&W and ate a good burger and drank root beer. Watched cloverfield paradox. Took lots of pics. Got to Dawson creek early. Worked a bit then rolled up to Zach’s house. Host is a man actual cook so he made some really good chicken breasts. Passed out watching Star Wars. Wild how Anikin just goes sicko mode on those kids. "
  },
  {
    day: "day_51",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "pretty",
      "bridge",
      "grass",
      "grass",
      "flowers",
      "bridge",
      "sun dial",
      "gn",
      "new fender",
      "clouds"
    ],
    date: "05/25/19",
    location: "Valleyview to Grand Prairie",
    miles: 72,
    money: 15,
    text:
      "First non 100+ mile day in awhile so got to actually stop and take good pics. Starting to get really hilly. Slept in. I hit them zzs so hard I woke up confused as to where I was. Had to drink a red bull to snap out of it. Saw cool stuff. Watched meg, rampage, and splice on the way. Splice is actually disgusting af I was literally screaming. Do not recommend that movie it was some trash. Arrived to Grand Prairie. Saw first Alaska sign. Don’t have a host so I scouted out a good homeless spot for the night. I will be sleeping under a Canadian Lowes’ overhang. Ate dinner at a&w. This morning I cut my orange triangle sign with some pliers back and strapped it down to my rack thus making it a makeshift fender/visibility thing. Relocated to the parking lot of a funeral home and currently leaching off the WiFi of a nearby Kia dealership. The grind never stop lol. A homeless guy rolled up to me and asked me where moe was. "
  },
  {
    day: "day_50",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "road",
      "trees",
      "mud",
      "speed",
      "gloves broken",
      "gn",
      "dinner",
      "birdie"
    ],
    date: "05/24/19",
    location: "Whitecourt to Valleyview",
    miles: 109,
    money: 14,
    text:
      "The sky gave me the superb sideways Samsung slam dunk wet wet. Rained for a long while. Took one break in a subway. My host had given me lots of food so I was munching heavy. My fingers are starting to bust out my gloves thus complimenting my homeless aesthetic. My host is super nice. weighed my bike finally, about 76lbs with all my gear. His neighbor rolled in and made us drink lime beer. We then went to dinner and she (his neighbor) almost made the supervisor cry lol. Had a wrap and a thicc poutine. Slept like a rock."
  },
  {
    day: "day_49",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "Edmonton",
      "Edmonton",
      "field",
      "road",
      "fog",
      "god",
      "cloud",
      "station",
      "area 51",
      "last hill"
    ],
    date: "05/23/19",
    location: "Edmonton to Whitecourt",
    miles: 113,
    money: 14,
    text:
      "Left super late -- woke up after 5 hours of sleep and kinda just moseyed around Matt’s apt wasting time. Finally got all packed up and out the door at 1030. Had a rough time leaving Edmonton be of all the construction and gravel roads. Ran all the way out of food. 20 miles out from Whitecourt I couldn’t stand it and ran in a gas station and bought some candy. Holy shit. Maynard peach gummies are literally Canadian ambrosia. My host is such a bro. Cooked up a bomb pizza and ate three apples for dinner. "
  },
  {
    day: "day_48",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["a new friend", "art", "art", "art", "outside", "the city"],
    date: "05/22/19",
    location: "Edmonton",
    miles: 0,
    money: 10,
    text:
      "Went and got my tires filled at giant bikes. Stopped at staples to pick up some more sd cards Bc my computer can’t hold all my pics. Matt bought me a ticket to this hardcore metal concert he was gonna go this evening. We decided to part ways then link back up in the evening. While on my own, I did some exploring and scholarship apps. Went to a donair place which is just like doner just Canadian (?). The show was fire lol. after the show my third eye opened and I understood the appeal of the edgy genre. All the screaming inspired me to finally get around to editing my second leg video recap and got it done in 3 hours, went to sleep around 330 am."
  },
  {
    day: "day_47",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "edmonton in the distance",
      "streets",
      "toilet",
      "clouds",
      "a nice trail",
      "metropolis",
      "a flat",
      "more trail",
      "small horses"
    ],
    date: "05/21/19",
    location: "Vermillion to Edmonton",
    miles: 127,
    money: 13,
    text:
      "Nancy invited me to the restaurant she works at this morning. Ate huge. Fortunately, it was on the house. Thank you Nancy 🙏🙏. Didn’t really take any breaks. Got a flat 15 miles out from Edmonton with a big boy nail. Got so pissed but got over it. Figured out I can watch amazon prime while biking. Watched the last got episode and a few vice episodes. Met Matt the host for the next two nights. He’s super cool and has a chinchilla. Longboarded to subway for dinner. Saw a bison and some small horses."
  },
  {
    day: "day_46",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["a new providence", "car", "zoom", "bike", "a quick break"],
    date: "05/20/19",
    location: "Battleford to Vermillion",
    miles: 124,
    money: 10,
    text:
      "Woke up and ate breakfast. Tony’s family gave me an Oakley windbreaker. They also gave me some cash so I could actually pay for campsites 😓. Pretty solid ride. A ~125 mile day. Found a toilet. The mosquitoes have officially risen. All types of bugs occasionally land on me as I bike. I swear if I get hit by a car it’s Bc a bee or smn landed on me and I started tweaken trying to get it off. Arrived to vermillion. My host Nancy and I watched some weird movie on Netflix where the Hispanic cop from narcos and this girl with thick eyebrows were on mars or something trying to mine gems. Ate pizza drank some beer then slept on the couch. Edmonton tomorrow."
  },
  {
    day: "day_45",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["another jumping pic", "break", "bike"],
    date: "05/19/19",
    location: "Saskatoon to Battleford",
    miles: 81,
    money: 14,
    text:
      "Neil sauced me three days worth of food. He also gave a few water purifying tablets which will really help me once I get on the alcan highway. Found an abandoned trailer on the side of the highway. Filmed myself climbing on top of it then jumping off - typical Simon behavior. Found a tractor’s orange triangle visibility thing on the side of the road as well. It’s strapped on the back of my pack now. Went to Burger King. Diet Pepsi is the superior cola product. Currently in tim Horton’s working on some stuff, updating this insta blog thing. Was planning on sleeping in between a few dirt mounds I spotted on the side of the highway but ended up being taken in by tony, a big man, and his family. Ate well and slept well."
  },
  {
    day: "day_44",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "esso",
      "horse",
      "eco",
      "the cabin",
      "bike",
      "cool",
      "saskatoon",
      "meditation",
      "food",
      "meditation house",
      "a good view"
    ],
    date: "05/18/19",
    location: "Craik to Saskatoon",
    miles: 88,
    money: 9,
    text:
      "Woke up, Paul and I checked out this “eco village”. It was pretty sick. Pretty uneventful ride. Getting good at spacing out. Got a back wind so that was nice. Lots of bugs. Arrived to Saskatoon, a pretty rad city. Once I got to Saskatoon I met Neil. This guy is a rad mf. He did a ton of traveling from when he was 17-22. Like hitchhiking traveling, true og stuff. He had many many wild stories, a truly enlightened individual. He wrote a book that became a “international bestseller”. Anyways, Neil took me to a “full moon gathering” which is basically a congregation of all the woke weird people of Saskatoon in a unfinished mansion. It was so sick. So much good food. Many Buddha’s were scattered throughout the land. We then meditated. An ex-tebitian monk who was homies with the dalai lama led the exercise. Lots of chanting. I may or may not have opened my third eye in the process. It could’ve been Bc I was super tired, but I started seeing visions of this crazy geometric void. It was probably Bc I was falling asleep. Neil drove me back to his house at 1130. A very peaceful night. The full moon illuminating the interior of Neil’s car complimented the serene silence that enveloped the ride back home. Very beautiful evening, won’t forget it soon. "
  },
  {
    day: "day_43",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: [
      "worn out",
      "oiling the bike",
      "cabin",
      "on the road",
      "shadow",
      "beaver",
      "bees",
      "civilization"
    ],
    date: "05/17/19",
    location: "Regina to Craik",
    miles: 85,
    money: 12,
    text:
      "After the break, my legs have become infatiguable. I can pump mile after mile without much trouble. Mentally though, I got super bored, today at least. Replaced my back tire in the morning, shoutout DUTCH CYCLES. My tire had gotten completely worn out with the first 2000 miles. Hit the road at 1030, got to Craik around 430. Met Paul, a teacher and the most wholesome dad I’ve ever met in my entire life. He has this cool cabin over a lake. He’s got a lot of land too. He took me on a tour and I got to see a bunch of cool stuff, including his bee farm. Spotted a beaver. Ate some really really good steak."
  },
  {
    day: "day_42",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["plane", "airport"],
    date: "05/16/19",
    location: "Flying back to Regina",
    miles: 0,
    money: 12,
    text:
      "Zoe dropped me off at BWI at 4am. Spent the rest of the day on the plane sleeping and recovering. Had some weird dreams. Landed in Regina around 4pm. Walked to a bus stop then took the bus to downtown regina. Walked around, found a starbucks in a hotel. Started working on my computer. Had a surreal moment when old country road started playing in a Canadian starbucks. Cant believe that song is on the radio now. Connor came and picked me up after he went to dinner with his mom. Dropped me off at his house and then he went to hang out with his gf. I ordered a taco pizza which was really really good. Connor and I chilled for a bit and then went to sleep."
  },
  {
    day: "day_41",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["our booth", "the booth"],
    date: "05/15/19",
    location: "Baltimore Interlude",
    miles: 0,
    money: 17,
    text:
      "Stayed up all night, worked on getting open cv compiled on a raspberry pi. Ran into some problems bc my power source failed. Built a root cellar sign bc i was bored and couldn't sleep. Shoved some 3D printed hollow text into the packaging foam from the 3D printer's packaging then stuck RGBs into them. The final sign had lights controlled by an IR remote and an LCD displaying 'coming soon'. In the morning Zoe picked me up, I showered and changed. Zoe was supposed to cut my hair but I fell asleep. Noah picked me up and we drove over to the fortress. We finished the rest of the keychains then moved everything to the event. The event was a success, very tired but ready to bike"
  },
  {
    day: "day_40",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["sky", "deported", "customs", "plane"],
    date: "05/14/19",
    location: "Baltimore Interlude",
    miles: 0,
    money: 17,
    text:
      "Today was a big grind day. Stayed at the fortress. Slept for a couple hours 5am - 7am. I woke up to one of the FITCI employees checking out a keychain. Speaking of keychains, I need a second 3D printer to pull this off, there are way too many keychains needed. Also, I’ve gone through like 10 unique keychain designs. Anyways, today I went to FITCI to get the ORION 3D printer. Did some calculations and figured out how to pull it off. Worked on a 16x2 LCD Arduino game. Postmated Chipotle which was probably one of the best ideas I’ve ever had in my life."
  },
  {
    day: "day_39",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["new printer", "built", "tables", "outside the fitci fortress"],
    date: "05/13/19",
    location: "Baltimore Interlude",
    miles: 0,
    money: 0,
    text:
      "Got dropped off at the FITCI fortress in the morning. Had an amazing lunch prepped for me by Katherine. Built a 3D printer. Realized that the FITCI people needed 200 keychains by the 15th event. This was annoying bc that meant I had to edit the designs to be time efficient. Oh well, an extra challenge is always exciting. Spent the day modelling other keychains, figuring out how to print with a filament too small for the printer, and began to work on a couple robots. Spent the night at the fortress."
  },
  {
    day: "day_38",
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["fitci"],
    date: "05/12/19",
    location: "Baltimore Interlude",
    miles: 0,
    money: 0,
    text:
      "It was mothers day, joined the bukis for brunch, hung out at the house with zoe. Grabbed some parts from FITCI. Called my family early in the morning and got about 4 hours of sleep"
  },
  {
    day: "day_37",
    url: [17651894, 1557651894, 1557651725, 1557703279],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["sky", "deported", "customs", "plane"],
    date: "05/11/19",
    location: "Baltimore Interlude",
    miles: 0,
    money: 17,
    text:
      "Woke up at 545. Connor, the mvp, drove me to the airport. I spent the whole day hopping between 4 different planes. Finally arrived to Baltimore at 1030. Zaz picked me up and I spent the night at his house. We watched some movies and it was super chill. Worked a bunch on this blog and preparing for the 15th event. Ended up staying up all night and then called my family at 6am."
  },
  {
    day: "day_36",
    url: [1557651893, 1557651895],
    col: [[], [], []],
    popUrl: [],
    ogUrl: [],
    captions: ["handle", "best ramen"],
    date: "05/10/19",
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
    date: "05/09/19",
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
  for (var i = 0; i < days[day].captions.length; i++) {
    days[day].col[organizer].push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/q_auto:eco/v1/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );
    days[day].popUrl.push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/q_auto:eco,w_400,c_fill,ar_4:3/v1/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );
    days[day].ogUrl.push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/v1/bike/" +
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
      img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif",
      caption: "x",
      link: "x",
      width: window.innerWidth,
      height: window.innerHeight,
      popupStyle: {}
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this._executeAfterModalClose = this._executeAfterModalClose.bind(this);
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

      this.phoPop.show()
    );
  }
  _executeAfterModalClose() {
    this.setState({
      img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif",
      link: "x"
    });
  }

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
              Miles Left: <i>≈ 320</i>
            </p>
            <p className="mediumSize">
              Time Elapsed: <i>70 days</i>
            </p>
            <p className="mediumSize">
              Start Date: <i>04/04/2019</i>
            </p>
            <p className="mediumSize">
              Target Completion Date: <i>06/16/2019</i>
            </p>

            <p className="mediumSize">
              Daily Avg: <i>91 miles</i>
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
              packed my things, and hopped onto my bike.
              <br />
              <br />
              Besides the personal sentimental reasons that this trip holds, I
              am also riding to raise money for a STEM education camp that my
              small non-profit is running with STEMBees (a Ghana based
              nonprofit) at the University of Ghana. While we have completed
              curriculum, secured a location and instructors and have robotics
              parts, we need funding to transport instructors and all of the
              parts to Accra Ghana. Any help is beyond greatly appreciated. To
              donate {""}
              <a
                className="linkK"
                href="https://www.gofundme.com/stem-education-for-ghanaian-students"
              >
                visit our go fund me.
              </a>
              Thank you!
            </p>
          </div>
          <div className="gofund">
            <br />
            <a href="https://www.gofundme.com/stem-education-for-ghanaian-students">
              <img className="goImg hover" src={gofund} alt="gofund" />
            </a>
            {/* <embed
              height="500px"
              width="100%"
              src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=stem-education-for-ghanaian-students&image=1&coinfo=1&preview=1"
              type="text/html"
            /> */}
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
            <a href="https://www.youtube.com/watch?v=8377CK2pmo8">
              <img src={leg2} alt="leg2" className="img hover" />
            </a>
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
        <br />{" "}
        <p className="center mediumSize">
          <i>
            Below are my daily logs for my trip. These logs are written as
            "braindumps" and with much haste so I guarantee they are fraught
            with grammatical errors. For navigational ease between dates, click
            the menu toggle in the upper right hand corner.
          </i>
        </p>
        <br /> <br />
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
