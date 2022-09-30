import { Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useMode from "../hook/useMode";
function DarkMode() {
  const [darkMode, setDarkMode] = useMode();

  const DarkModeFunc = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Box sx={{ mr: "20px",cursor:"pointer" }} onClick={DarkModeFunc}>
      {darkMode ? <Brightness4Icon /> : <DarkModeIcon />}
    </Box>
  );
}

export default DarkMode;
