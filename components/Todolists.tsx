"use client"
import { useStore } from '@/store'
import React from 'react'

const Todolists = () => {
    const todolist = useStore((state) => state.todoList)
    const todoItem = useStore((state) => state.todoItem)
    const setTodoItem = useStore((state) => state.setTodoItem)
    const setTodoList = useStore((state) => state.setTodoList)
    const handleClick = () => {
        //将新备忘加入列表
        setTodoList(todoItem)
        setTodoItem('')
        //获取上次的状态
        console.log(todoItem)
    }
    const handleChange = (e: { target: { value: string } }) => {
        setTodoItem(e.target.value)
    }
    return (
        <div className='flex flex-col'>
            <h1>Todolists</h1>

            <div className=' flex flex-col'>
                <div className='flex'>

                    <input type="text" placeholder='input something...' className='border-[3px] border-solid border-black '
                    value={todoItem}    onChange={handleChange} />
                    <button className='px-2 bg-black text-white'
                        onClick={handleClick}>post</button>
                </div>
                {
                    todolist.map((item, inx) => <div key={inx}>
                        {item}
                    </div>)
                }
            </div>
        </div>
    )
}

export default Todolists