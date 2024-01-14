import './friendList.css';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item item-friends">
      <span className={isOnline ? 'status online' : 'status offline'}></span>
      <img
        className="avatar avatar-friends"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name name-friends">{name}</p>
    </li>
  );
};
FriendList.propTypes = {
  friends:PropTypes.array
}