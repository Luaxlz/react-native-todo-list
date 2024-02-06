import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex-direction: column;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 173px;
  background-color: #0d0d0d;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1a1a1a;
`;

export const NewTaskContainer = styled.View`
  flex-direction: row;
  max-width: 327px;
  max-height: 54px;
  width: 100%;
  height: 100%;
  top: -30px;
  gap: 4px;
`;

export const NewTaskInput = styled.TextInput<{ $isFocused?: boolean }>`
  flex: 1;
  padding: 16px;
  background-color: #262626;
  color: #f2f2f2;
  border-radius: 6px;
  border: 1px solid #0d0d0d;
  border-color: ${(props) => (props.$isFocused ? '#5e60ce' : '#0d0d0d')};
`;

export const NewTaskButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: #1e6f9f;
  border-radius: 6px;
`;

export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TaskContainer = styled.View`
  flex-direction: column;
  max-width: 327px;
  width: 100%;
  height: 100%;
`;

export const TaskInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TaskInfoCard = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const TaskInfoCounter = styled.View`
  width: 24px;
  height: 19px;
  background-color: #333333;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`;

interface TaskCounterTextProps {
  variant: 'created' | 'finished' | 'default';
}

export const TaskCounterText = styled.Text<TaskCounterTextProps>`
  color: ${(props) =>
    props.variant === 'created'
      ? '#4ea8de'
      : props.variant === 'finished'
      ? '#8284fa'
      : '#d9d9d9'};
  font-size: ${(props) =>
    props.variant === 'created'
      ? '14px'
      : props.variant === 'finished'
      ? '14px'
      : '12px'};
  font-weight: bold;
`;

export const TaskListContainer = styled.View`
  max-height: 100%;
  padding: 48px 0;
  gap: 16px;
  border-top-width: 1px;
  border-top-color: #333333;
  border-top-style: solid;
  justify-content: center;
  align-items: center;
`;

interface TaskListEmptyTextProps {
  variant: 'title' | 'subtitle';
}

export const TaskListEmptyText = styled.Text<TaskListEmptyTextProps>`
  color: #808080;
  font-weight: ${(props) => (props.variant === 'title' ? 'bold' : 'medium')};
`;

export const TasksList = styled.FlatList`
  max-width: 327px;
  width: 100%;
  gap: 80px;
`;
