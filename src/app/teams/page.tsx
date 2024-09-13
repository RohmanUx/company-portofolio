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
        <div key={user.login.uuid} className="bg-gray-300 rounded-lg p-6 m-4 w-full sm:w-[300px]">
          {/* Image */}
          <Image
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          {/* Title */}
          <h2 className="text-xl font-semibold text-center mt-4">
            {user.name.first} {user.name.last}
          </h2>
          {/* Author */}
          <p className="text-gray-800 text-center">{user.email}</p>
        </div>
      ));
    }
    return <p className="p-4">No users found </p>;
  };

  return (
    <div className="bg-gray-50 py-36">
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-800 mb-4">Meet our Team# </h1>
          <p className="text-lg text-gray-800">
            We, as a team, can help your financial needs. Do you want to <br />
            consult with us? We can provide solutions during bad times. 
          </p>
        </div>

        <PageLayout>
          <div className="flex flex-wrap justify-center items-center px-4 md:px-20 bg-gray-50 mx-40 rounded-xl">
            {renderUsers()}
          </div>
        </PageLayout>
      </div>
    </div>
  );
};

export default Team;
