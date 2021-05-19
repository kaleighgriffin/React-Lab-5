import { useContext } from 'react';
import { Story, Words } from '../model/Story';
import { StoryContext } from '../context/StoryContext';
import { useParams } from 'react-router';

interface RouteParams {
    id: string;
}

function ViewStory() {

    const { id } = useParams<RouteParams>();
    const { getStoryById } = useContext(StoryContext);

    const story = getStoryById(parseInt(id));
    // const words = getStoryById(parseInt(id));

    return (
        <div className="ViewStory">
            <h3>{story?.title}</h3>
            <p>
                {/* On my way to {words?.place}  */}
            </p>
        </div>
    );

}

export default ViewStory;