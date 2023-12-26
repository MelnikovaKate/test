export interface IComment {
    id: string;
    owner: {
        id: string;
        fullName: string;
        username: string;
    }
    text: string;
}