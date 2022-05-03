import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../routes';

function NotFound() {
  return (
    <NotFoundContainer>
      <Status>404</Status>
      <p>
        Sorry, page not found, go to <Link to={routes.HOMEPAGE}>homepage</Link>.
      </p>
    </NotFoundContainer>
  );
}

export default NotFound;

const NotFoundContainer = styled.div`
  textalign: 'center';
`;

const Status = styled.h1`
  fontsize: 96;
  marginbottom: 16;
`;
