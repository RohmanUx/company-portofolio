// components/UserComponent.jsx
"use client"
import { useEffect, useState } from 'react';
import Image from "next/image"
const UserComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      setUser(data.results[0]);
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Information</h1>
      <Image src={user.picture.large} alt="User Picture" />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
  );
};

export default UserComponent;
