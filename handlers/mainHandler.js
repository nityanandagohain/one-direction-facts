const fs = require('fs');
const config = require('../config.js');

const mainHandler = {
    'LaunchRequest': function () {
        this.response.cardRenderer(config.HELP_MESSAGE);
        this.response.speak(config.HELP_MESSAGE);
        this.response.listen(config.HELP_REPROMPT);
        this.emit(':responseReady');
    },

    'GetFactsIntent': function () {
        let randomIndex = Math.random() * (facts.length - 2);
        randomIndex = Math.round(randomIndex);
        const RESPONSE_TEXT = "here is a fact about one direction : " + facts[randomIndex];

        this.response.cardRenderer(RESPONSE_TEXT);
        this.response.speak(RESPONSE_TEXT);
        this.emit(':responseReady');
    },

    'Unhandled': function () {
        ;
        this.response.speak("Sorry I didnt understand that. Say help if you need any assistance.");
        this.response.listen(config.HELP_REPROMPT);
        this.emit(':responseReady');
    }
};

module.exports = mainHandler;

const facts = [
    "Liam Payne was born on 29th August 1993. His star sign in Virgo",
    "Niall Horan was born on 13th September 1993. Just like Liam, he’s a Virgo",
    "Zayn Malik was born on 12th January 1993. He’s a Capricorn just like Louis",
    "Harry Styles' musical heroes are The Beatles and he’s also a huge Coldplay fan",
    "Harry was brought up in the village of Holmes Chapel in Cheshire.",
    "Harry’s favourite TV show is Family Guy and his favourite movie is Love Actually - however, he tells everyone it’s Fight Club to seem more manly!",
    "While on The X Factor, Harry had a big crush on judge Cheryl - who his bandmate Liam Payne went onto have a two-year relationship and a baby with - and The Xtra Factor host Caroline Flack, who he later reportedly dated. He’s joked that his man crush is bandmate Louis Tomlinson!",
    "Harry sleeps naked!",
    "Louis was brought up in Doncaster, South Yorkshire. Other famous people who hail from there include Jeremy Clarkson and Brian Blessed.",
    "If Louis had a superpower, he would fly.",
    "Louis’s favourite band is The Fray.",
    "Louis’s celebrity crush is Diana Vickers and his man crush is Robbie Williams.",
    "Liam Payne released his debut EP on the 24th August 2018.",
    "Liam spent his childhood in Wolverhampton, the birthplace of Led Zeppelin legend Robert Plant and Slade’s Noddy Holder.",
    "Liam’s favourite colour is purple.",
    "Liam also took part the 2008 series of The X Factor, making it through to the Judges' Houses round and visited Simon’s house in Barbados where he was cruelly eliminated.",
    " Liam’s favourite film is the Toy Story trilogy.",
    "Liam’s celebrity crush is Leona Lewis and his man crush is stand-up comedian Michael McIntyre.",
    "Liam only has one kidney after getting one removed as a kid. He’s completely teetotal and never touches a drop of alcohol, as he explains, “It’s just a choice to be on the safe side.”",
    "Liam once cried while watching Marley & Me. Bless.",
    "Liam has a very unusual phobia – SPOONS! He admits it’s “very strange” and would like to invent an ‘anti-spoons’ app for mobile phones.",
    "Niall’s ideal woman is Cheryl Cole - his bandmate Liam's now ex-girlfriend - and his man crush is Michael Bublé.",
    "Niall’s favourite movie of all time is Grease.",
    "Niall is left-handed.",
    "Niall was brought up in Mullingar in Ireland.",
    "On their 53:14 min long debut album ‘Up All Night’, Harry gets 7:18min worth of solos, Liam has 7:08min, Zayn has 5:38min, Louis has 1:29min and Niall has 1:24min.",
    "Zayn was brought up in Bradford, West Yorkshire. Other famous Bradfordians include the Brontë sisters, magician Dynamo and Gareth Gates.",
    "Zayn fancies the pants off Megan Fox and has a secret man crush on Justin Timberlake.",
    "Zayn’s favourite book is Harry Potter.",
    "Zayn says he has a soft spot for intelligent girls.",
    "Zayn can’t swim.",
    "Zayn’s favourite band of all time is *NSYNC.",
    "Zayn’s X Factor audition wasn’t broadcast on the main show. When he had progressed further it was retrospectively shown on spin-off show, The Xtra Factor.",
    "Niall sang Ne-Yo’s ‘So Sick’ in the X Factor first round and received glowing praise from Louis Walsh. A big Oasis fan, he later covered ‘Champagne Supernova’ at bootcamp.",
    "Liam sang ‘Cry Me A River’ in his 2010 audition and received a standing ovation. At bootcamp he covered Oasis’ ‘Stop Crying Your Heart Out.’",
    "Louis auditioned with Plain White T’s ‘Hey There Delilah’ and got a clean sweep of yes’s from the judges.",
    "Harry impressed two out of the three judges in The X Factor's first round with a version of Stevie Wonder’s ‘Isn’t She Lovely’. Louis Walsh had doubts but once progressed Harry sang ‘Stop Crying Your Heart Out’ at bootcamp.",
    "Niall’s favourite colour is blue.",
    "One Direction are the brand ambassadors for the computer game Pokémon Black and White and have appeared on TV adverts and performed at events.",
    "The band’s Twitter ID’s are @Harry_Styles, @NiallOfficial, @zaynmalik, @LiamPayne and @Louis_Tomlinson. ",
    "Niall has the most Twitter followers with 39.3 million."
]