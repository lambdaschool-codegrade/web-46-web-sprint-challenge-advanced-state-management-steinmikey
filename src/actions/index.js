import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        dispatch(errorMessage(err)); // or fetchFail with error message inside?
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};

export const fetchFail = () => {
  return { type: FETCH_FAIL };
};

export const addSmurf = (newSmurf) => {
  return { type: ADD_SMURF, payload: newSmurf };
};

export const errorMessage = () => {
  return { type: ERROR_MESSAGE }; //add payload
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
