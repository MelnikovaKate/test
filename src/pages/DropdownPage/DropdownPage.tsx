import React, { useState } from 'react';
import { filterData } from 'constants/filterData';
import styles from './DropdownPage.module.less';
import { Dropdown } from 'components/Dropdown';
import { Tabs } from 'components/Tabs';
import { CustomSelect } from 'components/CustomSelect';
import { ButtonText } from 'enums/ButtonText.enum';

interface TabsValues {
    id: string;
    data: string[];
}

export const DropdownPage = () => {
    const [selectedTabsValues, setSelectedTabsValues] = useState<TabsValues[]>([]);
    const totalCount = selectedTabsValues.map(tab => tab.data).map(data => data.length).reduce((total, currentValue) => total + currentValue, 0);

    const getTabValues = (id: string): string[] => {
        return selectedTabsValues?.find(s => s.id === id)?.data || [];
    }

    const handleSelect = (tabId: string, data: string[]) => {
        setSelectedTabsValues((prev) => {
            const values = prev as TabsValues[];
            const tabWithIdAlreadyExists = values?.some(p => p.id === tabId);
            if (!!tabWithIdAlreadyExists) {
                const elementsWithoutTab = values?.filter(t => t.id !== tabId);
                return [...elementsWithoutTab, {id: tabId, data: data}];
            }
            else {
                return [...values as TabsValues[], {id: tabId, data: data}];
            }
        });
    };

    const handleDelete = (tabId: string, deletedItem: string) => {
        setSelectedTabsValues((prev) => {
            const values = prev as TabsValues[];
            const tab = values?.find(p => p.id === tabId);
            const elementsWithoutTab = values?.filter(t => t.id !== tabId);
            return [...elementsWithoutTab as TabsValues[], {id: tabId, data: tab?.data.filter(d => d !== deletedItem)!}];
        });
    };
      
    return (
        <div className={styles.container}>
            <Dropdown
                buttonText={ButtonText.SearchText}
                buttonContent={
                    selectedTabsValues && totalCount > 0 && (
                        <span className={styles.label}>
                            {totalCount}
                        </span>
                    )
                }
            >
                <Tabs tabsData={filterData.map(data => data.name)} >
                    {filterData.map(data => (
                        <div key={data.id}>
                            <CustomSelect
                                options={data.data}
                                dataId={data.id}
                                selectedValues={getTabValues(data.id)}
                                handleSelect={handleSelect}
                                handleDelete={handleDelete}
                            />
                        </div>
                    ))}
                </Tabs>
            </Dropdown>
        </div>
    );
};