import React, { useState, useEffect } from "react";
import {
    InputLabel,
    Select,
    SelectMenuItem,
    Button,
    Grid,
    Typography,
    MenuItem,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../lib/commerce";
import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken }) => {
    const methods = useForm();
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingOptions, setShippingOptions] = useState([]);
    // Singluar
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOption, setShippingOption] = useState("");

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
        console.log(countries);
    };

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListShippingCountries(countryCode);
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    };

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const { options } = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
        setShippingOptions(options)
        setShippingOption(options[0].id)
    };

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisons = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((shipOption) => ({id: shipOption.id, label: `${shipOption.description} - (${shipOption.price.formatted_with_symbol})`}) )

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
       if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
     }, [shippingSubdivision]);

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Address
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <Grid container spacing={3}>
                        <FormInput
                            required
                            name="firstName"
                            label="First Name"
                        />
                        <FormInput required name="lastName" label="Last Name" />
                        <FormInput required name="address1" label="Address" />
                        <FormInput
                            required
                            name="address2"
                            label="Apt/Suite #"
                        />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="state" label="State" />
                        <FormInput required name="zipCode" label="Zip Code" />
                        <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select
                            value={shippingCountry}
                            fullWidth
                            onChange={(e) => setShippingCountry(e.target.value)}
                        >
                            {countries.map((country) => {
                                <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
                            })}
                        </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select
                                value={shippingSubdivisions}
                                fullWidth
                                onChange={(e) => setShippingSubdivision(e.target.value)}
                            >
                                {subdivisons.map((subdivision) => {
                                    <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>
                                })}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select
                                value={shippingOption}
                                fullWidth
                                onChange={(e) => setShippingOption(e.target.value)}
                            >
                                {options.map((option) => {
                                    <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;
