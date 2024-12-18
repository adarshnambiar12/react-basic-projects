import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (indexToDelete) => {

    const updatedTasks = tasks.filter((_, i) => i !== indexToDelete);

    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-lg shadow-xl">
      <label htmlFor="task" className="block text-xl font-medium text-gray-700 mb-4">Add Task</label>
      
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          id="task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {
          tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <span className="text-lg text-gray-800">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="p-2 text-red-500 hover:text-red-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
