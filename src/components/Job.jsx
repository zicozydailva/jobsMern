import React from 'react';
import moment from "moment"


const Job = ({company, createdAt, status}) => {
  let date = moment(createdAt)
  date = date.format("MMM Do, YYYY")
  return <div>
    <h5>{company}</h5>
    <h5>{date}</h5>
    <h5>{status}</h5>
    <h5>{company}</h5>
  </div> 
};

export default Job;
