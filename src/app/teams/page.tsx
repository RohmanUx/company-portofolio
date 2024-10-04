'use client';

import CardBlog from "@/components/cores/cardBlog";
import PageLayout from "@/components/layouts/PageLayout";
import * as React from "react";
import { useEffect } from "react";
import Navbar from "../help/navbar";
import Image from 'next/image';

interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
  email: string;
}

interface IAppProps {}

const fetchRandomUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=8");
  const data = await response.json();
  return data.results;
};

const Team: React.FunctionComponent<IAppProps> = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const userList = await fetchRandomUsers();
      setUsers(userList);
    };
    getUsers();
  }, []);

  // Function to render user cards
  const renderUsers = () => {
    if (users.length > 0) {
      return users.map((user) => (
        <div
          key={user.login.uuid}
          className="bg-white/0  rounded-lg p-4 w-full sm:w-[300px] md:w-[250px] lg:w-[300px] h-auto flex flex-col items-center justify-center m-4"
        >
          {/* Image */}
          <Image
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            width={150}
            height={150}
            className="rounded-full"
            loading="lazy"
          />
          {/* Name */}
          <h2 className="text-xl font-semibold text-center mt-4 text-gray-900/80">
            {user.name.first} {user.name.last}
          </h2>
          {/* Email */}
          <p className="text-sm text-gray-700/80 text-center">{user.email}</p>
        </div>
      ));
    }
    return <p className="p-4 text-gray-700/80">No users found</p>;
  };

  return (
    <div className="bg-gray-50 py-24">
      <Navbar />
      <div className="min-h-screen bg-gray-50/0 py-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-medium text-gray-900/80 mb-1">
          team connection 
          </h1>
          <p className="text-lg text-gray-900/80">
            A dynamic team of professionals
          </p>
        </div>

        <PageLayout>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center px-4 md:px-16 bg-gray-50/0 mx-auto max-w-screen-xl">
            {renderUsers()}
          </div>
        </PageLayout>
      </div>
    </div>
  );
};

export default Team;
