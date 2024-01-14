import PropTypes from 'prop-types';

import './profile.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stats-list">
          <span className="label label-prof">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stats-list">
          <span className="label label-prof">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stats-list">
          <span className="label label-prof">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes ={
  username:PropTypes.string, 
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.object
}