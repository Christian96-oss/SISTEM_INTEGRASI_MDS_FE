import React from "react";
import { Datetime, CustomButton } from "components";
import { Typography, Box } from "@pankod/refine-mui";
import { ScheduleTable } from "components/MuiTable/ScheduleTable";
import { Add } from "@mui/icons-material";
const Schedule = () => {
  return (
    <Box>
      <div>
        <Typography fontSize={16} fontWeight={600} mt="10px" color="#ffff">
          <Datetime />
        </Typography>
        <center>
          <Typography fontSize={25} fontWeight={700} color="#ffff">
            {!Schedule.length ? "Schedule List" : "Material Status"}
          </Typography>
        </center>
        <CustomButton title="Add" backgroundColor="#475be8" color="#fcfcfc" icon={<Add />} />
        <ScheduleTable />
      </div>
    </Box>
  );
};

export default Schedule;
