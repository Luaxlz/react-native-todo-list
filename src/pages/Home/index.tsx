import { Clipboard, ClipboardText, PlusCircle } from 'phosphor-react-native';
import {
  ContentContainer,
  Header,
  HomeContainer,
  IconContainer,
  NewTaskButton,
  NewTaskContainer,
  NewTaskInput,
  TaskContainer,
  TaskCounterText,
  TaskInfoCard,
  TaskInfoContainer,
  TaskInfoCounter,
  TaskListContainer,
  TaskListEmptyText,
  TasksList,
} from './styles';
import { Alert, Image } from 'react-native';
import { useState } from 'react';
import { TaskCard } from '../../component/TaskCard';

interface Task {
  id: number;
  description: string;
  isFinished?: boolean | false;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const createdCount = tasks.length;
  const finishedCount = tasks.filter((task) => task.isFinished).length;

  function handleFinishTask(currentTask: Task) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === currentTask.id) {
          return { ...task, isFinished: !currentTask.isFinished };
        } else {
          return task;
        }
      }),
    );
  }

  function handleDeleteTask(taskId: number) {
    Alert.alert('Remover', 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((state) => state.filter((task) => task.id !== taskId));
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleCreateTask() {
    if (taskInput.length >= 3) {
      setTasks((state) => {
        return [
          ...state,
          {
            id: new Date().getMilliseconds(),
            description: taskInput,
            isFinished: false,
          },
        ];
      });
      setTaskInput('');
    } else {
      Alert.alert('Erro', 'Por favor insira uma tarefa.');
    }
  }

  return (
    <HomeContainer>
      <Header>
        <Image source={require('../../Images/TodoLogo.png')} />
      </Header>
      <ContentContainer>
        <NewTaskContainer>
          <NewTaskInput
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            $isFocused={isFocused}
            value={taskInput}
            onChangeText={setTaskInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <NewTaskButton onPress={handleCreateTask}>
            <IconContainer>
              <PlusCircle color='#fff' size={24} weight='bold' />
            </IconContainer>
          </NewTaskButton>
        </NewTaskContainer>

        <TaskContainer>
          <TaskInfoContainer>
            <TaskInfoCard>
              <TaskCounterText variant='created'>Criadas</TaskCounterText>
              <TaskInfoCounter>
                <TaskCounterText variant='default'>
                  {createdCount}
                </TaskCounterText>
              </TaskInfoCounter>
            </TaskInfoCard>

            <TaskInfoCard>
              <TaskCounterText variant='finished'>Concluídas</TaskCounterText>
              <TaskInfoCounter>
                <TaskCounterText variant='default'>
                  {finishedCount}
                </TaskCounterText>
              </TaskInfoCounter>
            </TaskInfoCard>
          </TaskInfoContainer>
          <TaskListContainer>
            {tasks.length > 0 ? (
              <TasksList
                data={tasks}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }: any) => (
                  <TaskCard
                    taskFinished={() => handleFinishTask(item)}
                    isTaskFinished={item.isFinished}
                    taskDescription={item.description}
                    onRemove={() => handleDeleteTask(item.id)}
                  />
                )}
              />
            ) : (
              <>
                <Image source={require('../../Images/Clipboard.png')} />
                <TaskListEmptyText variant='title'>
                  Você ainda não tem tarefas cadastradas
                </TaskListEmptyText>
                <TaskListEmptyText variant='subtitle'>
                  Crie tarefas e organize seus itens a fazer
                </TaskListEmptyText>
              </>
            )}
          </TaskListContainer>
        </TaskContainer>
      </ContentContainer>
    </HomeContainer>
  );
}
