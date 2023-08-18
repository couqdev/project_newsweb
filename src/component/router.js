import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Life from "./category/life/Life";
import Detail from "./detail/Detail";
import Education from "./category/education/Education";
import CurrentEvents from "./category/current_events/CurrentEvents";
import Business from "./category/business/Business";
import Sport from "./category/sport/Sport";
import Entertainment from "./category/entertainment/Entertainment";
import Home from "./category/home/Home";
import Travel from "./category/travel/Travel";
import RealEstate from "./category/real_estate/RealEstate";
import SearchNews from "./search/SearchNews";
import Finance from "./category/business/Finance";
import Invest from "./category/business/Invest";
import Market from "./category/business/Market";
import Businessmen from "./category/business/Businessmen";
import FinanceSupport from "./category/business/FinanceSupport";
import InternationalFootball from "./category/sport/InternationalFootball";
import VNFootball from "./category/sport/VNFootball";
import TransferNews from "./category/sport/TransferNews";
import OtherSport from "./category/sport/OtherSport";
import Backstage from "./category/sport/Backstage";
import StarWorld from "./category/entertainment/StarWorld";
import Miss from "./category/entertainment/Miss";
import Fashion from "./category/entertainment/Fashion";
import Music from "./category/entertainment/Music";
import Movie from "./category/entertainment/Movie";
import TV from "./category/entertainment/TV";
import Family from "./category/life/Family";
import Story from "./category/life/Story";
import Cuisine from "./category/life/Cuisine";
import Youth from "./category/life/Youth";
import Tips from "./category/life/Tips";
import Confide from "./category/life/Confide";
import Congress from "./category/current_events/Congress";
import Traffic from "./category/current_events/Traffic";
import Insurance from "./category/current_events/Insurance";
import Corruption from "./category/current_events/Corruption";
import NaitionalDefense from "./category/current_events/NaitionalDefense";
import Teacher from "./category/education/Teacher";
import Admissions from "./category/education/Admissions";
import YoungFace from "./category/education/YoungFace";
import Parents from "./category/education/Parents";
import StudyAbroad from "./category/education/StudyAbroad";
import Science from "./category/education/Science";
import English from "./category/education/English";
import Recruitment from "./category/education/Recruitment";
import AiContest from "./category/education/AiContest";
import ViewedNews from "./category/viewed_news/ViewedNews";
import Go from "./category/travel/Go";
import Eat from "./category/travel/Eat";
import Sleep from "./category/travel/Sleep";
import Project from "./category/real_estate/Project";
import Interior from "./category/real_estate/Interior";
import Advise from "./category/real_estate/Advise";
import Stock_Market from "./category/real_estate/Stock_Market";
import Beautiful_House from "./category/real_estate/Beautiful_House";
import Change_to_settle_down from "./category/real_estate/Change_to_settle_down";
import Podcast from "./category/podcast/Podcast";
import PodcastDetail from "./detail/PodcastDetail";
import PodcastCurrentEvents from "./category/podcast/PodcastCurrentEvents";
import PodcastSight from "./category/podcast/PodcastSight";
import PodcastStrange from "./category/podcast/PodcastStrange";
import PodcastLiveYoung from "./category/podcast/PodcastLiveYoung";
import PodcastGoodBook from "./category/podcast/PodcastGoodBook";
import SearchByVoice from "./search/SearchByVoice";

export const appRouter = createBrowserRouter([{

    path: '/',
    element: <App/>,
    children: [{path: "life", element: <Life/>},
        {path: "education", element: <Education/>},
        {path: "current-events", element: <CurrentEvents/>},
        {path: "life/family", element: <Family/>},
        {path: "life/story", element: <Story/>},
        {path: "life/cuisine", element: <Cuisine/>},
        {path: "life/youth", element: <Youth/>},
        {path: "life/tip", element: <Tips/>},
        {path: "life/confide", element: <Confide/>},

        {path: "current-events/congress", element: <Congress/>},
        {path: "current-events/traffic", element: <Traffic/>},
        {path: "current-events/insurance", element: <Insurance/>},
        {path: "current-events/corruption", element: <Corruption/>},
        {path: "current-events/naitional-defense", element: <NaitionalDefense/>},

        {path: "education/teacher", element: <Teacher/>},
        {path: "education/admissions", element: <Admissions/>},
        {path: "education/young-face", element: <YoungFace/>},
        {path: "education/parents", element: <Parents/>},
        {path: "education/study-abroad", element: <StudyAbroad/>},
        {path: "education/science", element: <Science/>},
        {path: "education/english", element: <English/>},
        {path: "education/recruitment", element: <Recruitment/>},
        {path: "education/ai-contest", element: <AiContest/>},
        {path: "education/voice", element: <SearchByVoice/>},
        {
            path: "news/:link",
            element: <Detail/>,
        },
        {
            path: "",
            element: <Home/>,
        },
        {
            path: "travel",
            element: <Travel/>,
        },
        {
            path: "real-estate",
            element: <RealEstate/>,
        },
        {
            path: "search/:name",
            element: <SearchNews/>,
        },
        {
            path: "/search/news/:link",
            element: <Detail/>,
        },
        //business
        {path: "business", element: <Business/>},
        {path: "business/finance", element: <Finance/>},
        {path: "business/invest", element: <Invest/>},
        {path: "business/market", element: <Market/>},
        {path: "business/businessmen", element: <Businessmen/>},
        {path: "business/finance-support", element: <FinanceSupport/>},
        //sport
        {path: "sport", element: <Sport/>},
        {path: "sport/international-football", element: <InternationalFootball/>},
        {path: "sport/vn-football", element: <VNFootball/>},
        {path: "sport/transfer-news", element: <TransferNews/>},
        {path: "sport/other-sport", element: <OtherSport/>},
        {path: "sport/backstage", element: <Backstage/>},
        //entertainment
        {path: "entertainment", element: <Entertainment/>},
        {path: "entertainment/star-world", element: <StarWorld/>},
        {path: "entertainment/miss", element: <Miss/>},
        {path: "entertainment/fashion", element: <Fashion/>},
        {path: "entertainment/music", element: <Music/>},
        {path: "entertainment/movie", element: <Movie/>},
        {path: "entertainment/tv", element: <TV/>},
        //viewed-news
        {path: "viewed-news", element: <ViewedNews/>},

        {path: "go", element: <Go/>},
        {path: "eat", element: <Eat/>},
        {path: "sleep", element: <Sleep/>},
        {path: "project", element: <Project/>},
        {path: "interior", element: <Interior/>},
        {path: "advise", element: <Advise/>},
        {path: "stock-market", element: <Stock_Market/>},
        {path: "beautiful-house", element: <Beautiful_House/>},
        {path: "chance-to-settle-down", element: <Change_to_settle_down/>},
        //podcast
        {path: "podcast", element: <Podcast/>},
        {path: "podcast/current-event", element: <PodcastCurrentEvents/>},
        // {path: "podcast/sight", element: <PodcastSight/>},
        // {path: "podcast/strange", element: <PodcastStrange/>},
        {path: "podcast/live-young", element: <PodcastLiveYoung/>},
        {path: "podcast/good-book", element: <PodcastGoodBook/>},
        {
            path: "podcast/:link",
            element: <PodcastDetail/>,
        },
    ]
}]);