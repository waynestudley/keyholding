import React, { useState, useEffect } from "react";
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
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");

  const handleFromDestinationChange = (e) => {
    const selectedFrom = e.target.value;
    setFromDestination(selectedFrom);

    // Reset 'to' destination if it's the same as the new 'from'
    if (toDestination === selectedFrom) {
      setToDestination("");
    }
  };

  // Event handler for when the 'to' destination changes
  const handleToDestinationChange = (e) => {
    setToDestination(e.target.value);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiInstance = apiBuilder("gates/");
        const response = await apiInstance.get("/");
        const sortedData = response.data.sort(
          (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name) // Sort alphabetically
        );
        setData(sortedData); // Store the data in state
      } catch (error) {
        setError(error); // Store the error in state
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once on mount

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    console.log(e.target.value)
  }
   
      

  return (
    <Box padding={isMobile ? 2 : 4}>
      <Button
        variant="outlined"
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS Docs
      </Button>
      <Button variant="outlined" href="journey" rel="noopener noreferrer">
        Redux Toolkit Docs
      </Button>
      <Button
        variant="outlined"
        href="https://github.com/salnika/next-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </Button>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Typography variant="h4">Star Seeker</Typography>
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        Find you own way around the galaxy:
      </Typography>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Typography variant="subtitle1" gutterBottom>
          Distance
          <TextField id="standard-basic" label="(lu's)" variant="standard" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Passengers
          <TextField id="standard-basic" label="(number)" variant="standard" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Parking
          <TextField id="standard-basic" label="(days)" variant="standard" />
        </Typography>
      </Box>

      <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
        <Button variant="outlined" href="journey" rel="noopener noreferrer">
          Get costs
        </Button>
      </Box>

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
            id="demo-simple-select-standard"
            onChange={handleChange}
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
            value={fromDestination}
            onChange={handleToDestinationChange}
            labelId="destTo"
            id="demo-simple-select-standard"
            onChange={handleChange}
            label="From"
          >
            {data?.map((item, index) => (
              <MenuItem key={index} value={index}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Home;
