import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <Grid container justifyContent='space-around' mt={{ xs: 2, md: 8 }}>
      <Grid item xs={12} md={6} lg={3}>
        <Card elevation={0}>
          <CardContent>
            {/* Card header */}
            <Box mb={4}>
              <Typography variant='h3' component='h1' mb={2}>
                <strong>Sign In</strong>
              </Typography>
              <Typography variant='subtitle1' color='text.disabled'>
                Enter your email and password to sign in
              </Typography>
            </Box>
            {/* card body and form */}
            <Box component='form' noValidate autoComplete='off'>
              <TextField
                fullWidth
                value={email}
                label='Email'
                margin='normal'
              />
              <TextField
                fullWidth
                value={email}
                label='Password'
                margin='normal'
              />
              <FormControl margin='normal'>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={<Typography variant='body2'>Remember me</Typography>}
                />
              </FormControl>
              <Button fullWidth variant='contained'>
                Sign in
              </Button>
              <Box my={2}>
                <Typography
                  variant='subtitle2'
                  component='span'
                  color='text.secondary'
                  mr={1}>
                  Don't have an account?
                </Typography>
                <Link
                  underline='none'
                  variant='subtitle2'
                  component='button'
                  color='primary'>
                  Sing Up
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box width={2/3}>
          <img src='./images/sign-in.svg' alt='Sign in image' />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
