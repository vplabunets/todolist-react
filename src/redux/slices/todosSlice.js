import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    {
        id: '123',
        taskTitle: 'Some title',
        taskBody: 'todo smth',
        isCompleted: false,
    },
];
export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            return [action.payload, ...state];
        },
        deleteTodo: (state, action) => {
            console.log(action.payload);
            console.log(state);
            return state.filter(todo => todo.id !== action.payload.id);
        },
        modifyTodo: (state, action) => {
            const index = state.findIndex(
                todo => todo.id === action.payload.id
            );
            state[index] = {
                ...state[index],
                taskBody: action.payload.taskBody,
            };
            return state;
        },
        setCompleteTodo: (state, action) => {
            const index = state.findIndex(
                todo => todo.id === action.payload.id
            );
            state[index] = {
                ...state[index],
                isCompleted: action.payload.isChecked,
            };
            return state;
        },
        filterTodo: (state, action) => {
            return state.filter(
                todo => todo.isCompleted === action.payload.isCompleted
            );
        },
        deleteAll: () => {
            return [];
        },
    },
});
export const { addTodo, deleteTodo, modifyTodo, setCompleteTodo, deleteAll } =
    todosSlice.actions;

export const todosReducer = todosSlice.reducer;
