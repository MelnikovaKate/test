import React from 'react';
import { Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

export const TagRender = (props: CustomTagProps) => {
    const { label, closable, onClose } = props;

    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={'gold'}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
            >
            {label}
        </Tag>
    );
};
    