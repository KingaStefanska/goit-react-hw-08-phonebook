export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;
export const getIsLoading = state => {
  console.log(state);
  return state.contacts.isLoading;
};
export const getError = state => state.contacts.error;
