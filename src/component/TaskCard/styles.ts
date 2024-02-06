import styled from 'styled-components/native';

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: #262626;
  border-radius: 8px;
  width: 327px;
  height: 64px;
  margin-bottom: 8px;
`;

interface CardTextProps {
  finished: boolean;
}

export const CardText = styled.Text<CardTextProps>`
  color: ${(props) => (props.finished ? '#808080' : '#f2f2f2')};
  text-decoration: ${(props) => (props.finished ? 'line-through' : 'none')};
`;

export const CardButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
