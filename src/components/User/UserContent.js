import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {
  getDateFromString,
  initUserDataState,
} from '../../helpers/usersHelpers';

function UserContent({ data = { ...initUserDataState } }) {
  const {
    avatarUrl,
    name,
    followers,
    following,
    company,
    email,
    location,
    blog,
    bio,
    createdAt,
  } = data;
  return (
    <UserContentWrap>
      <Row gutter={10} justify="space-around" align={'middle'}>
        <Col xs={24} md={12}>
          <ImgCol>
            <ImageWrap>
              <img src={avatarUrl} width={260} height={260} />
            </ImageWrap>
          </ImgCol>
        </Col>
        <Col xs={24} md={12}>
          <h2>{name}</h2>
          <Row>
            <Col xs={6}>Followers</Col>
            <Col xs={6}>Following</Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span>{followers}</span>
            </Col>
            <Col xs={6}>
              <span>{following}</span>
            </Col>
          </Row>
          <div>
            Email: <span>{email}</span>
          </div>
          <div>
            Blog: <span>{blog}</span>
          </div>
          <div>
            Company: <span>{company}</span>
          </div>
          <div>
            Location: <span>{location}</span>
          </div>
          <div>
            Bio: <span>{bio}</span>
          </div>
          <div>
            In github from: <span>{getDateFromString(createdAt)}</span>
          </div>
        </Col>
      </Row>
    </UserContentWrap>
  );
}

export default UserContent;

const UserContentWrap = styled.div`
  width: 100%;
  background-color: white;
  padding: 80px 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const ImgCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.div`
  width: fit-content;

  > img {
    border-radius: 50%;
  }
`;
