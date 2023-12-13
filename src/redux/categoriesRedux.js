import initialState from './initialState';

const SET_CATEGORIES = 'app/categories/SET_CATEGORIES';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

const categoriesReducer = (statePart = initialState.categories, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload;
        default:
            return statePart;
    }
};

export default categoriesReducer;
