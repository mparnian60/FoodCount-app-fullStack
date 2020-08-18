import React, { useState, useEffect } from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import createDayPlanAPI from '../api/dayPlanAPI';

const DayPlanForm = ({foodId, onChangeDayPlanFormValue, date}) => {
    // console.log('dayplanform props',props);

    const [mealAndServingSize, setMealAndServingsize] = useState({
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
    });
    const [newdate, setDate] = useState(date)


    const handleDate = e => {
        let value = e.currentTarget.value;
        setDate(value);
    }

    //for having couple of variable in one state, we need to use the spread function (...) to make a new object
    //react always like to keep the previous and have the new and always compare them togeteher
    const onChange = (e) => {
        const newMealAndServingSizes = { ...mealAndServingSize }
        newMealAndServingSizes[e.target.name] = e.target.value
        setMealAndServingsize(newMealAndServingSizes);
    }

    //now we capture everytime state changes and as setStae is a asynchronous function, if we don't put it in a useeffect, 
    //onChangeDayPlanFormValue get called before change state get captured
    useEffect(() => {
        onChangeDayPlanFormValue({
            date: newdate,
            meal: mealAndServingSize
        })
    })



    return (
        <Form>
            <FormGroup className="mx-2" check>
                <Label for="backdrop" fdxzzx>Choose your meal by adding the Serving Size</Label>{' '}
                <FormGroup>
                    <Label >Breakfast</Label>
                    <Input  className="modalInput" type="number" name="breakfast" value={mealAndServingSize.breakfast} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label >Lunch</Label>
                <Input className="modalInput" type="number" name="lunch" value={mealAndServingSize.lunch} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label >Dinner</Label>
                <Input className="modalInput" type="number" name="dinner" value={mealAndServingSize.dinner} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label >Snack/Other</Label>
                <Input className="modalInput" type="number" name="snack" value={mealAndServingSize.snack} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label for="backdrop">Date</Label>{' '}
                <Input className="modalInput" type="date" name="date" id="backdrop" value={newdate} onChange={handleDate}>
                </Input>
                </FormGroup>

            </FormGroup>
            {' '}
            
            {/* <FormGroup>
                <Label for="backdrop">Serving size</Label>{' '}
                <Input type="number" name="servingSize" id="backdrop" onChange={handleServingSize}>
                </Input>
            </FormGroup> */}
        </Form>
    )
}

export default DayPlanForm;

