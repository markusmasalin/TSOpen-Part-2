import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (_req, _res) => {

      if (_req.query.height && _req.query.weight){
        try {
          validator([_req.query.height, _req.query.weight])
          const values = calculateBmi(Number(_req.query.height), Number(_req.query.weight ));
          _res.send(values)
        } catch(e){
          _res.send(e)
        }

      } else {
        _res.send('Malformatted parameters');
      }
  });

  app.post('/exercises', (_req, res) => {
    const exercises = _req.body
    try {
      validator(exercises.daily_exercises);
      validator([exercises.target]);
      console.log("ok");
      res.send(calculateExercises(exercises.daily_exercises, exercises.target));

    } catch(e) {
      res.status(400).json(e.toString());
    }
   
  });

  const validator = (values:any[]) => {
    console.log(3, values);
      if (values){
        values.forEach(v => {
          if(!isNaN(Number(v))) {
          } else {
            throw new Error('Malformatted parameters');
          }
        });
      } else {
        throw new Error('Parameters missing');
      }
  } 

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});