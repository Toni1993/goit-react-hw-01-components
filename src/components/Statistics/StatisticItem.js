import PropTypes from 'prop-types';
import { Item } from './StatisticItem.styled';
import { Label } from './StatisticItem.styled';
import { Percentageel } from './StatisticItem.styled';

const StatisticItem = ({ id, label, percentage }) => (
  <Item key={id}>
    <Label>{label}</Label>
    <Percentageel>{percentage}%</Percentageel>
  </Item>
);

StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
