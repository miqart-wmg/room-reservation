import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "https://it-blog-posts.herokuapp.com/api/",
  responseType: "json"
});

const Endpoint = EndpointFactory(axiosInstance);
   
export default {
  rooms       : new Endpoint(({id} = "") => `rooms/${id ? id : ""}`),
  bookings    : new Endpoint(({id} = "") => `roomBookings/${id}`),
  visitors    : new Endpoint(({id} = "") => `visitors/${id}`),
  roomsStatus : new Endpoint("rooms/status")
}
