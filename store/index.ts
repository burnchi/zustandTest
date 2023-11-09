import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface ILog {
    where: string,
    who: string,
    done: string
}

interface State {
    count: number,
    todoList: string[]
    todoItem: string
    name: string
    log: ILog
}

type Action = {
    increaseCount: () => void
    setTodoList: (item: string) => void
    setTodoItem: (item: string) => void
    updateName: (item: string) => void
    setLogName: (item: string) => void
    setLogWhere: (item: string) => void
    setLogDone: (item: string) => void
}

export const useStore = create<State & Action>()(
    immer((set) => ({
        count: 0,
        todoList: [],
        todoItem: "",
        name: "",
        log: {
            who: '',
            where: '',
            done: ''
        },
        increaseCount: () =>
            set((state) => {
                state.count += 1
            }),
        setTodoList: (item) => set((state) => ({ todoList: [...state.todoList, item] })),
        setTodoItem: (item) => set((state) => { state.todoItem=item }),
        updateName: (item) => set((state) => { state.name = item }),
        setLogName: (item) =>
            set((state) => {
                state.log.who = item
            }),
            // 对象状态
        setLogWhere: (item) =>
            set((state) => {
                state.log.where = item
            }),
        setLogDone: (item) =>
            set((state) => {
                state.log.done = item
            }),
    })))