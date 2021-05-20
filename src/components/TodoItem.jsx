import { FaTrash } from 'react-icons/fa';
import { Box, Checkbox, Button } from '@chakra-ui/react';

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
          <span>{todo.title}</span>
        </Box>

        <Box>
          <Button
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
