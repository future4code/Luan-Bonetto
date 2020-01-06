export const addText = (text) => {
    return {
        type: "ADD_TEXT",
        payload: {
            text : text
        }
    }
}

export const checkedText = (id) => {
    return {
        type: "CHECKED_TEXT",
        payload: {
            id: id
        }
    }
}

export const deleteText = (id) => {
    return {
        type: "DELETE_TEXT",
        payload: {
            id: id
        }
    }
}

export const checkedAll = (id) => {
    return {
        type: "CHECKED_ALL",
        payload: {
            id: id
        }
    }
}

export const deleteAllChecked = (id) => {
    return {
        type: "DELETE_ALL_CHECKED",
        payload: {
            id: id
        }
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        payload: {
            filter: filter
        }
    }
}