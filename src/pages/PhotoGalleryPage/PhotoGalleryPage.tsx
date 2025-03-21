import React from 'react';
import { PhotoCard } from './PhotoCard';
import styles from './PhotoGalleryPage.module.less';
import { Photos } from 'constants/photos';

export const PhotoGalleryPage = () => {
    return (
        <div className={styles.container}>
            {Photos.map(item => (
                <PhotoCard photo={item} key={item.id + item.image}/>
            ))}
        </div>
    );
};