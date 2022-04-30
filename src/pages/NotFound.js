import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../routes';

const NotFound = () => (
  <NotFoundContainer>
    <h1 className="status">404</h1>
    <p>
      Sorry, page not found, go to <Link to={routes.HOMEPAGE}>homepage</Link>.
    </p>
  </NotFoundContainer>
);

export default NotFound;

const NotFoundContainer = styled.div`
  textalign: 'center';

  .status {
    fontsize: 96;
    marginbottom: 16;
  }
`;
