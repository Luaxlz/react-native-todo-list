import { CheckCircle, Circle, Trash } from 'phosphor-react-native';
import { CardButton, CardContainer, CardText } from './styles';

interface TaskCardProps {
  isTaskFinished: boolean;
  taskDescription: string;
  taskFinished: () => void;
  onRemove: () => void;
}

export function TaskCard({
  isTaskFinished,
  taskDescription,
  taskFinished,
  onRemove,
}: TaskCardProps) {
  return (
    <CardContainer>
      <CardButton onPress={taskFinished}>
        {isTaskFinished ? (
          <CheckCircle weight='fill' color='#5e60ce' />
        ) : (
          <Circle color='#4ea8de' />
        )}
      </CardButton>
      <CardText finished={isTaskFinished}>{taskDescription}</CardText>
      <CardButton onPress={onRemove}>
        <Trash size={18} color='#808080' />
      </CardButton>
    </CardContainer>
  );
}
