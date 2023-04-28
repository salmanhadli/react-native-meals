import { useContext } from "react";
import MealsList from "../components/MealsList/MealList";
import { FavoritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen() {
  const favMealsContext = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) =>
    favMealsContext.ids.includes(meal.id)
  );

  if (favMeals.length === 0)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favorite Meals Yet</Text>
      </View>
    );
  return <MealsList items={favMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
