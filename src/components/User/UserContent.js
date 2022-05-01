import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {
  getDateFromString,
  initUserDataState,
} from '../../helpers/usersHelpers';

function UserContent({ data = { ...initUserDataState } }) {
  const {
    login,
    avatarUrl,
    profileLink,
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
      <Row gutter={40} justify="space-around" align={'middle'}>
        <Col xs={24} md={12}>
          <ImgCol>
            <a href={profileLink} target="_blank" rel="nofollow noreferrer">
              <ImageWrap>
                <img src={avatarUrl} width={260} height={260} />
              </ImageWrap>
            </a>
          </ImgCol>
        </Col>
        <Col xs={24} md={12}>
          <div className="user-details">
            <h2>
              {name} (
              <a href={profileLink} target="_blank" rel="nofollow noreferrer">
                {login}
              </a>
              )
            </h2>
            <div className="marginBottom">
              <Bold>Bio:</Bold> <span>{bio}</span>
            </div>
            <div className="marginBottom">
              <Row>
                <Col xs={6}>
                  <Bold>Followers</Bold>
                </Col>
                <Col xs={6}>
                  <Bold>Following</Bold>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <span>{followers || 0}</span>
                </Col>
                <Col xs={6}>
                  <span>{following || 0}</span>
                </Col>
              </Row>
            </div>
            <div>
              <Bold>Email:</Bold> <span>{email}</span>
            </div>
            <div>
              <Bold>Blog:</Bold>{' '}
              <span>
                <a href={blog} target="_blank" rel="nofollow noreferrer">
                  {blog}
                </a>
              </span>
            </div>
            <div>
              <Bold>Company:</Bold> <span>{company}</span>
            </div>
            <div className="marginBottom">
              <Bold>Location:</Bold> <span>{location}</span>
            </div>
            <div>
              <Bold>In github from:</Bold>{' '}
              <span>{getDateFromString(createdAt)}</span>
            </div>
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
  padding: 60px 10px;
  border: 1px solid lightgray;
  border-radius: 10px;

  .marginBottom {
    margin-bottom: 15px;
  }
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

  > img {
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;
