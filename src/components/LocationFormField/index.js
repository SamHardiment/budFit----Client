import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';

import { FormField } from '../'

function LocationFormField() {
    const Countries = [{id:0,name: 'England'},{id:1,name: 'Northern Ireland'},{id:2,name: 'Scotland'},{id:3,name: 'Wales'}];

    const [countryID, setCountryID] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleCountryChange = (e) => {
        setCountryID(e.target.value)
        setDisabled(false)
    }

    const Counties = [[{name: 'Avon'},{name: 'Bath and North East Somerset'},{name: 'Bedfordshire'},{name: 'Bedford'},{name: 'Berkshire'},{name: 'Blackburn with Darwen'},{name: 'Blackpool'},{name: 'Bournemouth, Christchurch and Poole'},{name: 'Bournemouth'},{name: 'Brighton and Hove'},{name: 'Bristol'},{name: 'Buckinghamshire'},{name: 'Cambridgeshire'},{name: 'Cambridgeshire and Isle of Ely'},{name: 'Central Bedfordshire'},{name: 'Cheshire'},{name: 'Cheshire East'},{name: 'Cheshire West and Chester'},{name: 'Cleveland'},{name: 'Cornwall'},{name: 'Cumberland'},{name: 'Cumbria'},{name: 'Darlington'},{name: 'Derbyshire'},{name: 'Derby'},{name: 'Devon'},{name: 'Dorset'},{name: 'Durham (County Durham)'},{name: 'East Suffolk'},{name: 'East Sussex'},{name: 'Essex'},{name: 'Gloucestershire'},{name: 'Greater London'},{name: 'Greater Manchester'},{name: 'Hampshire'},{name: 'Halton'},{name: 'Hartlepool'},{name: 'Hereford and Worcester'},{name: 'Herefordshire'},{name: 'Hertfordshire'},{name: 'Humberside'},{name: 'Huntingdon and Peterborough'},{name: 'Huntingdonshire'},{name: 'Isle of Ely'},{name: 'Isle of Wight'},{name: 'Kent'},{name: 'Kingston upon Hull'},{name: 'Lancashire'},{name: 'Leicestershire'},{name: 'Leicester'},{name: 'Lincolnshire'},{name: 'London'},{name: 'City of London'},{name: 'Luton'},{name: 'Medway'},{name: 'Merseyside'},{name: 'Middlesbrough'},{name: 'Middlesex'},{name: 'Milton Keynes'},{name: 'Norfolk'},{name: 'Northamptonshire'},{name: 'North East Lincolnshire'},{name: 'North Humberside'},{name: 'North Lincolnshire'},{name: 'North Northamptonshire'},{name: 'North Somerset'},{name: 'Northumberland'},{name: 'North Yorkshire'},{name: 'Nottinghamshire'},{name: 'Nottingham'},{name: 'Oxfordshire'},{name: 'Soke of Peterborough'},{name: 'Peterborough'},{name: 'Plymouth'},{name: 'Poole'},{name: 'Portsmouth'},{name: 'Redcar and Cleveland'},{name: 'Rutland'},{name: 'Shropshire'},{name: 'Somerset'},{name: 'Southampton'},{name: 'Southend-on-Sea'},{name: 'South Humberside'},{name: 'South Gloucestershire'},{name: 'South Yorkshire'},{name: 'Staffordshire'},{name: 'Stockton-on-Tees'},{name: 'Stoke-on-Trent'},{name: 'Suffolk'},{name: 'Surrey'},{name: 'Sussex'},{name: 'Swindon'},{name: 'Telford and Wrekin'},{name: 'Thurrock'},{name: 'Torbay'},{name: 'Tyne and Wear'},{name: 'Warrington'},{name: 'Warwickshire'},{name: 'West Midlands'},{name: 'Westmorland'},{name: 'West Northamptonshire'},{name: 'West Suffolk'},{name: 'West Sussex'},{name: 'West Yorkshire'},{name: 'Wiltshire'},{name: 'Worcestershire'},{name: 'Yorkshire'},{name: 'York'}],[{name: 'Antrim'},{name: 'Armagh'},{name: 'City of Belfast'},{name: 'Down'},{name: 'Fermanagh'},{name: 'Londonderry'},{name: 'City of Derry'},{name: 'Tyrone'}],[{name: 'Aberdeenshire'},{name: 'Angus (Forfarshire)'},{name: 'Argyll'},{name: 'Ayrshire'},{name: 'Banffshire'},{name: 'Berwickshire'},{name: 'Bute'},{name: 'Caithness'},{name: 'Clackmannanshire'},{name: 'Cromartyshire'},{name: 'Dumfriesshire'},{name: 'Dunbartonshire (Dumbarton)'},{name: 'City of Dundee'},{name: 'East Lothian (Haddingtonshire)'},{name: 'City of Edinburgh'},{name: 'Fife'},{name: 'City of Glasgow'},{name: 'Inverness-shire'},{name: 'Kincardineshire'},{name: 'Kinross-shire'},{name: 'Kirkcudbrightshire'},{name: 'Lanarkshire'},{name: 'Midlothian (County of Edinburgh)'},{name: 'Moray (Elginshire)'},{name: 'Nairnshire'},{name: 'Orkney'},{name: 'Peeblesshire'},{name: 'Perthshire'},{name: 'Renfrewshire'},{name: 'Ross and Cromarty'},{name: 'Ross-shire'},{name: 'Roxburghshire'},{name: 'Selkirkshire'},{name: 'Shetland (Zetland)'},{name: 'Stirlingshire'},{name: 'Sutherland'},{name: 'West Lothian (Linlithgowshire)'},{name: 'Wigtownshire'}],[{name: 'Anglesey'},{name: 'Brecknockshire'},{name: 'Caernarfonshire'},{name: 'Cardiganshire'},{name: 'Carmarthenshire'},{name: 'Clwyd'},{name: 'Denbighshire'},{name: 'Dyfed'},{name: 'Flintshire'},{name: 'Glamorgan'},{name: 'Gwent'},{name: 'Gwynedd'},{name: 'Merionethshire'},{name: 'Mid Glamorgan'},{name: 'Monmouthshire'},{name: 'Montgomeryshire'},{name: 'Pembrokeshire'},{name: 'Powys'},{name: 'Radnorshire'},{name: 'South Glamorgan'},{name: 'West Glamorgan'},{name: 'Wrexham'}]]

  return (
    <div>
        <Box className="container" mt={3} width="100%">
                    <FormControl size="small" fullWidth>
                        <InputLabel htmlFor={'CountryDropdown'}>Country</InputLabel>
                        <Select id={'CountryDropdown'} value={countryID} label={'Country'} onChange={handleCountryChange}>
                            {Countries && Countries.map(({ id, name }) => (
                                <MenuItem value={id} key={id}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
        <FormField id="countySelector" label='County' myFieldType='dropdown' options={Counties[countryID]} disabled={disabled} />
    </div>
  )
}

export default LocationFormField
