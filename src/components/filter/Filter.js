import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions/phonebookActions';
import { CustomInput } from '../customInput/CustomInput';
import styles from './Filter.module.css';

export function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={styles.FilterWrap}>
      <label className={styles.Label}>
        Find contacts by name
        <CustomInput
          type="search"
          value={filter}
          handleChange={onChangeFilter}
        />
      </label>
    </div>
  );
}