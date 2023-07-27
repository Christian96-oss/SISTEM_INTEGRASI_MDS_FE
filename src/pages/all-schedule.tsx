import TextField from "@mui/material/TextField";
import { Datetime, CustomButton } from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { ScheduleTable } from "components/MuiTable/ScheduleTable";
const AllSchedule = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <div>
        <Typography fontSize={16} fontWeight={600} mt="10px" color="#ffff">
          <Datetime />
        </Typography>
        <center>
          <Typography fontSize={25} fontWeight={700} color="#ffff">
            {!AllSchedule.length ? "Schedule List" : "Schedule List"}
          </Typography>
        </center>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <TextField variant="outlined" color="info" placeholder="Search by title" />
        </Stack>
        <ScheduleTable />
      </div>
    </Box>
  );
};

export default AllSchedule;
