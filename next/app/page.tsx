'use client'

import React, {useState} from 'react';
import { FaPlusCircle } from 'react-icons/fa';

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
  expanded?: boolean;

}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const openAddModal = () => {
    setNewTitle("");
    setNewDescription("");
    setIsModalOpen(true);

  };

  const saveTask = () => {
    if(!newTitle.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const newTask: Task = {
    id: tasks.length > 0 ? tasks[tasks.length -1].id + 1: 1,
    title: newTitle,
    description: newDescription,
    completed: false,
    createdAt: currentTime,
  };

  setTasks([...tasks, newTask]);
  setIsModalOpen(false);
};

  return(
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        Minha To-do List
      </h1>

      <button
      onClick = {openAddModal}
      className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors shadow-md"
      >
        <FaPlusCircle size={18}/>
        Adicionar tarefa
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative text-gray-800">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4 text-center">
              Nova Tarefa
            </h2>
            <input
            type="text"
            placeholder="Título"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />

            <textarea
              placeholder="Descrição"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
              rows={3}
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg">
                    Cancelar
                  </button>
                  <button
                  onClick={saveTask}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                  >
                    Adicionar
                  </button>
              </div>
           </div>
        </div>
      )}

      <div className="mt-6 space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">Nenhuma tarefa adicionada ainda.</p>
        ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-indigo-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                  <h3 className="font-semibold text-indigo-700">{task.title}</h3>
                  {task.description && (
                    <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-2"> Criada às {task.createdAt}</p>
                </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}