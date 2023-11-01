import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, TextField, Checkbox } from "native-base";
import { Button } from "native-base";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
const color = "#E89452";

const SuggBox = ({ navigation }) => {
  const [name, setName] = useState("");
  const [sugg, setSugg] = useState("");
  const [AppErr, setAppErr] = useState(false);
  const [RecipeErr, setRecipeErr] = useState(false);
  const [AddRecipe, setAddRecipe] = useState(false);
  const [Other, setOther] = useState(false);
  const apperrchangehandler = () => {
    setAppErr(!AppErr);
  };
  const recipeerrchangehandler = () => {
    setRecipeErr(!RecipeErr);
  };
  const addrecipechangehandler = () => {
    setAddRecipe(!AddRecipe);
  };
  const otherchangehandler = () => {
    setOther(!Other);
  };
  const errorkind = () => {
    if (AppErr) {
      return "App Error";
    } else if (RecipeErr) {
      return "Recipe Error";
    } else if (AddRecipe) {
      return "Add Recipe";
    } else if (Other) {
      return "Other";
    }
  };
  const categoriesRef = collection(db, "suggestions");
  const submitHandler = async () => {
    if (name === "" || sugg === "" || (!AppErr && !RecipeErr && !AddRecipe && !Other)) {
      alert("Please fill all the fields");
    } else {
      await addDoc(categoriesRef, {
        name: name,
        suggestion: sugg,
        err : errorkind(),
      });
      alert("Thank you for your suggestion");
      setName("");
      setSugg("");
      setAppErr(false);
      setRecipeErr(false);
      setAddRecipe(false);
      setOther(false);
      navigation.navigate("Profile");
    }
  };
  function checkApperr() {
  if(RecipeErr||AddRecipe||Other){
    return true;
  }
  }
  function checkRecipeerr() {
    if(AppErr||AddRecipe||Other){
      return true;
    }
  }
  function checkAddrec() {
    if(RecipeErr||AppErr||Other){
      return true;
    }
  }
  function checkOther() {
    if(RecipeErr||AddRecipe||AppErr){
      return true;
    }
  }
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <View style={styles.container}>
          <TextField
            required
            w="90%"
            backgroundColor={"#e2e2e2"}
            placeholder="Full Name"
            onChangeText={(name) => setName(name)}
            value={name}
          />
          <TextField
            required
            w="90%"
            multiline={true}
            numberOfLines={5}
            style={styles.suggbox}
            placeholder="Suggestion"
            onChangeText={(sugg) => setSugg(sugg)}
            value={sugg}
          />
        </View>
        <View style={styles.checkboxes}>
          <Checkbox
            value="AppErr"
            my={1}
            onChange={apperrchangehandler}
            colorScheme={"orange"}
            {...(checkApperr() ? { isDisabled: true } : {})}
          >
            App Error
          </Checkbox>
          <Checkbox
            value="RecipeErr"
            my="1"
            onChange={recipeerrchangehandler}
            colorScheme={"orange"}
            {...(checkRecipeerr() ? { isDisabled: true } : {})}
          >
            Recipe Error
          </Checkbox>
          <Checkbox
            value="AddRecipe"
            my="1"
            onChange={addrecipechangehandler}
            colorScheme={"orange"}
            {...(checkAddrec() ? { isDisabled: true } : {})}
          >
            Add Recipe
          </Checkbox>
          <Checkbox
            value="Other"
            my="1"
            onChange={otherchangehandler}
            colorScheme={"orange"}
            {...(checkOther() ? { isDisabled: true } : {})}
          >
            Other (Explain it in suggestion box)
          </Checkbox>
        </View>
        <View style={{ alignItems: "center", marginTop:10 }}>
          <Button style={styles.button} onPress={submitHandler}>
            <Text style={{ color: "white", fontSize: 25, fontFamily: "LeagueSpartan-SemiBold"}}>
              Submit
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  bgimage: {
    flex: 1,
  },
  // ImageText
  imagetext: {
    flexDirection: "row",
    alignItems: "center",
  },
  //Suggestion Box
  suggbox: {
    width: 100,
    backgroundColor: "#e2e2e2",
    textAlignVertical: "top",
  },
  // checkboxes
  checkboxes: {
    flexDirection: "column",
    marginLeft: 20,
    backgroundColor: "#ebebeb4e",
  },
  // Button Properties
  button: {
    borderRadius: 15,
    backgroundColor: color,
    width: 200,
  },
});
export default SuggBox;
