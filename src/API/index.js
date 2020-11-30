import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "https://it-blog-posts.herokuapp.com/api/",
  responseType: "json"
});

const Endpoint = EndpointFactory(axiosInstance);

const API = {
  rooms       : new Endpoint(({id} = "") => `rooms/${id ? id : ""}`),
  bookings    : new Endpoint(({id} = "") => `roomBookings/${id ? id : ""}`),
  visitors    : new Endpoint(({id} = "") => `visitors/${id ? id : ""}`),
  roomsStatus : new Endpoint("rooms/status")
}

   
export default API;