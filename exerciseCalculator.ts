interface ExerciseValues {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string
    target: number,
    average: number
}

interface SuccessValues {
    ratingDescription: string,
    rating: number,
    success: boolean
}
/*
interface ArgsValues {
    value1: number,
    value2: Array<number>
}*/
const countSuccess = (averige: number, target: number): SuccessValues => {
    const success = averige / target
    if (success > 1) {
        return {
            ratingDescription: 'Excelent!',
            rating: 4,
            success: true
        }
    } else if (success === 1) {
        return {
            ratingDescription: 'Good job!',
            rating: 3,
            success: true
        }
    } else if (success > 0.5) {
        return {
            ratingDescription: 'not too bad but could be better',
            rating: 2,
            success: false
        }
    } else {
        return  {
            ratingDescription: 'Mission failed. Better luck next time!',
            rating: 1,
            success: false
        }
    }

}
export const calculateExercises = (a: Array<number>, b:number): ExerciseValues => {

    const countAverage = (a.reduce((a, b) => a+b))/a.length
    const successValues = countSuccess(countAverage, b)
    
    return {
        periodLength: a.length,
        trainingDays: a.filter(day => day !== 0).length,
        success: successValues.success,
        rating: successValues.rating,
        ratingDescription: successValues.ratingDescription,
        target: b,
        average: countAverage
    }
}

/*

const parseCalculatorArguments = (args: Array<string>): ArgsValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    
    const param = args.slice(2);

    const finalArgs: Array<number>  = [];

    param.forEach((v, i) => {
        
        if(!isNaN(Number(v))) {
            if(i === 0){

            } else {
                finalArgs.push(Number(v))
            }
            
        } else {
            throw new Error('Provided values were not numbers!');
        }
    })
    return {
        value1: Number(param[0]),
        value2: finalArgs.slice(0)
    }
    
  }

try {
    const { value1, value2 } = parseCalculatorArguments(process.argv);
    console.log(calculateExercises(value2, value1));
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}
*/