import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import Switch from '@mui/material/Switch';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faVolumeLow,
  faVolumeHigh,
} from "../assets/fontawesome/pro-regular-svg-icons";
import { faHeart as faSolidHeart } from "../assets/fontawesome/pro-solid-svg-icons";

const Components: React.FC = () => {
  const [control, setControl] = React.useState({
    age: "",
    text: "",
    volume: 0,
  });

  return (
    <Stack spacing={2}>
      <Card variant='outlined'>
        <CardHeader title='Button' />
        <CardContent>
          <Stack direction='row' spacing={1}>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button variant='contained' disabled>
              Contained
            </Button>
            <Button variant='contained' color='success'>
              success
            </Button>
            <Button variant='contained' color='error'>
              error
            </Button>
            <Button variant='contained' color='info'>
              info
            </Button>
            <Button variant='contained' color='warning'>
              warning
            </Button>
            <Button variant='contained' color='secondary'>
              secondary
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <Card variant='outlined'>
        <CardHeader title='Form' />
        <CardContent>
          <Stack direction='row' spacing={1}>
            <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={control.age}
                  label='Age'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth variant='filled'>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={control.age}
                  label='Age'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth variant='standard'>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={control.age}
                  label='Age'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack direction='row' spacing={1} my={2}>
            <Box sx={{ minWidth: 320 }}>
              <TextField value={control.text} label='text' fullWidth />
            </Box>
            <Box sx={{ minWidth: 320 }}>
              <TextField
                value={control.text}
                label='text'
                variant='filled'
                fullWidth
              />
            </Box>
            <Box sx={{ minWidth: 320 }}>
              <TextField
                value={control.text}
                label='text'
                variant='standard'
                fullWidth
              />
            </Box>
          </Stack>
          <Stack direction='row' spacing={1} my={2}>
            <Checkbox defaultChecked />
            <Switch defaultChecked color="error" />
            <>
              <Rating
                name='customized-color'
                defaultValue={2}
                precision={0.5}
                icon={<FontAwesomeIcon icon={faSolidHeart} />}
                emptyIcon={<FontAwesomeIcon icon={faHeart} />}
              />

              <Rating name='customized-10' defaultValue={2} max={7} />
            </>
            <Box sx={{ width: 200 }}>
              <Stack spacing={2} direction='row' alignItems='center'>
                <FontAwesomeIcon icon={faVolumeLow} />
                <Slider aria-label='Volume' value={control.volume} />
                <FontAwesomeIcon icon={faVolumeHigh} />
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Components;
