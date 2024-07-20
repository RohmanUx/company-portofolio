"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
  };
}

const UserComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Information</h1>
      <Image
        src={user.picture.large}
        alt="User Picture"
        width={200}
        height={200}
        layout="fixed" // Add this if you want fixed dimensions
      />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
  );
};

export default UserComponent;
