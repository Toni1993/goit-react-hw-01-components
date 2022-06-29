import PropTypes from 'prop-types';
import { Box } from '../box';

import { Avatar } from './Profile.styled';
import { AvatarName } from './Profile.styled';
import { AvatarTag } from './Profile.styled';
import { AvatarLocationg } from './Profile.styled';
import { AvatarLabel } from './Profile.styled';
import { AvatarQuantity } from './Profile.styled';
import { AvatarStats } from './Profile.styled';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    width="350px"
    mt="50px"
    pt="25px"
    mx="auto"
    bg=" #f0f0f0"
  >
    <div>
      <Avatar src={avatar} alt="Аватар {name}" />
      <AvatarName>{name}</AvatarName>
      <AvatarTag>{tag}</AvatarTag>
      <AvatarLocationg>{location}</AvatarLocationg>
    </div>

    <AvatarStats>
      <li>
        <AvatarLabel>Followers</AvatarLabel>
        <AvatarQuantity>{stats.followers}</AvatarQuantity>
      </li>
      <li>
        <AvatarLabel>Views</AvatarLabel>
        <AvatarQuantity>{stats.views}</AvatarQuantity>
      </li>
      <li>
        <AvatarLabel>Likes</AvatarLabel>
        <AvatarQuantity>{stats.likes}</AvatarQuantity>
      </li>
    </AvatarStats>
  </Box>
);

Profile.defaultProps = {
  name: 'user',
  avatar: '',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
