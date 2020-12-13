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
    const [shippingSubdivison, setShippingSubdivison] = useState("");
    const [shippingOption, setShippingOption] = useState("");

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
        console.log(countries);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

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
                    </Grid>
                    <Grid>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                            {Object.entries(shippingCountries)}
                            {/* <MenuItem key={} value={}>
                                Select <MEnu></MEnu>
                            </MenuItem> */}
                        </Select>
                    </Grid>
                    {/* <Grid>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select <MEnu></MEnu>
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select <MEnu></MEnu>
                            </MenuItem>
                        </Select>
                    </Grid> */}
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;
