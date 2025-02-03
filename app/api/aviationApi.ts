import axiosInstance from "./axiosInstance";
 
export const fetchFlights = async (params?: Record<string, any>) => { 
  const response = await axiosInstance.get("/flights", { params });
  return response.data;
};
 
export const fetchRoutes = async (params?: Record<string, any>) => {
  const response = await axiosInstance.get("/routes", { params });
  return response.data;
};
 
export const fetchAirports = async (params?: Record<string, any>) => {
  const response = await axiosInstance.get("/airports", { params });
  return response.data;
};
 
export const fetchAirlines = async (params?: Record<string, any>) => {
  const response = await axiosInstance.get("/airlines", { params });
  return response.data;
};

//  more functions :
// - fetchAirplanes
// - fetchAircraftTypes
// - fetchFlightSchedules
// - fetchCities
// - fetchCountries
