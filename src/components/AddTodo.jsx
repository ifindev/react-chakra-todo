import { Input, Button } from '@chakra-ui/react';

const AddTodo = ({ inputValue, handleTodoInput, handleNewTodo, newTodo }) => {
  return (
    <>
      <Input
        id="input-todo"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="blue.100"
        variant="filled"
        placeholder="Add new todo..."
        value={inputValue}
        onChange={event => handleTodoInput(event.target.value)}
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
    </>
  );
};
export default AddTodo;
