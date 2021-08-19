import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task = {
      id: tasks?.length + 1,
      title: newTaskTitle,
      done: false,
    }

    setTasks([...tasks, task])
  }

  function handleToggleTaskDone(id: number) {
    const tasksList = tasks?.map((item: Task) => {
      if (item.id === id) {
        return ({
          ...item,
          done: !item?.done
        })
      }
    });

    setTasks(tasksList as Task[]);
  }

  function handleRemoveTask(id: number) {
    const tasksList = tasks?.filter((item: Task) => item?.id !== id);

    setTasks(tasksList as Task[]);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})