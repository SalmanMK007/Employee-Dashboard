import axios from 'axios';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure,} from '../../actions/actions'
export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest());
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            // const response = await axios.get('https://dummyjson.com/users');
            
            dispatch(fetchUsersSuccess(response.data));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
};