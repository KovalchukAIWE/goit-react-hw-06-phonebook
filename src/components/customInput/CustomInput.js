import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textTransform: 'capitalize',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function CustomInput({ name, handleChange, value, type }) {
  const classes = useStyles();
  return (
    <>
      <TextField
        id={uuidv4()}
        variant="outlined"
        value={value}
        label={name}
        name={name}
        type={type}
        onChange={handleChange}
        classes={classes}
      />
    </>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};