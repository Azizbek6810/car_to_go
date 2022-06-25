import {UPDATE_STATE} from "../constant/constants"

const initialState = {
    data: [{ id: 0, title: "summa", body: " malekam" }],
    animName: "",
    delete: "true",
    onModal: false,
}

export const updateState = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE: return { ...state, ...action.data };
        default: return state;
    }
}

