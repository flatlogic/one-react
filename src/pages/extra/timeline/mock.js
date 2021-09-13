import tn7 from '../../../images/people/tn7.png';
//import tn9 from '../../../images/people/tn9.png';
//import p26 from '../../../images/pictures/26.png';
import a2 from '../../../images/people/a2.jpg';
import a6 from '../../../images/people/a6.jpg';
import email from "../../../images/icons/email.svg";
import p1 from "../../../images/people/p1.png";
import p2 from "../../../images/people/p2.png";
import location from "../../../images/icons/location.svg";
import call from "../../../images/icons/call.svg";
import p27 from "../../../images/pictures/27.png";


export default {
    cardsData: [
        {
            imgIcon: email,
            imgUser: tn7,
            userName: "Jessica Nilson",
            userNick: "@jess",
            timeZone: "10:12 am - Publicly near Minsk",
            PostBody: [{
                textPost: "There is no such thing as maturity. There is instead an ever-evolving process of maturing. " +
                    "Because when there is a maturity, there is ...",
            }],
            liked: true,
            lastPublish: 3 + ' hours',
            commentWrite: true,
            postComments: [
                {
                    commentImg: p1,
                    nameUser: "Radrigo Gonzales",
                    timeLast: "7 mins ago",
                    post: "Someone said they were the best people out there just few years ago. Don't know better options.",
                },
                {
                    commentImg: p2,
                    nameUser: "Ignacio Abad",
                    timeLast: "6 mins ago",
                    post: "True. Heard absolutely the same.",
                },
            ],
        },
        {
            inverted: true,
            commentWrite: true,
            imgIcon: location,
            imgUser: tn7,
            userName: "Jessica Nilson",
            userNick: "@jess",
            timeZone: "10:12 am - Publicly near Minsk",
            liked: true,
            lastPublish: 5 + ' hours',
            HasMap: true,
            postComments: [
                {
                    commentImg: p1,
                    nameUser: "Radrigo Gonzales",
                    timeLast: "7 mins ago",
                    post: "Someone said they were the best people out there just few years ago. Don't know better options.",
                },
                {
                    commentImg: p2,
                    nameUser: "Ignacio Abad",
                    timeLast: "6 mins ago",
                    post: "True. Heard absolutely the same.",
                },
            ],
        },
        {
            imgIcon: call,
            imgUser: a6,
            linksEmpty: true,
            hasMedia: true,
            media: {
                image: {
                    url: "",
                    alt: "title",
                    img: p27,
                },
            },
            lastPublish: 7 + ' hours',
            userName: "Jessica Smith",
            userNick: "@smith",
            timeZone: "9:03 am - Publicly near Minsk",
            postBody: [{
                textPost: "Let's try something different this time. Hey, do you wanna join us tonight?" +
                    " We're planning to a launch a new project soon. Want to discuss with all of you...",
            }]
        },
        {
            inverted: true,
            imgIcon: email,
            imgUser: a2,
            userName: "Jessica Nilson",
            userNick: "@nils",
            timeZone: "10:12 am - Publicly near Minsk",
            PostBody: [{
                textPost: "Let's try something different this time. Hey, do you wanna join us tonight? " +
                    "We're planning to a launch a new project soon. Want to discuss with all of you..."
            }],
            liked: true,
            lastPublish: 2 + ' hour',
            commentWrite: true,
            postComments: [
                {
                    commentImg: p1,
                    nameUser: "Radrigo Gonzales",
                    timeLast: "7 mins ago",
                    post: "Someone said they were the best people out there just few years ago. Don't know better options.",
                },
                {
                    commentImg: p2,
                    nameUser: "Ignacio Abad",
                    timeLast: "6 mins ago",
                    post: "True. Heard absolutely the same.",
                },
            ],
        },
        {
            imgIcon: call,
            imgUser: a2,
            userName: "Jessica Nilson",
            userNick: "@nils",
            timeZone: "10:12 am - Publicly near Minsk",
            PostBody: [{
                textPost: "Let's try something different this time. Hey, do you wanna join us tonight? " +
                    "We're planning to a launch a new project soon. Want to discuss with all of you..."
            }],
            lastPublish: 1 + ' hours',
            liked: true,
            commentWrite: true,
            postComments: [
                {
                    commentImg: p1,
                    nameUser: "Radrigo Gonzales",
                    timeLast: "7 mins ago",
                    post: "Someone said they were the best people out there just few years ago. Don't know better options.",
                },
                {
                    commentImg: p2,
                    nameUser: "Ignacio Abad",
                    timeLast: "6 mins ago",
                    post: "True. Heard absolutely the same.",
                },
            ],
        },
        {
            inverted: true,
            headers: true,
            badgeImg: true,
            imgUser: a6,
            iconUser: a6,
            userName: "Jessica Smith",
            userNick: "@smith",
            timeZone: "9:03 am - Publicly near Minsk",
            PostBody: [{
                header: " New Project Launch ",
                textPost: "Let's try something different this time. Hey, do you wanna join us tonight? " +
                    "We're planning to a launch a new project soon. Want to discuss with all of you..."
            }],
            lastPublish: 3 + ' hours'
        },
    ]
}