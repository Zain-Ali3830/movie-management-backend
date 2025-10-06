import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1000, // 50 virtual users
  duration: '30s', // Run for 30 seconds
};



export default function () {
  http.get("http://localhost:4000/api/getmovies");
  sleep(1);
}