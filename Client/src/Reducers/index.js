const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      console.log(action.payload);
      localStorage.setItem("Profile", JSON.stringify(action.payload));
      return state;
    default:
      return state;
  }
};
