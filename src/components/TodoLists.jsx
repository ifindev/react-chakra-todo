import { List, ListItem } from '@chakra-ui/react';

const TodoLists = ({ todoItems }) => {
  return (
    <>
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
    </>
  );
};

export default TodoLists;
