import axios from "axios";
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <span>Github Followers: {data?.followers}</span>
      <br />
      <img src={data?.avatar_url} alt="Github Picture" />
    </div>
  );
}

export default Github;

export const githubInfo = async() => {
  try {
    const response = await axios.get('https://api.github.com/users/MirzaAbdullahBaig');
    return response.data
  } catch (error) {
    console.log(error);
  }
}