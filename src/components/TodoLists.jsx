import { Box, List, ListItem, Checkbox } from '@chakra-ui/react';

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
                flexDir="row"
                alignItems="center"
                p={3}
                borderRadius="5px"
                backgroundColor={
                  todo.completed ? 'green.100' : 'blackAlpha.100'
                }
                color={todo.completed ? 'blackAlpha.900' : 'white.900'}
              >
                <Checkbox
                  mr={5}
                  borderColor="gray.500"
                  onChange={e => handleTaskDone(todo.id)}
                ></Checkbox>
                <span>{todo.title}</span>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoLists;
