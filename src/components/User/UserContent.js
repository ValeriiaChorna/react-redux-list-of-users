import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Button } from 'antd';
import UserDetails from './UserDetails';
import ExternalLink from '../Elements/ExternalLink';

function UserContent({ data = {}, onBack = () => {} }) {
  const { avatarUrl, profileLink, login } = data;
  return (
    <>
      <BackButton onClick={onBack}>Back to users</BackButton>
      <h1>User details: {login}</h1>
      <UserContentWrap>
        <Row gutter={40} justify="space-around" align={'middle'}>
          <Col xs={24} md={12}>
            <ImgCol>
              <ExternalLink href={profileLink}>
                <ImageWrap>
                  <UserImage src={avatarUrl} width={260} height={260} />
                </ImageWrap>
              </ExternalLink>
            </ImgCol>
          </Col>
          <Col xs={24} md={12}>
            <UserDetails data={data} />
          </Col>
        </Row>
      </UserContentWrap>
    </>
  );
}

export default UserContent;

const BackButton = styled(Button)`
  margin-bottom: 40px;
`;

const UserContentWrap = styled.div`
  width: 100%;
  background-color: white;
  padding: 60px 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const ImgCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    border-right: 1px solid gray;
  }
`;

const ImageWrap = styled.div`
  width: fit-content;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
`;
