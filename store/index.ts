import { create } from 'zustand'
import { produce } from "immer"

interface ILog {
    where: string,
    who: string,
    done: string
}
type IWish = {
    id?: number;
    name: string;
    wishes: string;
    done?: boolean
}

interface IDeepObj {
    nested: {
        obj: { count: number }
    }
}

interface State {
    count: number,
    todoList: string[]
    todoItem: string
    name: string
    log: ILog
    wish: IWish
    wishList: IWish[]
    deepObj: IDeepObj
    immerDeepObj: IDeepObj
    inputId: string
}

type Action = {
    increaseCount: () => void
    setTodoList: (item: string) => void
    setTodoItem: (item: string) => void
    updateName: (item: string) => void
    setWish: (wish: IWish) => void;
    setWishList: (wish: IWish) => void
    setDeepObj: () => void
    setImmerDeepObj: () => void
    setWishListDone: (id: number) => void
    setinputId: (item: string) => void
}

export const useStore = create<State & Action>()(
    (set) => ({
        count: 0,
        todoList: [],
        todoItem: "",
        name: "",
        inputId: "",
        log: {
            who: '',
            where: '',
            done: ''
        },
        wish: {
            id: 0,
            name: "xxx",
            wishes: "xxx"
        },
        wishList: [
            {
                id: 0,
                name: "xiaoming",
                wishes: "sleep",
                done: false
            },
            {
                id: 1,
                name: "xiaohong",
                wishes: "sleep",
                done: true
            }
        ],
        deepObj: {
            nested: {
                obj: {
                    count: 0
                }
            }
        },
        immerDeepObj: {
            nested: {
                obj: {
                    count: 0
                }
            }
        },
        increaseCount: () =>
            set((state) => ({
                count: state.count + 1
            })),
        setTodoList: (item) => set((state) => ({ todoList: [...state.todoList, item] })),
        setTodoItem: (item) => set((state) => ({ todoItem: item })),

        updateName: (item) => set((state) => ({ name: item })),
        setWish: (wish) =>
            set((state) => ({
                wish: { ...state.wish, ...wish }
            })),
        setWishList: (wish) =>
            set((state) => ({
                wishList: [...state.wishList, wish]
            })),
        setDeepObj: () =>
            set((state) => ({
                deepObj: {
                    ...state.deepObj,
                    nested: {
                        ...state.deepObj.nested,
                        obj: {
                            ...state.deepObj.nested.obj,
                            count: state.deepObj.nested.obj.count + 1
                        }
                    }
                }
            })),
        setImmerDeepObj: () =>
            set(produce((state) => { ++state.immerDeepObj.nested.obj.count })),
        setWishListDone: (id) =>
            set(produce((state) => {
                const todo = state.wishList.find((todo: IWish) => todo.id === id);
                todo.done = !todo.done;
            })),
        setinputId: (item) =>
            set(() => ({
                inputId: item
            })),

    }))