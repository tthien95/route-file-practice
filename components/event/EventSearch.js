import React from 'react';
import Button from '../ui/Button';
import { form, controls, control } from './events-search.module.css';

export default function EventSearch() {
  return (
    <form className={form}>
      <div className={controls}>
        <div className={control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month">
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
}
