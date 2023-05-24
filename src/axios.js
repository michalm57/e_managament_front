import axios from 'axios';

axios.defaults.baseURL = "http://e_managament.dvl.to/api/";
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');