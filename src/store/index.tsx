import * as React from 'react'
import { createContext, useReducer } from 'react'

type IAction = ISetPlay | ISetDuation | ISetCurrentTime

interface ISetPlay {
  type: string
  payload: IStore['isPlay']

}

interface ISetDuation {
  type: string
  payload: IStore['duration']
}

interface ISetCurrentTime {
  type: string
  payload: IStore['currentTime']
}
interface IStore {
  isPlay: boolean
  duration: number
  currentTime: number
}

interface StoreContext {
  state: Partial<IStore>
  dispatch(param: ISetPlay): void
  dispatch(param: ISetDuation): void
}

export function playerReducer(draft: IStore, action: IAction): any {
  const { payload } = action
  switch (action.type) {
    case 'playStatus': {
      return { ...draft, isPlay: payload }
    }
    case 'isFullScreen': {
      return;
    }
    case 'duration': {
      return { ...draft, duration: payload }
    }
    case 'currentTime': {
      return { ...draft, currentTime: payload }
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
  isPlay: false,
  duration: 0,
  currentTime: 0
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