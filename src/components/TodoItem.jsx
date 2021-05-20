import { FaTrash, FaRegEdit } from 'react-icons/fa';
import {
  Flex,
  Text,
  Grid,
  SimpleGrid,
  Box,
  Checkbox,
  Container,
  Button,
} from '@chakra-ui/react';

const TodoItem = ({ todo, handleTaskDone, handleDeleteTodo }) => {
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        p={3}
        borderRadius="5px"
        backgroundColor={todo.completed ? 'green.100' : 'blackAlpha.100'}
        color={todo.completed ? 'blackAlpha.900' : 'white.900'}
      >
        <Box d="flex" flexDir="row" alignItems="center" justifyContent="center">
          <Checkbox
            mr={5}
            borderColor="gray.500"
            onChange={e => handleTaskDone(todo.id)}
          ></Checkbox>
          <Text>
            <span>{todo.title}</span>
          </Text>
        </Box>

        <Box>
          <Button
            backgroundColor="blue.500"
            _hover={{
              background: 'blue.700',
            }}
          >
            <FaRegEdit style={{ color: 'white', fontSize: '15px' }} />
          </Button>
          <Button
            ml={2}
            backgroundColor="red.500"
            _hover={{
              background: 'red.700',
            }}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <FaTrash style={{ color: 'white', fontSize: '15px' }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TodoItem;
