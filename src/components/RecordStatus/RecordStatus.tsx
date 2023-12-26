import React, { FC } from 'react';
import { Typography } from 'antd';
import styles from './RecordStatus.module.less';
import cn from 'classnames';
import { RecordStatusText } from 'enums/RecordStatusText';

const { Text } = Typography;
    
interface IRecordStatusProps {
    status: number;
}

const RecordStatus: FC<IRecordStatusProps> = ({ status }) => {
    const recordStatusRender = (): any => {
      switch (status) {
        case 1:
            return (
              <Text className={cn(styles.status, styles.new)}>{RecordStatusText.New}</Text>
            );
        case 2:
          return (
                <Text className={cn(styles.status, styles.inProcess)}>{RecordStatusText.InProcces}</Text>
          );
        case 3:
            return (
                <Text className={cn(styles.status, styles.finished)}>{RecordStatusText.Finished}</Text>
            );
        case 4:
          return (
                <Text className={cn(styles.status, styles.rejected)}>{RecordStatusText.Rejected}</Text>
          );
  
        default:
          return <div />;
      }
    };
  
    return <div>{recordStatusRender()}</div>;
  };
  
  export default RecordStatus;