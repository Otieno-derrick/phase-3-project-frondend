
import axios from 'axios';

const usersUrl = 'http://localhost:9292/';



export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(usersUrl + '/' + id);
    } catch (error) {
        console.log('Error on api ',error);
    }
};

export const addUser = async (user) => {
    return await axios.post(usersUrl , user);
};

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}`+'users/'+id);
};

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}`+'users/'+id);
};

