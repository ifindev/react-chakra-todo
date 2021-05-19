import React, { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { todos } from './data/todosData';
import {
  ChakraProvider,
  Box,
  Input,
  Flex,
  Button,
  List,
  ListItem,
  theme,
} from '@chakra-ui/react';

function App() {
  const [todoItems, setTodoItems] = useState(todos);
  const [newTodo, setNewTodo] = useState('');

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
            <Input
              id="input-todo"
              borderWidth="2px"
              borderStyle="solid"
              borderColor="blue.100"
              variant="filled"
              placeholder="Add new todo..."
              value={newTodo}
              onChange={event => setNewTodo(event.target.value)}
            />
            <Button
              ml={4}
              colorScheme="blue"
              fontSize={{
                sm: 'sm',
                md: 'md',
                xl: 'lg',
              }}
              onClick={() => handleNewTodo(newTodo)}
            >
              Add Todo
            </Button>
          </Flex>
          <Flex
            mt={5}
            p={3}
            borderWidth="2px"
            borderStyle="solid"
            borderRadius="5px"
            borderColor="blue.100"
          >
            <List spacing={3} w="100%">
              {todoItems.map(todo => {
                return (
                  <ListItem
                    key={todo.id}
                    p={2}
                    borderRadius="5px"
                    backgroundColor="blue.100"
                    color="blackAlpha.800"
                  >
                    {todo.title}
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
