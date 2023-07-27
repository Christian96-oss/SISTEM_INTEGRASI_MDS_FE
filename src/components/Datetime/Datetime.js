import React from "react";
import { Typography } from "@pankod/refine-mui";
const Datetime = () => {
  var date = new Date();
  var tanggal = date.getDate() + " " + (date.getMonth() + 1);
  var displayTime = date.getHours() + ":" + date.getMinutes();
  return (
    <div>
      <Typography fontSize={25} fontWeight={700} color="#ffff">
        <center>
          {tanggal} {displayTime}
        </center>
      </Typography>
    </div>
  );
};

export default Datetime;
