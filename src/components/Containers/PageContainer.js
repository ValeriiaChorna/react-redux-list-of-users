import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

function PageContainer({ loading, error, children }) {
  return (
    <>
      {!!loading && (
        <Center>
          <Spin size="large" />
        </Center>
      )}
      {!loading && children}
      {!!error && (
        <Center>
          <div>Error: {error.message}</div>
        </Center>
      )}
    </>
  );
}

export default PageContainer;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
