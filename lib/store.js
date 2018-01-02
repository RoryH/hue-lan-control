import { createStore } from 'redux'
import hueApp from './reducers'

export const store = createStore(hueApp);