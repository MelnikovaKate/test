import React, { useState, FC, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Button from 'antd/es/button';
import styles from './PhotoViewForm.module.less';
import { Image } from 'antd';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { PhotoViewService } from 'services/photoView.service';
import { IPhoto } from 'types/photoCard.type';
import { useAppSelector } from 'store';
import { getCurrentAuth } from 'store/auth.slice';
import { PhotoViewFormText } from 'enums/PhotoViewFormText';

interface IPhotoViewForm {
    photo: IPhoto;
    username: string;
}

export const PhotoViewForm: FC<IPhotoViewForm> = ({ photo, username }) => {
    return (
        <div className={styles.photoWrapper}>
            <Image
                width={400}
                src={photo.image}
            />
            <div className={styles.buttonWrapper}>
                <Button icon={<PlusOutlined />}>{PhotoViewFormText.AddComment}</Button>
            </div>
            <div className={styles.commentsContainer}>
                <span className={styles.commentsTitle}>{PhotoViewFormText.Comments}</span>
                {photo.comments.map((comment, index) => (
                    <div
                        className={cn(
                            styles.comment, index !== photo.comments.length - 1 && styles.border
                        )}
                        key={photo.id}
                    >
                        <div className={styles.commentInfo}>
                            <span className={styles.commentOwner}>{comment.owner.username}</span>
                            <p className={styles.commentText}>{comment.text}</p>
                        </div>
                        {comment.owner.username === username && (
                            <Button icon={<DeleteOutlined />}></Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};