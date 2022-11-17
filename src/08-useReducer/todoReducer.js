

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('Placeholder');
    
        default:
            return state;
    }

}