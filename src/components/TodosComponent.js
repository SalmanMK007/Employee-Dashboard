// // TodoList.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from '../actions/actions';
// import axios from 'axios';

// const TodosComponent = () => {
//     const dispatch = useDispatch();
//     const { todos, loading, error } = useSelector((state) => state);

//     useEffect(() => {
//         const fetchData = async () => {
//             dispatch(fetchTodosRequest());

//             try {
//                 const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//                 dispatch(fetchTodosSuccess(response.data));
//             } catch (error) {
//                 dispatch(fetchTodosFailure(error.message));
//             }
//         };

//         fetchData();
//     }, [dispatch]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>{todo.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodosComponent;
