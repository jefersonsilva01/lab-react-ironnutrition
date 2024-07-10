// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {

  const oneFood = {
    name: null,
    image: null,
    calories: null,
    servings: null
  },

    [food, setFood] = useState(oneFood),

    changeValue = e => {
      e.preventDefault();
      const { name, value } = e.target;
      food[name] = value
    },

    createFood = e => {
      e.preventDefault();
      props.onAddFood(food)
      setFood(oneFood)
    }

  return (
    <form
      onSubmit={createFood}
      style={
        {
          width: "500px",
          height: "500px",
          margin: "0 auto"
        }
      }>
      <Divider><h1>Add Food Entry</h1></Divider>

      <label>Name</label>
      <Input
        name="name"
        style={
          {
            margin: "16px auto"
          }
        }
        value={undefined}
        type="text"
        onChange={(e) => changeValue(e)} />

      <label>Image</label>
      <Input
        name="image"
        style={
          {
            margin: "16px auto"
          }
        }
        value={undefined}
        type='text'
        onChange={(e) => changeValue(e)}
        placeholder='e.g. https://i.imgur.com/eTmWoAN.png'
      />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input
        name="calories"
        style={
          {
            margin: "16px auto"
          }
        }
        value={undefined}
        type='number'
        onChange={(e) => changeValue(e)} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input
        name="servings"
        style={
          {
            margin: "16px auto"
          }
        }
        value={undefined}
        type='number'
        onChange={(e) => changeValue(e)} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit"> Create</button>
    </form>
  );
}

export default AddFoodForm;