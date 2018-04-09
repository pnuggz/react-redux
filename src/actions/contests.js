export function contestsHasErrored(bool) {
    return {
        type: 'CONTESTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function contestsIsLoading(bool) {
    return {
        type: 'CONTESTS_IS_LOADING',
        isLoading: bool
    };
}

export function contestsFetchDataSuccess(contests) {
    return {
        type: 'CONTESTS_FETCH_DATA_SUCCESS',
        contests
    };
}

export function contestsFetchData(url) {
    return (dispatch) => {
        dispatch(contestsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(contestsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((contests) => {
              console.log(contests);
              dispatch(contestsFetchDataSuccess(contests))
            })
            .catch(() => dispatch(contestsHasErrored(true)));
    };
}
