import { TaskList } from "./components/task-list";

const taskItems = [
  { id: 1, text: "Mandi", isCompleted: true },
  { id: 2, text: "Sarapan", isCompleted: true },
  { id: 3, text: "Bekerja", isCompleted: false },
];

export function App() {
  return (
    <div>
      <header>
        <h1>Task Management</h1>
      </header>

      <p className="read-the-docs">Application to manage tasks.</p>

      <TaskList taskItems={taskItems} />
    </div>
  );
}
