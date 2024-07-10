import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox(props) {

  const deleteFood = e => {
    e.preventDefault(e);
    props.onDeleteFood(e.target.value);
  }

  return (
    <Col style={
      {
        margin: "8px"
      }
    }>
      <Card
        title={props.food.name}
        style={
          {
            width: 230,
            height: 320,
            margin: "10"
          }
        }
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={(e) => { deleteFood(e) }}> Delete </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;