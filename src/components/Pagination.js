import { Box, Pagination } from "@mui/material";

function PaginationComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        px: "20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container__size"
    >
      <Pagination count={10} color="primary" />
    </Box>
  );
}

export default PaginationComponent;
