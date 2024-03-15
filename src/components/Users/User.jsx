import React from 'react';

const User = ({ firstname, age,avatar }) => {

   const user_style = {
    borderRadius: '10px',

    
    border: '1px solid blue',
    padding: '10px',
    backgroundColor: age<30? 'lightblue' : 'lightgreen'
    
  }
  const user_img_style = {
    width:'150px',
    height: '150px',
    objectFit: 'cover'

    
  }

  return (
    <div style={user_style}>
      <img src={avatar} alt="avatar" style={user_img_style} />
        <p>Name: {firstname}</p>
        <p>Age: {age}</p>
       
      
    </div>
  )
}

export default User;
