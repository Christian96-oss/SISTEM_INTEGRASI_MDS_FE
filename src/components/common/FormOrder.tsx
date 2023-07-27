import { Box, Typography, FormControl, FormHelperText, TextField, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProp } from "interfaces/common";
import CustomButton from "./CustomButton";

const FormOrder = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, orderImage }: FormProp) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Order
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
                Select Line
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="line"
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
                Order Lead Time
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="time" variant="outlined" {...register("order_lead_time", { required: true })} />
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
                12 NC
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="line"
                {...register("line", {
                  required: true,
                })}
              >
                <MenuItem value="421335083380">421335083380</MenuItem>
                <MenuItem value="421335083381">421335083381</MenuItem>
                <MenuItem value="421335083382">421335083382</MenuItem>
                <MenuItem value="421335083383">421335083383</MenuItem>
                <MenuItem value="421335083384">421335083384</MenuItem>
                <MenuItem value="421335083385">421335083385</MenuItem>
              </Select>
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
                PO
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("po", { required: true })} />
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
                Troly Remain
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("troly_remain", { required: true })} />
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
                <MenuItem value="on_delivery">On Delivery</MenuItem>
                <MenuItem value="ready">Ready</MenuItem>
                <MenuItem value="preparing">Preparing</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="no_order">No Order</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">
                Order Photo
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
              {orderImage?.name}
            </Typography>
          </Stack>
          <CustomButton type="submit" title={formLoading ? "Submitting..." : "Submit"} backgroundColor="#475be8" color="#fcfcfc" />
        </form>
      </Box>
    </Box>
  );
};

export default FormOrder;
