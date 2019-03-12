/** **
 *
 * Types
 *
 */

export const Types = {
  ADD_REQUEST: 'devs/ADD_REQUEST',
  ADD_SUCCESS: 'devs/ADD_SUCCESS',
  ADD_FAILURE: 'devs/ADD_FAILURE',
  REMOVE: 'devs/REMOVE',
  // TODO: criar os outros types
};

/** **
 *
 * Reducers
 *
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    // TODO: criar os reducers
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        error: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(dev => dev.id !== action.payload.dev.id),
      };
    default:
      return state;
  }
}

/** *
 *
 * Actions
 *
 */

export const Creators = {
  // TODO: criar as actions
  addDevRequest: (devGitUser, lat, lng) => ({
    type: Types.ADD_REQUEST,
    payload: { devGitUser, lat, lng },
  }),
  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeDev: dev => ({
    type: Types.REMOVE,
    payload: { dev },
  }),
};
