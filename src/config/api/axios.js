import axios from "axios";

export default axios.create({
  baseURL:
  
     "http://localhost:3500",
     //"mongodb://localhost:27017/hello",
    

  headers: { "Content-Type": "application/json" },
});
