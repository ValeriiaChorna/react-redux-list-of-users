import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getDateFromString } from '../../helpers/usersHelpers';
import ExternalLink from '../Elements/ExternalLink';

function UserDetails({ data = {} }) {
  const {
    login,
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
    <div className="user-details">
      <h2>
        {name} (<ExternalLink href={profileLink}>{login}</ExternalLink>)
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
          <ExternalLink href={blog} />
        </span>
      </div>
      <div>
        <Bold>Company:</Bold> <span>{company}</span>
      </div>
      <LocationWrap>
        <Bold>Location:</Bold> <span>{location}</span>
      </LocationWrap>
      <div>
        <Bold>In github from:</Bold> <span>{getDateFromString(createdAt)}</span>
      </div>
    </div>
  );
}

export default UserDetails;

const LocationWrap = styled.div`
  margin-bottom: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
`;
