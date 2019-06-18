import * as React from 'react'
import { createContext, useReducer } from 'react'

type Iaction = ISetPlay

interface ISetPlay {
  type: string,
  payload: {
    isPlay: IStore['isPlay']
  }
}

interface IStore {
  isPlay: boolean
}

interface StoreContext {
  state: Partial<IStore>
  dispatch(param: ISetPlay): void
}

export function playerReducer(draft: IStore, action: Iaction): any {
  const { payload } = action
  switch (action.type) {
    case 'playStatus': {
      return { ...draft, isPlay: payload.isPlay }
    }
    case 'fullScreen': {
      return;
    }
    case 'nowTime': {
      return;
    }
    case 'showPoster': {
      return;
    }
    case 'showPoster': {
      return;
    }
    default:
      return;
  }
}

const initialState: IStore = {
  isPlay: false
}

export const GlobalStoreContext = createContext<StoreContext>({
  state: initialState,
  dispatch: () => { },
})

export const GlobalStoreProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [state, dispatch] = useReducer(playerReducer, initialState)
  return (
    <GlobalStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStoreContext.Provider>
  )
}
export default { GlobalStoreProvider, GlobalStoreContext }