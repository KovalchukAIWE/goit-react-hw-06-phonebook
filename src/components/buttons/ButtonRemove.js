import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      minWidth: '0',
    },
  },
}));

export function ButtonRemove({ type, id, onClick }) {
  const classes = useStyles();
  return (
    <Button
      type={type}
      data-id={id}
      onClick={onClick}
      variant="contained"
      color="secondary"
      classes={classes}
    >
      &#10006;
    </Button>
  );
}