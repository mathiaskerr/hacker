


const ListItem = ({story}) => {


    return (
            <div>
               <p><a href={story.url}>{story.title}</a></p>
        
            </div>
        );
    }
    
    export default ListItem;
    