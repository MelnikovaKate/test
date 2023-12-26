import React, { FC, useState, PropsWithChildren } from 'react';
import styles from './PopupWindow.module.less';
import { Button, Modal } from 'antd';
import { ModalWindowText } from 'enums/ModalWindowText';

interface IPopupWindowProps extends PropsWithChildren {
    buttonText?: string;
    title?: string;
    buttonSubmitText?: string;
    viewButtons?: boolean;
    isOpen?: boolean;
    isMainButton?: boolean;
    onClose?: () => void;
}

export const PopupWindow: FC<IPopupWindowProps> = ({
    buttonText = '',
    title = '',
    buttonSubmitText = ModalWindowText.Submit,
    viewButtons = true,
    isOpen = false,
    isMainButton = true,
    children,
    onClose = () => {}
}) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        setConfirmLoading(true);
        setTimeout(() => {
        setIsModalOpen(false);
          setConfirmLoading(false);
        }, 1000);
      };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <div>
            {isMainButton && (
                <Button className={styles.button} onClick={showModal}>
                    {buttonText}
                </Button>
            )}
            <Modal
                title={title}
                open={isModalOpen}
                confirmLoading={confirmLoading}
                width={1000}
                onOk={handleSubmit}
                onCancel={handleCancel}
                afterClose={handleClose}
                footer={viewButtons ? [
                    <Button key="cancel" className={styles.buttonCancel} onClick={handleCancel}>
                        {ModalWindowText.Cancel}
                    </Button>,
                    <Button key="submit" className={styles.buttonSubmit} onClick={handleSubmit}>
                        {buttonSubmitText}
                    </Button>,
                    ] : []
                }
            >
                {children}
            </Modal>
        </div>
    );
};