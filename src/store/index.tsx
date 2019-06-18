import * as React from 'react'
import { createContext, useReducer } from 'react'

type IAction = ISetPlay | ISetDuration | ISetCurrentTime | ISetDrag

interface ISetPlay {
  type: string
  payload: IStore['isPlay']

}
interface ISetDuration {
  type: string
  payload: IStore['duration']
}
interface ISetCurrentTime {
  type: string
  payload: IStore['currentTime']
}

interface ISetDrag {
  type: string
  payload: IStore['drag']
}
interface ISetShowPoster {
  type: string
  payload: IStore['showPoster']
}
interface IStore {
  isPlay: boolean
  duration: number
  currentTime: number,
  drag: boolean,
  showPoster: boolean
}

interface StoreContext {
  state: Partial<IStore>
  dispatch(param: ISetPlay): void
  dispatch(param: ISetDuration): void
  dispatch(param: ISetCurrentTime): void
  dispatch(param: ISetDrag): void
  dispatch(param: ISetShowPoster): void
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
    case 'drag': {
      return { ...draft, drag: payload }
    }
    case 'currentTime': {
      return { ...draft, currentTime: payload }
    }
    case 'showPoster': {
      return { ...draft, showPoster: payload }
    }
    default:
      return;
  }
}

const initialState: IStore = {
  isPlay: false,
  duration: 0,
  currentTime: 0,
  drag: false,
  showPoster: true
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