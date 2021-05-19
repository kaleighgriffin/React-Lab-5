import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoryContext } from '../context/StoryContext';

function ListStories() {

    const { stories } = useContext(StoryContext);

    return (
        <div className="ListStories">
            <h2>Pick a story</h2>
            <ul>
                {stories.map(story =>
                <li>
                    <Link to={`/story/${story.id}`}>{story.title}</Link>
                </li>
                )}
            </ul>
        </div>
    );

};

export default ListStories;