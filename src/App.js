import './App.css';
import foods from './foods.json';
import { Divider, Row } from "antd";
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from "./Components/Search";
import { useState } from 'react';

function App() {

  const formData = {
    status: true,
    message: "Hide Form"
  },

    [Allfoods, setFoods] = useState(foods),
    [searchFoods, setSearchFoods] = useState([]),
    [formSatuts, setStatusForm] = useState(formData),

    addFood = newFood => {
      const newFoods = [...Allfoods];
      newFoods.unshift(newFood);
      setFoods(newFoods);
    },

    searchFood = foodName => {
      let findedFoods = []
      findedFoods = Allfoods.filter(
        food => food.name
          .toLowerCase()
          .includes(foodName.toLowerCase()) && food
      )

      findedFoods.length > 0
        ? setSearchFoods(findedFoods)
        : setSearchFoods('Not Found');
    },

    deleteItem = id => {
      const newFoods = [...Allfoods]
      newFoods.splice(id, 1);
      setFoods(newFoods);
      setSearchFoods(newFoods);
    },


    toggleForm = e => {
      e.preventDefault()
      if (!formSatuts.status) {
        setStatusForm({
          status: true,
          message: "Hide Form"
        })
      } else {
        setStatusForm({
          status: false,
          message: "Add New Food"
        })
      }
    }

  return (
    <div className="App">

      <button
        style={
          {
            padding: "8px 16px",
            border: "2px solid #0033ff",
            color: "#0033ff",
            margin: "16px auto 0",
            display: "block",
            backgroundColor: "unset"
          }
        }
        onClick={(e) => toggleForm(e)}>{formSatuts.message}
      </button>

      {
        formSatuts.status
          ? <AddFoodForm onAddFood={addFood} />
          : ''
      }

      <Search onSearchFood={searchFood} />

      <Divider>
        <h1>Food List</h1>
      </Divider>

      <Row
        style={
          {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }
        }>
        {
          searchFoods.length > 0 ?
            searchFoods === 'Not Found'
              ? <h1>Not found</h1>
              : searchFoods
                .map((food, index) => (
                  <FoodBox
                    onDeleteFood={() => deleteItem(index)}
                    key={index}
                    food={
                      {
                        name: food.name,
                        calories: food.calories,
                        image: food.image,
                        servings: food.servings
                      }
                    } />
                ))
            : Allfoods.length === 0
              ? <h1>Not found</h1>
              : Allfoods
                .map((food, index) => (
                  <FoodBox
                    onDeleteFood={() => deleteItem(index)}
                    key={index}
                    food={
                      {
                        name: food.name,
                        calories: food.calories,
                        image: food.image,
                        servings: food.servings
                      }
                    } />
                ))
        }
      </Row>
    </div>
  );
}

export default App;
