import React, { FC } from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TagRender } from './Tag/TagRender';
import { Select } from 'antd';

interface ITagSelect {
    size: SizeType;
    placeholder: string;
    options: { value: string}[];
    handleChange: (values: string[]) => void;
}

export const TagSelect: FC<ITagSelect> = ({
    size,
    placeholder,
    options,
    handleChange
}) => (
    <Select
        mode="multiple"
        size={size}
        placeholder={placeholder}
        tagRender={TagRender}
        style={{ width: '100%' }}
        allowClear
        options={options}
        onChange={handleChange}
    />
);