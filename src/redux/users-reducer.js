const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitriy', status: 'Im am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true,  fullName: 'Poc', status: 'Im am a boss', location: {city: 'Moskow', country: 'Russ'}},
        {id: 3, followed: false, fullName: 'Don', status: 'Im am a boss', location: {city: 'Kiev', country: 'Ukrainen'}},
        {id: 4, followed: true, fullName: 'HUy', status: 'Im am a boss', location: {city: 'Kiev', country: 'Ukrainen'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map(u => u),
            }


        case UNFOLLOW:

        default: {
            return state;
        }
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unffolowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;