interface Action {
  type: string,
  payload: { level: string }
}

export interface GameStore {
  game: { level: string }
}

export const SET_LEVEL = 'SET_LEVEL';

export const setLevel = (level: string) => {
  return {
    type: SET_LEVEL,
    payload: { level }
  };
};

const INITIAL_STATE = {
  level: '',
};

const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state, level: action.payload.level
      };
    default: return state;
  }
};

export default reducer;