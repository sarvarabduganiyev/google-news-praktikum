import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "../style/PriveteStyle.css";
import NewsCard from "./NewsCard";
import { google } from "../http/index";
import useFilter from "../hook/useFilter";
import QuerySearch from "./QuerySearach";
import ReactLoading from "react-loading";

function HomeIntro() {
  const [data, setData] = useState([]);
  const [filter] = useFilter();

  const newsDataFetch = (filter) => {
    google
      .get(`/${filter}&apiKey=39c3025e706146f99c1db7b6e2295f6e`)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((error) => console.log("catch error", error));
  };

  useEffect(() => {
    newsDataFetch();
  }, [filter]);
  return (
    <>
      <QuerySearch newsDataFetch={newsDataFetch} />

      {data.length > 0 ? (
        <Box
          className="container__size"
          sx={{
            display: "grid",
            marginTop: "50px",
            gap: "50px",
            gridTemplateColumns: {
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(3,1fr)",
            },
          }}
        >
          {data.map((items,index) => (
            <NewsCard items={items} key={index} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <ReactLoading
            type="spin"
            height={"40px"}
            width={"40px"}
            color="#000000"
          />
        </Box>
      )}
    </>
  );
}
export default HomeIntro;
