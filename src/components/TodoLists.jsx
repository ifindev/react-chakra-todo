import { List, ListItem } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoLists = ({ todoItems, handleTaskDone, handleDeleteTodo }) => {
  return (
    <>
      <List spacing={3} w="100%">
        {todoItems.map(todo => {
          // Pengen dibuat kalau checklist nanti box list nya warna hijau
          return (
            <ListItem key={todo.id}>
              <TodoItem
                todo={todo}
                handleTaskDone={handleTaskDone}
                handleDeleteTodo={handleDeleteTodo}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoLists;
