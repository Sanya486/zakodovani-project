export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
