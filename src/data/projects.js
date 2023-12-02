import minecraftImg from '../assets/minecraft.png'
import dicegameImg from '../assets/dicegame.png'
import flightsBookingImg from '../assets/flightsBooking.png'

const projectsData = [
    {
        id:101,
        title: "Minecraft",
        description: `Minecraft is a sandbox video game initially created by 
        Swedish programmer, Markus "Notch" Persson . The 
        creative and building aspects of Minecraft enable 
        players to build constructions out of textured cubes in a 
        3D procedurally generated world. 
        In our version of the game, we will use a 2D pre-
        generated world`,
        link: "https://osa-minecraft.netlify.app",
        img: minecraftImg
    },
    {
        id:102,
        title: "Dice Game",
        description: `A fun dice game
        The game has 2 players, playing in rounds.
        In each turn, a player rolls 2 dice as many times as he
        wishes.`,
        link: "https://dicegame-osa.netlify.app",
        img: dicegameImg
    },
    {
        id:103,
        title: "Flights Booking",
        description: `Travel planner website with user authentication,
        flight management, and booking features. This
        project can serve as a valuable hands-on experience.`,
        link: "https://fly-with-us.netlify.app",
        img: flightsBookingImg
    }
];

export default projectsData;