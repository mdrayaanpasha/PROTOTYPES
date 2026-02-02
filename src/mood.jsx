import happy from "./assets/images/friends/happy.avif"
import { ArrowUpRight } from "lucide-react";
import { StarIcon } from "lucide-react";

 const Data = {
        "happy":[
            {
                "episode": "Season 4, Episode 12",
                "description": "The boys win the girls' apartment in a trivia contest; Phoebe gets the embryos implanted.",
                "title": "The One with the Embryos",
                "rating on imdb": "9.5/10",
                "last updated today": "2026-01-24",
                "img":"https://m.media-amazon.com/images/M/MV5BMTY4ODkwMTQxOF5BMl5BanBnXkFtZTgwMjQyODU0MDE@._V1_QL75_UX640_.jpg"
            },
            {
                "episode": "Season 5, Episode 14",
                "description": "Phoebe and Rachel try to mess with Chandler and Monica to make them confess their relationship.",
                "title": "The One Where Everybody Finds Out",
                "rating on imdb": "9.7/10",
                "last updated today": "2026-01-24",
                "img":"https://m.media-amazon.com/images/M/MV5BODUyMTkxM2QtMmVmNS00MzVhLTg3M2ItN2RhMWRhMjJkNDg0XkEyXkFqcGc@._V1_QL75_UX776_.jpg"
            },
            {
                "episode": "Season 2, Episode 14",
                "description": "The prom video reveals Ross's long-standing love for Rachel; Phoebe declares he is her 'lobster'.",
                "title": "The One with the Prom Video",
                "rating on imdb": "9.4/10",
                "last updated today": "2026-01-24",
                "img":"https://m.media-amazon.com/images/M/MV5BY2YxMzlmOTMtYjY1OC00MjI4LTlmNzktODAwMjc1ODA2ZmM0XkEyXkFqcGc@._V1_QL75_UX582_.jpg"
                
            },
            {
                "episode": "Season 8, Episode 9",
                "description": "Brad Pitt guest stars as Will, who co-founded the 'I Hate Rachel' club with Ross in high school.",
                "title": "The One with the Rumor",
                "rating on imdb": "9.3/10",
                "last updated today": "2026-01-24",
                "img":"https://m.media-amazon.com/images/M/MV5BNjM2NDUwNDA2M15BMl5BanBnXkFtZTgwODI5OTU0MDE@._V1_QL75_UX650_.jpg"
            },
            {
                "episode": "Season 6, Episode 25",
                "description": "Chandler proposes to Monica in a candlelit room after a series of mishaps and Richard's return.",
                "title": "The One with the Proposal",
                "rating on imdb": "9.3/10",
                "last updated today": "2026-01-24",
                "img":"https://m.media-amazon.com/images/M/MV5BMjE4MjM4ODUwMl5BMl5BanBnXkFtZTgwNzc4MjU0MDE@._V1_QL75_UX630_.jpg"
            },
            {
                "episode": "Season 6, Episode 9",
                "description": "Ross and Monica confess secrets to their parents; Rachel makes a trifle with beef and peas.",
                "title": "The One Where Ross Got High",
                "rating on imdb": "9.2/10",
                "last updated today": "2026-01-24",
                "img":"https://m.media-amazon.com/images/M/MV5BMTc5MjA5OTUzNF5BMl5BanBnXkFtZTgwNjk4MjU0MDE@._V1_QL75_UX378_.jpg"
            },
            // {
            //     "episode": "Season 5, Episode 8",
            //     "description": "The gang reminisces about worst Thanksgivings; Monica puts a turkey on her head to cheer up Chandler.",
            //     "title": "The One with All the Thanksgivings",
            //     "rating on imdb": "9.2/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 5, Episode 16",
            //     "description": "Ross screams 'Pivot!' while moving a couch; Joey has a dream about Monica.",
            //     "title": "The One with the Cop",
            //     "rating on imdb": "9.1/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 3, Episode 2",
            //     "description": "Ross tries to get everyone ready for a function; Joey wears all of Chandler's clothes.",
            //     "title": "The One Where No One's Ready",
            //     "rating on imdb": "9.0/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 6, Episode 17",
            //     "description": "Ross tries to teach Rachel and Phoebe the concept of 'Unagi' (total awareness).",
            //     "title": "The One with Unagi",
            //     "rating on imdb": "9.1/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 3, Episode 9",
            //     "description": "Monica and Ross compete for the Geller Cup in a thanksgiving football game.",
            //     "title": "The One with the Football",
            //     "rating on imdb": "9.0/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 1, Episode 7",
            //     "description": "Chandler gets stuck in an ATM vestibule with a model; Ross tries to tell Rachel he likes her.",
            //     "title": "The One with the Blackout",
            //     "rating on imdb": "9.0/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 4, Episode 1",
            //     "description": "Monica gets stung by a jellyfish; Ross chooses between Rachel and Bonnie.",
            //     "title": "The One with the Jellyfish",
            //     "rating on imdb": "9.1/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 7, Episode 11",
            //     "description": "Chandler and Rachel steal and eat a neighbor's delicious cheesecake off the floor.",
            //     "title": "The One with All the Cheesecakes",
            //     "rating on imdb": "8.8/10",
            //     "last updated today": "2026-01-24"
            // },
            // {
            //     "episode": "Season 7, Episode 10",
            //     "description": "Ross dresses up as the 'Holiday Armadillo' to teach Ben about Hanukkah.",
            //     "title": "The One with the Holiday Armadillo",
            //     "rating on imdb": "8.5/10",
            //     "last updated today": "2026-01-24"
            // }
        ]
    }

    const mood = "happy";

    const HeroData = {
        "happy":{
            "title": "Feeling",
            "spanText": " Happy!",
            "moodcolor": "amber-400",
            "description": "Based on your mood, here are some Friends episodes that will keep your spirits high and bring a smile to your face!",
            "image": happy
        }
    }
    
function EpisodeCard({episode,description,title,rating,lastUpdated,imglink}){
    return(
        <div className="flex items-center gap-10 mb-10 overflow-hidden m-0 p-0">
            <img 
                className="h-[20vh] w-[20vw] object-cover rounded-3xl" 
                src={imglink} 
                alt="dummy" 
            />
            <div className="text w-[79vw] flex flex-col gap-3">
                <h1 className={`font-bold text-xl p-0 m-0 text-${HeroData[mood].moodcolor} flex items-center gap-4`}>
                    <div>
                        {episode}
                    </div>
                    <span className="text-white/20">
                        .
                    </span>
                    <div className="color-white text-sm flex items-center gap-1">
                        <StarIcon className="inline-block ml-2 h-5 w-5" />
                        <p className="text-white/60">{rating}</p>

                    </div>
                 </h1>
                <h1 className="font-bold text-3xl  p-0 m-0">{title}</h1>
                <p className="text-white/70 text-base leading-relaxed max-w-2xl line-clamp-2">{description}</p>
{/* <p className="text-white/70 text-base leading-relaxed max-w-2xl line-clamp-2">
            {description}
        </p> */}
            </div>
            <button className="border-white/30 border-1 flex items-center justify-evenly px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors ">
                Watch
                <ArrowUpRight className="inline-block ml-2 h-5 w-5" />
            </button>

        </div>
    )
}

export default function Mood() {
   
    return (
        <div className="bg-black font-serif text-white">
            <div className="flex items-center justify-around h-[100vh]">
                <img 
                    src={HeroData[mood].image}
                    className="h-[70vh] w-[40vw] object-cover mask-b-from-0"
                    alt="" 
                />
                 <div className="max-w-[30vw]">
                    
                    <h1 className="text-5xl font-bold mb-6">
                        {HeroData[mood].title} <span className={`text-${HeroData[mood].moodcolor}`}>{HeroData[mood].spanText}</span>
                    </h1>

                    <h1>
                        {HeroData[mood].description}
                    </h1>
                 </div>
                
            </div>

            <div className="episode-list p-5">
                {Data[mood].map((ep,index) => (
                    <EpisodeCard 
                        key={index}
                        episode={ep.episode}
                        description={ep.description}
                        title={ep.title}
                        rating={ep["rating on imdb"]}
                        lastUpdated={ep["last updated today"]}
                        imglink={ep.img}
                    />
                ))}
            </div>
        </div>
    )
}
