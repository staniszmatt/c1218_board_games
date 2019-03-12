export default ({dispatch}) => next => action => {
    if(typeof action !== 'function'){
        return next(action);
    }

    return action(dispatch);
}
