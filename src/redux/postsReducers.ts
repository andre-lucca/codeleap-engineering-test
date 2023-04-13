interface PayloadAction {
  type: string
  payload?: Object
}

export function postsReducer(state = [], action: PayloadAction) {
  switch (action.type) {
    case 'GET_POSTS':
      return 0

    default:
      break;
  }
}

postsReducer([], { type: 'teste', payload: { carga: 'carga' } })