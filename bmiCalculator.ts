interface MultiplyValues {
    value1: number;
    value2: number;
  }

export const calculateBmi = (h: number, w: number) => {
  console.log(h, w, "calculateBmi arvot");
    const height = h /100
    return {
     
        weight: w,
        height: h,
        bmi: selectText(w / (height * height))
    }
    
}

export const selectText = (a: number): string => {
    if (a < 18.5) {
        console.log(a);
        return 'Underweight'
    } else if (a <= 25 ) {
        console.log(a);
        return 'Normal (Healthy weigth)'
    } else if (a > 30) {
        console.log(a);
        return 'Obese'
    } else {
        console.log(a);
        return 'Overweight'
    }
}

export const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }

/*
try {
    const { value1, value2 } = parseArguments(process.argv);
    calculateBmi(value1, value2);
     } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }
  */