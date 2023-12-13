import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "incrementer-input": {
      width: "2em",
      textAlign: "center",
    },
  },
}));

function Incrementer(props) {
  const classes = useStyles();
  const { value, onDecrement, onIncrement } = props;

  return (
    <div>
      <IconButton aria-label="remove from shopping cart" onClick={onDecrement}>
        <RemoveIcon />
      </IconButton>
      <TextField
        variant="outlined"
        className={classes["incrementer-input"]}
        value={value}
      />
      <IconButton aria-label="add to shopping cart" onClick={onIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Incrementer;