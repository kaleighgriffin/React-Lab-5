export interface Story {
    id?: number;
    title: string;
    words: Words[];
}

export interface Words {
    place: string;
    person: string;
    sillyWord: string;
    occupation: string;
    number: number;
    brandTagline: string;
}