import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import RecommendedList from "./components/RecommendedList";
function App() {
    const [list] = useState([
        {
            subheading: "Technology",
            title: "#AppleEvent",
            subtitle: "18.6K posts",
            thumbnail: "imgs/thumbnails/technology.png",
        },
        {
            subheading: "Health",
            title: "#WellnessWednesday",
            subtitle: "12.3K posts",
            thumbnail: "imgs/thumbnails/health.png",
        },
        {
            subheading: "Travel",
            title: "#Wanderlust",
            subtitle: "22.7K posts",
            thumbnail: "imgs/thumbnails/travel.png",
        },
        {
            subheading: "Food",
            title: "#RecipeOfTheDay",
            subtitle: "15.8K posts",
            thumbnail: "imgs/thumbnails/food.png",
        },
        {
            subheading: "Entertainment",
            title: "#NewRelease",
            subtitle: "30.5K posts",
            thumbnail: "imgs/thumbnails/entertainment.png",
        },
        {
            subheading: "Fitness",
            title: "#WorkoutWednesday",
            subtitle: "9.4K posts",
            thumbnail: "imgs/thumbnails/fitness.png",
        },
        {
            subheading: "Fashion",
            title: "#OOTD",
            subtitle: "25.2K posts",
            thumbnail: "imgs/thumbnails/fashion.png",
        },
    ]);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "p-8 w-[500px]", children: _jsx(RecommendedList, { title: "Recommended List", items: list, buttonText: "Follow", buttonAction: () => console.log("Button clicked") }) }) }));
}
export default App;
//# sourceMappingURL=App.js.map