import React from 'react';
import User from '../Users/User';

const UsersContainer = () => {
  const user_container_style = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  };

  return (
    <div style={user_container_style}>
      <User firstname="Helen" age="25" avatar='https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg' />
      <User firstname="Anna" age="35" avatar='https://images-us.nivea.com/-/media/nivea/local/ng/articles/bnr_face_care.jpg?rx=940&ry=0&rw=639&rh=749' />
      <User firstname="Inna" age="46" avatar='https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
    </div>
  );
};

export default UsersContainer;
