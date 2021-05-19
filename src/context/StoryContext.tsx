import { createContext, ReactNode, useState } from 'react';
import { Story, Words } from '../model/Story';

interface StoryContextValue {
    stories: Story[];
    addStories: (story:Story) => void;
    getStoryById: (storyId:number) => Story|undefined;
    // getWordsById: (storyId:number) => Words|undefined;
}

const defaultValue: StoryContextValue = {
    stories: [],
    addStories: () => {},
    getStoryById: () => undefined,
    // getWordsById: () => undefined
}

export const StoryContext = createContext(defaultValue);

let nextId: number = 4;

export function StoryContextProvider({ children }: { children: ReactNode}) {

    const [ stories, setStories ] = useState<Story[]> ([

        { id: 1,
            title: "General Tso by Grant",
            words: [{
                place: "the Eiffel Tower",
                person: "General Tso",
                sillyWord: "Chewy",
                occupation: "lawyer",
                number: 42,
                brandTagline: "I'm lovin' it!"
            }
        ]},

        { id: 2,
            title: "The mayor by Damien",
            words: [{
                place: "Detroit",
                person: "the mayor",
                sillyWord: "Pfffft",
                occupation: "orthodontist",
                number: 124600,
                brandTagline: "Come fly the friendly skies"
            }
        ]},

        { id: 3,
            title: "Dwayne 'The Rock' Johnson by Kaleigh",
            words: [{
                place: "Miami",
                person: "Dwayne 'The Rock' Johnson",
                sillyWord: "Silly word",
                occupation: "clown",
                number: 555,
                brandTagline: "When you're here, your're family"
            }
        ]},

    ]);

    function addStories(story: Story): void {
        const id = nextId++;
        setStories(prev => [ ...prev, { ...story, id }]);
    };

    function getStoryById(storyId: number): Story|undefined {
        return stories.find(story => story.id === storyId);
    }

    // function getWordsById(storyId: number): Words|undefined {
    //     return words.find(word => word.id === word);
    // }

    return (
        <StoryContext.Provider value={{stories, addStories, getStoryById}} >
            {children}
        </StoryContext.Provider>
    );

}