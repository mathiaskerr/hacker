import List from "../components/List";
import ListItem from "../components/ListItem";
import React, {useEffect, useState } from "react";

const MainContainer = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then((res) => res.json())
            .then((data) => {const storyPromises = data.slice(0,30).map((storyId) => {
                return fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
                ).then((result) => result.json());
            });
    
            Promise.all(storyPromises).then((data) => {
                setStories(data);
                
            });});

        

    }, []);




    return (
        <div>
            MainContainer
            <List stories={stories}/>
        </div>
    );
};

export default MainContainer;
