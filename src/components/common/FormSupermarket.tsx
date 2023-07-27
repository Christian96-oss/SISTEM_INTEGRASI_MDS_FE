import { Box, Typography, FormControl, FormHelperText, TextField, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormPropss } from "interfaces/common";
import CustomButton from "./CustomButton";

const FormSupermarket = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, supermarketImage }: FormPropss) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Supermarket
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
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Address
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="mc001"
                {...register("address", {
                  required: true,
                })}
              >
                <MenuItem value="mc001">MC001</MenuItem>
                <MenuItem value="mc002">MC002</MenuItem>
                <MenuItem value="mc003">MC003</MenuItem>
                <MenuItem value="mc004">MC004</MenuItem>
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
                Select Line
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="assy_1"
                {...register("line", {
                  required: true,
                })}
              >
                <MenuItem value="assy_1">Main Assy 1</MenuItem>
                <MenuItem value="assy_2">Main Assy 2</MenuItem>
                <MenuItem value="assy_3">Main Assy 3</MenuItem>
                <MenuItem value="teat_1">Spare Teat 1</MenuItem>
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
                Select Status
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="On Delivery"
                {...register("status", {
                  required: true,
                })}
              >
                <MenuItem value="on_delivery">On Delivery</MenuItem>
                <MenuItem value="ready">Ready</MenuItem>
                <MenuItem value="preparing">Preparing</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="no_order">No Order</MenuItem>
              </Select>
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
                Order Date
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="date" variant="outlined" {...register("order_date", { required: true })} />
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
                Order Time
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
                Duration
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="time" variant="outlined" {...register("duration", { required: true })} />
            </FormControl>
          </Stack>
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">
                Supermarket Photo
              </Typography>
              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleImageChange(e.target.files![0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{ wordBreak: "break-all" }}>
              {supermarketImage?.name}
            </Typography>
          </Stack>
          <CustomButton type="submit" title={formLoading ? "Submitting..." : "Submit"} backgroundColor="#475be8" color="#fcfcfc" />
        </form>
      </Box>
    </Box>
  );
};

export default FormSupermarket;
