import firebase from 'firebase';

const SET_TASKS = 'tasks/SET_TASKS';

const setTasks = tasks => ({
    type: SET_TASKS,
    tasks
});

let tasksRef;
let callback;

export const enableSync = () => dispatch => {
    const userUid = firebase.auth().currentUser.uid

    tasksRef = firebase.database().ref('/tasker/' + userUid + '/tasks');
    callback = snapshot => {
        const value = snapshot.val();
        const tasks = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }));

        dispatch(setTasks(tasks))
    };

    tasksRef.on('value', callback)
};

export const disableSync = () => dispatch => {
    tasksRef.off('value', callback)
};

const initialState = {
    data: [
        {
            email: '',
            password: ''
        }
    ]
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                data: action.tasks
            };
        default:
            return state;
    }
}