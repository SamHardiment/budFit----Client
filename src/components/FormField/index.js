import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers';
import {toISOString} from 'datejs'


export const FormField = (props) => {
    const { label, options, myFieldType, disabled } = props;

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    if (myFieldType == 'dropdown') {
        return (
            <div>
                <Box className="container" mt={3} width="100%">
                    <FormControl size="small" fullWidth>
                        <InputLabel htmlFor={label.replace(/\s/g, '') + 'Dropdown'}>{label}</InputLabel>
                        <Select id={label.replace(/\s/g, '') + 'Dropdown'} data-testid="select" value={value} label={label} onChange={handleChange} disabled={disabled}>
                            {options && options.map(({ name }) => (
                                <MenuItem data-testid="select-option" value={name} key={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </div>
        );
    } else if (myFieldType == 'multiline') {
        return (
            <div>
                <Box className="container" mt={3} width="100%">
                    <FormControl size="small" fullWidth>
                        <TextField label={label} multiline variant="outlined" value={value} onChange={handleChange} />
                    </FormControl>
                </Box>
            </div>
        );
    }
    else if (myFieldType == 'date') {
        useEffect(() => {
            let now = new Date().add(1).hour().toISOString();
            now = now.slice(0,16)
            setValue(now);
        }, [])
        
        return (
            <div>
                <Box className="container" mt={3} width="100%">
                    <FormControl size="small" fullWidth>
                        <TextField label={label} type='datetime-local' variant="outlined" value={value} onChange={handleChange} />
                    </FormControl>
                </Box>
            </div>
        );
    } else if (myFieldType == 'number') {        
        return (
            <div>
                <Box className="container" mt={3} width="100%">
                    <FormControl size="small" fullWidth>
                        <TextField label={label} type='number' variant="outlined" value={value} onChange={handleChange} />
                    </FormControl>
                </Box>
            </div>
        );
    } else {
        return (
            <div>
                <Box className="container" mt={3} width="100%">
                    <FormControl size="small" fullWidth>
                        <TextField label={label} variant="outlined" value={value} onChange={handleChange} />
                    </FormControl>
                </Box>
            </div>
        );
    }
};
