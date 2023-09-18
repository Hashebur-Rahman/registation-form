import { Stack, Box, Paper, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, ButtonGroup } from "@mui/material"
import { useForm } from "react-hook-form";


export const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <Paper sx={{ color: "primary", gap: "1x", display: "flex", backgroundColor: "seagreen", justifyContent: 'space-between', paddingY: "50px", paddingX: "50px" }} >

            <Box sx={{ width: '100%', }}>
                <img src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg" alt=""
                    width={"100%"}
                    height="100%"



                />
            </Box>
            <Box sx={{ padding: '20px', width: '100%', backgroundColor: "white", borderBottomRightRadius: '10px', textAlign: "center" }}>
                <h2 style={{ color: "seagreen", textAlign: 'center', marginBottom: "5px" }}>Registration</h2>
                <Typography variant="body2" color="text.secondary"> Click For your short</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={{ marginTop: '20px' }} spacing={1}  >


                        <TextField
                            error={errors.name}
                            helperText={errors.name && "Name field is required"}
                            fullWidth
                            {...register("name", { required: true })}
                            label='Name' />



                        <TextField
                            error={errors.email}
                            helperText={errors.email && "email field is required"}
                            {...register("email",
                                { required: true })}
                            label='Email'
                            type="email" />
                        <TextField
                            error={errors.password}
                            helperText={errors.password && "password field is required"}
                            {...register("password",
                                { required: true, maxLength: 20, minLength: 6 })}
                            label='password'
                            type="password" />


                        <FormControl >
                            <FormLabel
                                sx={{ textAlign: "start" }}
                                id="demo-row-radio-buttons-group-label">
                                Gender</FormLabel>
                            <RadioGroup row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female" />

                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male" />
                            </RadioGroup>
                        </FormControl>

                        <FormLabel
                            sx={{ textAlign: 'start' }}>
                            Date Of Birth</FormLabel>

                        <TextField
                            error={errors.date}
                            helperText={errors.date && "Date field is required"}
                            {...register("date", { required: true })}
                             type="date" />



                        <TextField
                            error={errors.city}
                            helperText={errors.city && "city field is required"}
                            {...register("city", { required: true })} label="city" type="text" />



                        <TextField
                            error={errors.country}
                            helperText={errors.country && "country field is required"}
                            {...register("country", { required: true })}
                            label="Country"
                            type="text" />


                        <Stack direction={"row"} spacing={5} display='flex' alignItems='center'>
                            <FormLabel sx={{ textAlign: 'start' }}>Subscription</FormLabel>
                            <ButtonGroup >
                                <Button variant="text">Bronze </Button>

                                <Button color="secondary" variant="text">Silver</Button>

                                <Button color="primary" variant="text">Gold</Button>
                            </ButtonGroup>
                        </Stack>

                        <Stack display='flex' justifyContent='end' spacing={2} direction="row">
                            <Button color="error" variant="contained" type="reset">Cancel</Button>
                            <Button variant="contained" type="submit">Confirm</Button>
                        </Stack>
                    </Stack>
                </form>
            </Box>

        </Paper>
    )
}
