import { Layout } from 'antd';
import { ReactNode } from 'react';

import styles from './App.module.less';
import { Sidebar } from '../Sidebar';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store/store';

const { Content } = Layout;

interface IProps {
  children: ReactNode;
}

export const Main = ({ children }: IProps) => {

  return (
    <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={null}
        >
          <Layout className={styles.app} hasSider>
              <Sidebar />
              <Layout>
                  <Content className={styles.main}>{children}</Content>
              </Layout>
          </Layout>
        </PersistGate>
    </Provider>
   
  );
};