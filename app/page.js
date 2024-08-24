'use client'
import Image from "next/image";
import TodoCard from "./components/todo/TodoCard";
import TodoModal from "./components/todo/TodoModal";
import { useSelector } from "react-redux";

export default function Home() {
  const todos = useSelector((state) => state?.todo?.todos);
  

  return (
   <main>
    <div className="bg-blue-500 p-4 w-full max-w-4xl mt-12 mx-auto  rounded-md space-y-2">
   <TodoModal/>
    <div className='flex items-center justify-between bg-white rounded-md p-4'>
            <p>title</p>
            <p>decription</p>
            <div className='flex items-center justify-between gap-4'>
           <button className='btn bg-red-500 px-4  text-white rounded-md '></button>
           <p>Action</p>
           </div>

        </div>
    {
      todos.map(item=><TodoCard key={item.id} item={item} />)
    }
    </div>
   </main>
  );
}
