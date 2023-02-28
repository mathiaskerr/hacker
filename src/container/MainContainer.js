import List from "../components/List";
import ListItem from "../components/ListItem";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";

const MainContainer = () => {
  const [stories, setStories] = useState([]);
  

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => {
        const storyPromises = data.slice(0, 30).map((storyId) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
          ).then((result) => result.json());
        });

        Promise.all(storyPromises).then((data) => {
          setStories(data);
        });
      });
  }, []);

  const searchBar = (text) => {
    const search = stories.filter((story) => {
      return story.title.includes(text)
        
    })
    setStories(search) 
  }
  

  return (
    <div>
      <h1>Hacker News</h1>
      <Search searchBar={searchBar}/>
      <List stories={stories} />
    </div>
  );
};

export default MainContainer;
