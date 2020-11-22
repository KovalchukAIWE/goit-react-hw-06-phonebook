import React from 'react';
import styles from './Button.module.css';

export function ButtonAdd() {
  return (
    <button type="submit" className={styles.Button}>
      ADD
    </button>
  );
}