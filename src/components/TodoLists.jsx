import { List, ListItem, Checkbox } from '@chakra-ui/react';

const TodoLists = ({ todoItems }) => {
  return (
    <>
      <List spacing={3} w="100%">
        {todoItems.map(todo => {
          return (
            <ListItem
              key={todo.id}
              d="flex"
              flexDir="row"
              alignItems="center"
              p={3}
              borderRadius="5px"
              backgroundColor="gray.100"
              color="blackAlpha.800"
            >
              <Checkbox
                mr={5}
                borderColor="gray.500"
                onChange={e => {
                  console.log(e.target.checked);
                  console.log(todo.id);
                }}
              ></Checkbox>
              <span> {todo.title} </span>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoLists;
