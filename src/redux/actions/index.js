const mockXHR = (expectSuccess, dispatch) => {
    setTimeout(() => {
            dispatch(expectSuccess ? successHandler() : errorHandler());
    }, 1000);
}

export const successHandler = () => {
    return {
        type: 'XHR_SUCCESS'
    }
}

export const errorHandler = () => {
    return {
        type: 'XHR_ERROR'
    }
}

export const requestWithError = (dispatch) => {
    mockXHR(false, dispatch);
    return {
        type : 'XHR_START'
    }
}

export const requestWithSuccess = (dispatch) => {
    mockXHR(true, dispatch);
    return {
        type: 'XHR_START'
    }
}

export const editAccount = (account) => {
  return {
    type: 'EDIT_ACCOUNT',
    id: Math.random(),
  }
}