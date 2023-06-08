import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();
  const { currency } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
console.log(trending);


  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return <div className={classes.carousel}></div>;
};

export default Carousel;
