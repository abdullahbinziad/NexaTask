import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
  userSpecificTasks:[]
};

const taskSlice = createSlice({
  name: "taksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },

    removeTask: (state, { payload }) => {
      const remainingTask = state.tasks.filter(
        (item) => item.id !== payload.id
      );
      state.tasks = remainingTask;
    },
    updateStatus: (state, { payload }) => {
      const targetedTask = state.tasks.find((item) => item.id === payload.id);
      targetedTask.status = payload.status;

      //
    },
    userTask:(state,{payload})=>{
state.userSpecificTasks = state.tasks.filter((item)=> item.assignTo=== payload);
    }
  },
});

export const { addTask, removeTask, updateStatus, userTask } = taskSlice.actions;

export default taskSlice.reducer;
