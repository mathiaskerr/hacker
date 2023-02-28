import ListItem from "./ListItem";

const List = ({stories}) => {
const storyNodes= stories.map((story, index) => {
  return <ListItem key={index} story={story}/>
})


    return (
            <div>
               <ul>
                {storyNodes}
               </ul>
            </div>
        );
    }
    
    export default List;
    