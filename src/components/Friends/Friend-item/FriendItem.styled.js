import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  position: relative;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
`;

export const OnLine = styled.span`
  position: absolute;
  top: 33%;
  left: 5px;
  width: 18px;
  height: 18px;
  margin-right: 15px;
  border: 1px solid white;
  border-radius: 50px;
  vertical-align: middle;
  background-color: green;
`;

export const OffLine = styled.span`
  position: absolute;
  top: 33%;
  left: 5px;
  width: 18px;
  height: 18px;
  margin-right: 15px;
  border: 1px solid white;
  border-radius: 50px;
  vertical-align: middle;
  background-color: red;
`;

export const Avatar = styled.img`
  left: 150px;
  border-radius: 5px;
  border: 1px solid green;
  margin-right: 10px;
  margin-left: 30px;
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.21;
`;
