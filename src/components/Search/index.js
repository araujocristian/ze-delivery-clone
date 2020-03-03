import React from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng
} from "react-google-places-autocomplete";
import { PropTypes } from "prop-types";

// If you want to use the provided css
import "react-google-places-autocomplete/dist/assets/index.css";

const Search = ({ setLatLng }) => {
  const getLatLong = async res => {
    await geocodeByPlaceId(res.place_id)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setLatLng(latLng);
      });
  };

  const inputStyle = {
    minWidth: "350px",
    height: "48px",
    fontWeight: "lighter",
    boxSizing: "border-box",
    color: "rgb(51, 51, 51)",
    backgroundColor: "rgb(255, 255, 255)",
    fontSize: "16px",
    paddingRight: "20px",
    paddingLeft: "48px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(204, 204, 204)",
    borderImage: "initial",
    margin: "auto",
    textDecoration: "none",
    outline: "none",
    lineHeight: "20px"
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        onSelect={getLatLong}
        inputStyle={inputStyle}
        placeholder="Insira o endereço e número"
      />
    </div>
  );
};

Search.propTypes = {
  setLatLng: PropTypes.func
};

export default Search;
