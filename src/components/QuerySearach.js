import { Box, Button, TextField } from "@mui/material";
import useFilter from "../hook/useFilter";
import SearchIcon from "@mui/icons-material/Search";
import useMode from "../hook/useMode";
function QuerySearch({ newsDataFetch }) {
  const [filter, setFilter] = useFilter();

  const SearchFunc = (event) => {
    event.preventDefault();
    newsDataFetch(filter);
  };
  const [darkMode] = useMode();

  return (
    <Box className="container__size" sx={{ margin: "20px 0px" }}>
      <Box onSubmit={SearchFunc} className="search__wrapper" component="form" sx={{ display: "flex" }}>
        <TextField
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          id="outlined-basic"
          sx={{
            width: "100%",
            backgroundColor: darkMode ? "initial" : "white",
          }}
          label="Search News..."
          variant="outlined"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ ml: "50px", width: "20%" }}
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default QuerySearch;
