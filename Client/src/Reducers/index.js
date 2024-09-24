const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      console.log("Successfully signed up in and localStorage set. (reducer)");
      localStorage.setItem("Profile", JSON.stringify(action.payload));
      return state;
    case "LOGIN":
      console.log("Successfully logged in and localStorage set. (reducer");
      localStorage.setItem("Profile", JSON.stringify(action.payload));
    default:
      return state;
  }
};
