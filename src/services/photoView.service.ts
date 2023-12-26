import { Photos } from "constants/photos";

export const PhotoViewService = () => {
    let photo = (photoId: string) => {
        return Photos.find(photo => photo.id === photoId);
    };

    return { photo };
}