import React from 'react'
import { useParams } from 'react-router-dom';

function Mac() {
const {id} =useParams()
  return (
    <div>
      <h1 className="text-center">
        <br />
        Mac
      </h1>
    </div>
  );
}

export default Mac