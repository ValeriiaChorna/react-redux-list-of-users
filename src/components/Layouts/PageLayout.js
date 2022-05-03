import styled from 'styled-components';

const PageLayout = styled.div`
  margin: 0 auto;
  padding: 20px 10px;
  max-width: 1200px;
  min-height: 100%;

  @media (min-width: 1024px) {
    padding: 30px 50px;
  }
`;

export default PageLayout;
