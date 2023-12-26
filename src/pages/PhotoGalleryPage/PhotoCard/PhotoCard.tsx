import React, { useState, FC, useEffect } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import styles from './PhotoCard.module.less';
import { Path } from 'enums';
import { IPhoto } from 'types/photoCard.type';
import { useNavigate } from 'react-router-dom';
import { PhotoCardText } from 'enums/PhotoCardText';

interface IPhotoCard {
    photo: IPhoto;
}

export const PhotoCard: FC<IPhotoCard> = ({ photo }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handlePreview = () => {
        navigate(`/${Path.Photo}/${photo.id}`)
    }

    return (
        <div
            className={styles.container}
            onClick={handlePreview}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={photo.image} className={styles.image} />
            {isHovered && (
                <div className={styles.previewWrapper}>
                    <span>
                        <EyeOutlined /> {PhotoCardText.View}
                    </span>
                </div>
            )}
        </div>
    );
};