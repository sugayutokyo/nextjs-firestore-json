import type { NextPage } from 'next';
import axios from 'axios';

const Home: NextPage = () => {
  const insertUser = async () => {
    await axios.post('/api/user');
  };
  const updateUser = async () => {
    await axios.patch('/api/user');
  };
  const getUser = async () => {
    await axios.get('/api/user');
  };
  const deleteUser = async () => {
    await axios.delete('/api/user');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="mt-4 w-60 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        onClick={() => insertUser()}>
        Insert User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700"
        onClick={() => updateUser()}>
        Update User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => getUser()}>
        Get User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
        onClick={() => deleteUser()}>
        Delete User
      </button>
    </div>
  );
};

export default Home;
