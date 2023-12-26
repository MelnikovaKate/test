// import React, { useState, FC, useEffect } from 'react';
// import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
// import Button from 'antd/es/button';
// import styles from './PhotoViewPage.module.less';
// import { Image } from 'antd';
// import cn from 'classnames';
// import { useParams } from 'react-router-dom';
// import { PhotoViewService } from 'services/photoView.service';
// import { IPhoto } from 'types/photoCard.type';
// import { useAppSelector } from 'store';
// import { getCurrentAuth } from 'store/auth.slice';

// export const PhotoViewPage = () => {
//     const { id } = useParams<{ id: any }>();
//     const { photo } = PhotoViewService();
//     const [data, setData] = useState<IPhoto>({
//         id: '0',
//         image: '',
//         comments: []
//     });

//     const { username } = useAppSelector(getCurrentAuth); 

//     useEffect(() => {
//         let photoData = photo(id);
//         setData(photoData as IPhoto);
//     }, [id]);

//     return (
//         <div className={styles.container}>
//             <div className={styles.photoWrapper}>
//                 <Image
//                     width={400}
//                     src={data!.image}
//                 />
//                 <div className={styles.buttonWrapper}>
//                     <Button icon={<PlusOutlined />}>Add comment</Button>
//                 </div>
//                 <div className={styles.commentsContainer}>
//                     <span className={styles.commentsTitle}>Comments</span>
//                     {data.comments.map((comment, index) => (
//                         <div
//                             className={cn(styles.comment, index !== data.comments.length - 1 && styles.border)}
//                             key={data.id}
//                         >
//                             <div className={styles.commentInfo}>
//                                 <span className={styles.commentOwner}>{comment.owner.username}</span>
//                                 <p className={styles.commentText}>{comment.text}</p>
//                             </div>
//                             {comment.owner.username === username && (
//                                 <Button icon={<DeleteOutlined />}></Button>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

import React, { useState, FC, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Button from 'antd/es/button';
import styles from './PhotoViewPage.module.less';
import { Image } from 'antd';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { PhotoViewService } from 'services/photoView.service';
import { IPhoto } from 'types/photoCard.type';
import { useAppSelector } from 'store';
import { getCurrentAuth } from 'store/auth.slice';
import { PhotoViewForm } from './photoViewForm';
import { initPhoto } from 'constants/initPhoto';

export const PhotoViewPage = () => {
    const { id } = useParams<{ id: any }>();
    const { photo } = PhotoViewService();
    const [photoData, setPhotoData] = useState<IPhoto>(initPhoto);
    const { username } = useAppSelector(getCurrentAuth); 

    useEffect(() => {
        let data = photo(id);
        setPhotoData(data as IPhoto);
    }, [id]);

    return (
        <div className={styles.container}>
            <PhotoViewForm photo={photoData} username={username as string} />
        </div>
    );
};