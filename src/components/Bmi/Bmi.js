/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import Label from './Label';
import Input from './Input';
import SecondaryBtn from "./SecondaryBtn";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('You are too lean, eat up!');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('Your weight is normal.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight, consider burning some calories.');
    } else {
      setMessage('You are obese, burn some calories.');
    }
  };

  return (
    <section className="bmi" css={styles}>
      <div className="container">
        <h3 className="heading">CALCULATE YOUR BMI</h3>
        <div className="bmiWrapper">
          <div className="inputWrapper">
            <Label htmlFor="weight">Weight (Kg)</Label>
            <Input
              id="weight"
              name="weight"
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              css={inputStyles}
            />
          </div>
          <div className="inputWrapper">
            <Label htmlFor="height">Height (Cm)</Label>
            <Input
              id="height"
              name="height"
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              css={inputStyles}
            />
          </div>
          <SecondaryBtn
            type="submit"
            className="calculateBtn"
            onClick={calculateBMI}
          >
            Calculate BMI
          </SecondaryBtn>

          {bmi !== null && (
            <div className="result">
              <p className="bmiValue">Your BMI: <span>{bmi}</span></p>
              <p className="bmiMessage">{message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: #000;
  .container {
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .heading {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 20px;
  }
  .bmiWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000;
    padding: 20px;
    border-radius: 10px;
  }
  .inputWrapper {
    width: 100%;
    max-width: 300px;
    margin-bottom: 15px;
  }
  .calculateBtn {
    margin-top: 20px;
  }
  .result {
    margin-top: 20px;
    background: #313131;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
  }
  .bmiValue {
    font-size: 1.2rem;
  }
  .bmiMessage {
    font-size: 1rem;
    color: #f39c12;
  }
  .calculateBtn {
     background: red;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background: darkred;
      }

  }
`;

const inputStyles = css`
  background: linear-gradient( white);
  color: #000;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export default BMI;
