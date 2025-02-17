import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: "",
  project: "",
  date: "",
  description: "",
  briefs: "",
  measurements: [],
  items: [],
  submittedBills: [], 
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    setClient: (state, action) => { state.client = action.payload; },
    setProject: (state, action) => { state.project = action.payload; },
    setDate: (state, action) => { state.date = action.payload; },
    setDescription: (state, action) => { state.description = action.payload; },
    setBriefs: (state, action) => { state.briefs = action.payload; },
    toggleMeasurement: (state, action) => {
      const measurement = action.payload;
      if (state.measurements.includes(measurement)) {
        state.measurements = state.measurements.filter(m => m !== measurement);
      } else {
        state.measurements.push(measurement);
      }
    },
    addItem: (state, action) => { state.items.push(action.payload); },
    submitBill: (state) => {
      state.submittedBills.push({
        client: state.client,
        project: state.project,
        date: state.date,
        description: state.description,
        briefs: state.briefs,
        measurements: state.measurements,
        items: state.items,
      });
    },
    reset: (state) => {
      state.client = "";
      state.project = "";
      state.date = "";
      state.description = "";
      state.briefs = "";
      state.measurements = [];
      state.items = [];
    },
  },
});

export const { setClient, setProject, setDate, setDescription, setBriefs, toggleMeasurement, addItem, submitBill, reset } = billSlice.actions;
export default billSlice.reducer;
