import PropTypes from 'prop-types';
import FriendItem from '../Friend-item/FriendItem';

import {StatList} from './FriendList.styled';

const FriendsList = ({ friends }) => {
  return (
    <StatList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem
          key={id.toString()}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </StatList>
  );
};

FriendsList.defaultProps = {
  friends: PropTypes.shape({
    avatar: '',
  }),
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
export default FriendsList;
