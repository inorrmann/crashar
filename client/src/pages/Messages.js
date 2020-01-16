import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Messages() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setName(res.data.name);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* <Link to="/">Go home</Link> */}
    </div>
  );
}

export default Messages;
