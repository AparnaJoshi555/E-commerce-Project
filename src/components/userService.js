import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9078/authentication/register";

export const SignupPage = () => {
     return axios.post(USER_API_BASE_URL,employeeObject); 
}
