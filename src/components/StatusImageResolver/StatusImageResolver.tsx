import { CheckOutlined, ClockCircleOutlined, CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import React, { FC } from 'react'; 
import styles from './StatusImageResolver.module.less';
    
interface IStatusImageResolverProps {
    status: number;
}

export const StatusImageResolver: FC<IStatusImageResolverProps> = ({ status }) => {
    const imageRender = (): any => {
      switch (status) {
        case 1:
            return (
                <PlusCircleOutlined className={styles.new} />
            );
        case 2:
          return (
                <ClockCircleOutlined className={styles.inProcess} />
          );
        case 3:
            return (
                <CheckOutlined className={styles.finished} />
            );
        case 4:
          return (
                <CloseOutlined className={styles.rejected} />
          );
  
        default:
          return <div />;
      }
    };
  
    return <div>{imageRender()}</div>;
  };
  