import PropTypes from 'prop-types';

import { Item } from './FriendItem.styled';
import { OnLine } from './FriendItem.styled'
import { OffLine } from './FriendItem.styled' 
import { Avatar } from './FriendItem.styled';
import { Name } from './FriendItem.styled';


const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <OnLine> </OnLine> : <OffLine></OffLine>}
      <Avatar  src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendItem.defaultProps = {
  avatar: '',
  isOnline: true,
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
