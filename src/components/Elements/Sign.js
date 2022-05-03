import React from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';

function Sign() {
  return (
    <SignStyledWrap>
      Developed by{' '}
      <ExternalLink href={'https://github.com/ValeriiaChorna'}>
        @valeriia_chorna
      </ExternalLink>{' '}
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
