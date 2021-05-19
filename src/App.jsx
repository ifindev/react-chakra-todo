import React, { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { todos } from './data/todosData';
import AddTodo from './components/AddTodo';
import TodoLists from './components/TodoLists';
import {
  ChakraProvider,
  Box,
  Flex,
  List,
  ListItem,
  theme,
} from '@chakra-ui/react';

function App() {
  const [todoItems, setTodoItems] = useState(todos);
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
            borderColor="blue.100"
          >
            <TodoLists todoItems={todoItems} />
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
