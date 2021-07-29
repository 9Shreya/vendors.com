import { API_URL } from '../Constants/ApiUrl'
import axios from 'axios';

export async function get(val){
  const data=  API_URL+val
    return await axios.get(data);
}
export async function getById(val){
  const data=  API_URL+val
    return await axios.get(data);
}
export async function post(url,data){
  const urls=  API_URL+url
    return await axios.post(urls,data);
}
export async function delet(url){
  const urls=  API_URL+url
    return await axios.delete(urls);
}
export async function put(url,data){
  const urls=  API_URL+url
    return await axios.put(urls,data);
}
