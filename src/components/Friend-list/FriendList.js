import PropTypes from 'prop-types';
import FriendItem from '../Friend-item/FriendItem';

import {Stat_list} from './FriendList.styled';

const FriendsList = ({ friends }) => {
  return (
    <Stat_list>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem
          key={id.toString()}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Stat_list>
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
