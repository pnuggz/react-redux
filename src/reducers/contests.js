export function contestsHasErrored(state = false, action) {
    switch (action.type) {
        case 'CONTESTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function contestsIsLoading(state = false, action) {
    switch (action.type) {
        case 'CONTESTS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function contests(state = [], action) {
    switch (action.type) {
        case 'CONTESTS_FETCH_DATA_SUCCESS':
            return action.contests;

        default:
            return state;
    }
}
