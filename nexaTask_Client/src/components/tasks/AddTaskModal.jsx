import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/TasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {


    const dispatch = useDispatch();
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addTask(data))
    setIsOpen(false);
    reset();
    console.log(data)
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programing Hero">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
              <label htmlFor="title" className="mb-2">
                Title
              </label>
              <input
                className="w-full rounded-md"
                type="text"
                id="title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="mb-2">
                Description
              </label>
              <input
                className="w-full rounded-md"
                type="text"
                id="description"
                {...register("description", { required: true })}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="deadline" className="mb-2">
                Deadline
              </label>
              <input
                className="w-full rounded-md"
                type="date"
                id="deadline"
                {...register("deadline", { required: true })}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="assignTo" className="mb-2">
                Assign To
              </label>

              <select
                className="w-full rounded-md"
                name=""
                id="assignTo"
                {...register("assignTo")}
              >
                <option value="Foysal Ahmed">Foysal Ahmed</option>
                <option value="Abdullah Bin Ziad">Abdullah Bin Ziad</option>
                <option value="Rakibul Islm">Rakibul Islm</option>
                <option value="Azizul Haque">Azizul Haque</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="priority" className="mb-2">
                Priority
              </label>

              <select
                className="w-full rounded-md"
                name=""
                id="priority"
                {...register("priority")}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="flex gap-3 justify-end">
              <button type="button" className=" bg-red-500 py-2 px-4 rounded-md text-white text-norml">
                Cancel
              </button>
              <button type="submit" className=" bg-indigo-500 py-2 px-4 rounded-md text-white text-norml">
                Add Task
              </button>
            </div>

         
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
