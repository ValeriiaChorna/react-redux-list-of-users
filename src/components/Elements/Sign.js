import React from 'react';
import styled from 'styled-components';

function Sign() {
  return (
    <SignStyledWrap>
      Developed by{' '}
      <a
        href={'https://github.com/ValeriiaChorna'}
        target="_blank"
        rel="nofollow noreferrer"
      >
        @valeriia_chorna
      </a>{' '}
      2022
    </SignStyledWrap>
  );
}

export default Sign;

const SignStyledWrap = styled.div`
  width: 100%;
  color: gray;
  text-align: center;
  padding: 20px;
`;
