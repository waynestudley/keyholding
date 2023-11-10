import React, { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import {
  Box,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { apiBuilder } from "../utils/api";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [costs, setCosts] = useState([]);
  const [destinationCosts, setDestinationCosts] = useState([]);
  // Ref variables for each text input - no need to update the v-dom with every keystroke...
  const distanceRef = useRef("");
  const passengersRef = useRef("");
  const parkingRef = useRef("");

  const handleFromDestinationChange = (e) => {
    const selectedFrom = e.target.value;
    setFromDestination(selectedFrom);

    if (toDestination === selectedFrom) {
      setToDestination("");
    }
  };

  const handleToDestinationChange = (e) => {
    setToDestination(e.target.value);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiInstance = apiBuilder("gates/");
        const response = await apiInstance.get("/");
        // Sort retrieved data alphabetically
        const sortedData = response.data.sort(
          (a: { name: string }, b: { name: any }) =>
            a.name.localeCompare(b.name)
        );
        setData(sortedData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // run once on mount

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getCosts = (e) => {
    e.preventDefault();

    // Access the input values from the refs
    const distance = distanceRef.current.value;
    const passengers = passengersRef.current.value;
    const parking = parkingRef.current.value;

    const fetchData = async () => {
      try {
        const apiInstance = apiBuilder(
          `transport/${distance}?passengers=${passengers}&parking=${parking}`
        );
        const response = await apiInstance.get();
        setCosts(response.data);
      } catch (error) {
        setError(error);
        setCosts([]);
      }
    };

    fetchData();
  };

  const getDestinationCosts = (e) => {
    const fetchData = async () => {
      try {
        const apiInstance = apiBuilder(
          `gates/${data[fromDestination].code}/to/${data[toDestination].code}`
        );
        const response = await apiInstance.get();
        setDestinationCosts(response.data);
      } catch (error) {
        setError(error);
        setCosts([]);
      }
    };

    fetchData();
  };

  return (
    <Box padding={isMobile ? 2 : 4}>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Typography variant="h4">Star Seeker</Typography>
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        Find you own way around the galaxy:
      </Typography>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Typography variant="subtitle1" gutterBottom>
          Distance
          <TextField
            id="starDistance"
            label="(lu's)"
            variant="standard"
            inputRef={distanceRef}
          />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Passengers
          <TextField
            id="starPassengers"
            label="(number)"
            variant="standard"
            inputRef={passengersRef}
          />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Parking
          <TextField
            id="starParking"
            label="(days)"
            variant="standard"
            inputRef={parkingRef}
          />
        </Typography>
      </Box>

      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Button variant="outlined" onClick={getCosts} rel="noopener noreferrer">
          Get costs
        </Button>
      </Box>
      <br />
      <br />
      {costs.currency && (
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
          <Typography variant="subtitle1" gutterBottom>
            {`${costs.currency} ${(
              costs.journeyCost + costs.parkingFee
            ).toFixed(2)} - (${costs.currency} ${costs.journeyCost.toFixed(
              2
            )} travel & ${costs.currency} ${costs.parkingFee.toFixed(
              2
            )} parking)`}
          </Typography>
        </Box>
      )}

      <br />
      <hr />
      <br />
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <FormControl variant="standard" sx={{ m: 1, width: "45%" }}>
          <InputLabel id="demo-simple-select-standard-label">From</InputLabel>
          <Select
            value={fromDestination}
            onChange={handleFromDestinationChange}
            labelId="destFrom"
            id="destFrom"
            label="From"
          >
            {data?.map((item, index) => (
              <MenuItem key={index} value={index}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, width: "45%" }}>
          <InputLabel id="demo-simple-select-standard-label">To</InputLabel>
          <Select
            value={toDestination}
            onChange={handleToDestinationChange}
            labelId="destTo"
            id="destTo"
            label="To"
          >
            {data?.map((item, index) => {
              // Check if the current index is not the selected index from the first dropdown
              if (index !== fromDestination) {
                return (
                  <MenuItem key={index} value={index}>
                    {item.name}
                  </MenuItem>
                );
              }
              return null;
            })}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Button
          variant="outlined"
          onClick={getDestinationCosts}
          rel="noopener noreferrer"
        >
          Get to/from destination costs
        </Button>
      </Box>

      <br />
      <br />
      {destinationCosts.from && (
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
          <Typography variant="subtitle1" gutterBottom>
            {`From ${destinationCosts.from.name} to ${destinationCosts.to.name}`}
            <br />
            {`Cost: ${destinationCosts.totalCost}`}
            <br />
            {destinationCosts.route.length > 1
              ? `Route: ${destinationCosts.route}`
              : "Direct"}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Home;
