import React, { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AddTodo from './components/AddTodo';
import TodoLists from './components/TodoLists';
import { ChakraProvider, Box, Flex, theme } from '@chakra-ui/react';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleTodoInput = inputVal => {
    setNewTodo(inputVal);
  };

  const handleNewTodo = newItem => {
    if (newItem !== '') {
      const id = todoItems.length + 1;
      const todo = {
        userId: 1,
        id: id,
        title: newItem,
        completed: false,
      };

      const todosUpdate = [todo, ...todoItems];
      setTodoItems(todosUpdate);

      setNewTodo('');
    }
  };

  const handleTaskDone = todoId => {
    const todosUpdate = todoItems.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    setTodoItems(todosUpdate);
    console.log(todoItems);
  };

  const handleDeleteTodo = todoId => {
    // eslint-disable-next-line
    const todosUpdate = todoItems.filter(todo => {
      if (todo.id !== todoId) {
        return todo;
      }
    });
    setTodoItems(todosUpdate);
    console.log(todosUpdate);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        d="flex"
        flexDir="column"
        minH="90vh"
        maxW="80vw"
        mx={'auto'}
        my={10}
        px={{
          md: 50,
          xl: 300,
        }}
      >
        <Box alignSelf="flex-end">
          <ColorModeSwitcher />
        </Box>
        <Box mt={10}>
          <Flex>
            <AddTodo
              inputValue={newTodo}
              handleTodoInput={handleTodoInput}
              handleNewTodo={handleNewTodo}
              newTodo={newTodo}
            />
          </Flex>
          <Flex
            mt={5}
            p={3}
            borderWidth="2px"
            borderStyle="solid"
            borderRadius="5px"
            borderColor="gray.100"
          >
            <TodoLists
              todoItems={todoItems}
              handleTaskDone={handleTaskDone}
              handleDeleteTodo={handleDeleteTodo}
            />
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
