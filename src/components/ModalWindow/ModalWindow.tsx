import React, { useState, FC, Dispatch, SetStateAction, useRef, useEffect, PropsWithChildren } from 'react';
import styles from './ModalWindow.module.less';
import cn from 'classnames';
import { Button, Modal } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface IModalWindow extends PropsWithChildren {
    title: string;
    buttonText: string;
    buttonIcon?: React.ReactNode;
    submitButtonText?: string;
    handleSubmit: () => void;
    handleCancel?: () => void;
}

export const ModalWindow: FC<IModalWindow> = ({
    title,
    buttonText,
    buttonIcon,
    submitButtonText = 'Submit',
    handleSubmit,
    handleCancel = () => {},
    children 
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [size, setSize] = useState<SizeType>('large');

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const onSubmit = () => {
      setIsModalOpen(false);
      handleSubmit();
    };
  
    const onCancel = () => {
      setIsModalOpen(false);
      handleCancel();
    };
    
    return (
        <div className={styles.container}>
            <Button type="primary" icon={buttonIcon} size={size} onClick={showModal} className={styles.button}>
                {buttonText}
            </Button>
            <Modal title={title} open={isModalOpen} okText={submitButtonText} okButtonProps={{className: styles.button}} onOk={onSubmit} onCancel={onCancel}>
                {children}
            </Modal>
        </div>
    );
};