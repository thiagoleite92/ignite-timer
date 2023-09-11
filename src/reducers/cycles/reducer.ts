import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupteDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Array<Cycle>
  activeCycleId: string | null
}

export const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      } else {
        return produce(state, (draft) => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].interrupteDate = new Date()
        })
      }
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      } else {
        return produce(state, (draft) => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].interrupteDate = new Date()
        })
      }
    }

    default:
      return state
  }
}
