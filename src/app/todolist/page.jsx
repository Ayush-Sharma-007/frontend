'use client';
import React, {useState} from 'react'

const Todolist = () => {

    const [ count, setCount ] = useState(0);
    const [TaskList, setTaskList] = useState([
        
    ]);

    const addTask= (e) => {
        if (e.code === 'Enter'){
            console.log(e.target.value);

            const newTask = { text : e.target.value , completed: false, added: new Date() };
            setTaskList( [ newTask, ...TaskList]);


            e.target.value=''; 
        }
    }

    const deleteTask = (index) => {
        console.log(index);

        const temp = TaskList;
        temp.splice(index,1);
        setTaskList([...temp])
        
    } 

    const toggleComplete = (index) => {

        const temp =TaskList;
        temp[index].completed = !temp[index].completed
        setTaskList([...temp])

    }
    
  return (
    <div className='max-w-5xl mx-auto mt-6'>

        <div className='border shadow rounded-xl'>

            <div className='p-4 border-b-2 '>
                <input 
                onKeyDown={ addTask }
                placeholder='Add a note task'
                type="text " 
                className='w-full px-3 py-3 bg-gray-300 rounded-xl outline-none'/>
            </div>

            <div className='p-6'>

                {/* <h1 className='text-3xl text-red-500'  > {count}</h1>
                <button className='bg-gray-300 p-4'
                onClick={ () => { setCount(count+1); console.log(count);}}
                >Add Count </button> */}

                {

                    TaskList.map( (task,i) => { return (

                        <div key={ i } className='rounded-md border mb-5 shadow p-4 bg-gray-100'>

                            { 
                                task.completed ? (
                                    <p className='bg-green-500 text-white rounded-full text-sm px-2 w-fit '>completed</p>
                                ) : <p className='bg-yellow-500 text-white rounded-full text-sm px-2 w-fit '>Pending</p>
                            }
                            <p>{task.text}</p>
                            <div className='mt-2 flex justify-end gap-4'>

                                <button 
                                onClick={ () => {toggleComplete(i)}}
                                className='bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600'>
                                    {
                                        task.completed? 'Completed' : 'Complete'
                                }
                                </button>
                                <button 
                                onClick={ ()=> { deleteTask(i)}}
                                className='bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600'>
                                    Delete
                                </button>
                            </div>

                        </div>
                    ) })
                }
                
            </div>



        </div>
      
      

    </div>
  )
}

export default Todolist