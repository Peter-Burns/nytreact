import React from "react";

const searchForm = props => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h4>Search</h4>
    </ div>
    <form className='form'>
      <div className='form-group'>
        <label htmlFor='searchQuery'>Search Query</ label>
        <input className='form-control' type='text' id='searchQuery' />
      </ div>
      <div className='form-group'>
        <label htmlFor='startYear'>Start Year</ label>
        <input className='form-control' type='text' id='startYear' />
      </ div>
      <div className='form-group'>
        <label htmlFor='endYear'>End Year</ label>
        <input className='form-control' type='text' id='endYear' />
      </ div>
      <button type='submit'>
        Search
      </ button>
    </ form>
  </ div>
);

export default searchForm;
