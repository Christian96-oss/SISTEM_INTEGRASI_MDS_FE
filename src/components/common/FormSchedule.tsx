import { Box, Typography, FormControl, FormHelperText, TextField, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProp } from "interfaces/common";
import CustomButton from "./CustomButton";

const FormSchedule = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, orderImage }: FormProp) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Schedule
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <Stack direction="row" gap={6}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                PO
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("nc", { required: true })} />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                12 NC
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("nc", { required: true })} />
            </FormControl>
          </Stack>
          <Stack direction="row" gap={6}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Start
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="time" variant="outlined" {...register("order_time", { required: true })} />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                End
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="time" variant="outlined" {...register("order_time", { required: true })} />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Qty
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("bin", { required: true })} />
            </FormControl>
          </Stack>
          <Stack direction="row" gap={6}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Progress
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("po", { required: true })} />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Status
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="status"
                {...register("status", {
                  required: true,
                })}
              >
                <MenuItem value="take_off">Take Off</MenuItem>
                <MenuItem value="boarding">Boarding</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Action
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="status"
                {...register("status", {
                  required: true,
                })}
              >
                <MenuItem value="delay">Delay</MenuItem>
                <MenuItem value="run">Run</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <CustomButton type="submit" title={formLoading ? "Submitting..." : "Submit"} backgroundColor="#475be8" color="#fcfcfc" />
        </form>
      </Box>
    </Box>
  );
};

export default FormSchedule;
