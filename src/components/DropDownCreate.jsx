import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function DropDownCreate() {
  // Dropdown menu
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([ 
    {label: 'Academic', value: 'academic'},
    {label: 'Concert', value: 'concert'},
    {label: 'Sport', value: 'sport'},
    {label: 'Volunteer', value: 'volunteer'},
    {label: 'MeetUp', value: 'meetup'}

  ]);

  return (
    <Dropdown
      style={styles.dropdown}
      data={items}
      maxHeight={300}
      labelField={"label"}
      valueField={"value"}
      placeholder="Academic"
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(value) => {
        setValue(value);
        setIsFocus(false);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

