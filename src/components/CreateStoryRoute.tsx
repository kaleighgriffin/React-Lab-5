import { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { StoryContext } from '../context/StoryContext';
import { Story } from '../model/Story';

function CreateStory() {

    const { addStories } = useContext(StoryContext);
    const history = useHistory();

    const [ title, setTitle ] = useState("");
    const [ words, setWords ] = useState([]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const story: Story = {
            title: title,
            words: words
        };

        addStories(story);
        setTitle("");
        setWords([]);
        history.push("/create-story");
    }
    
    return (
        <form className="CreateStory" onSubmit={handleSubmit}>
            <div>
                <label>Your Name:
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </label>
            </div>
            <div>
                <h3>Words</h3>
                {/* <label>Place:
                    <input type="text" value="place" onChange={(e) => setWords(e.target.value)} />
                </label>
                <label>Person:
                    <input type="text" value="person" onChange={(e) => setWords(e.target.value)} />
                </label>
                <label>Silly Word:
                    <input type="text" value="sillyWord" onChange={(e) => setWords(e.target.value)} />
                </label>
                <label>Occupation:
                    <input type="text" value="occupation" onChange={(e) => setWords(e.target.value)} />
                </label>
                <label>Number:
                    <input type="number" value="number" onChange={(e) => setWords(e.target.value)} />
                </label>
                <label>Brand Tagline:
                    <input type="text" value="brandTagline" onChange={(e) => setWords(e.target.value)} />
                </label> */}
            </div>
            <button type="submit">Save & View Story!</button>
        </form>
    );

}

export default CreateStory;