import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: "",
  project: "",
  date: "",
  description: "",
  briefs: "",
  measurements: [], // Now storing an array of selected measurements
  items: [],
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
    reset: () => initialState,
  },
});

export const { setClient, setProject, setDate, setDescription, setBriefs, toggleMeasurement, addItem, reset } = billSlice.actions;
export default billSlice.reducer;
