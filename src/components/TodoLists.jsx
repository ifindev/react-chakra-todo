import { FaTrash } from 'react-icons/fa';
import { Box, List, ListItem, Checkbox, Button } from '@chakra-ui/react';

const TodoLists = ({ todoItems, handleTaskDone }) => {
  return (
    <>
      <List spacing={3} w="100%">
        {todoItems.map(todo => {
          // Pengen dibuat kalau checklist nanti box list nya warna hijau
          return (
            <ListItem key={todo.id}>
              <Box
                d="flex"
                justifyContent="space-between"
                p={3}
                borderRadius="5px"
                backgroundColor={
                  todo.completed ? 'green.100' : 'blackAlpha.100'
                }
                color={todo.completed ? 'blackAlpha.900' : 'white.900'}
              >
                <Box
                  d="flex"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="center"
                >
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
                  >
                    <FaTrash style={{ color: 'white', fontSize: '15px' }} />
                  </Button>
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoLists;
