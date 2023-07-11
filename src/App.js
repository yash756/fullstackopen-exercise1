import React from 'react';

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = (props) => {
    return (
        <div>
            <Part partName={props.part[0]} partExercise={props.exercise[0]} />
            <Part partName={props.part[1]} partExercise={props.exercise[1]} />
            <Part partName={props.part[2]} partExercise={props.exercise[2]} />
        </div>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.partName} {props.partExercise}
        </p>
    );
};

const Total = (props) => {
    return (
        <p>
            Number of exercises{' '}
            {props.exercises[0] + props.exercises[1] + props.exercises[2]}
        </p>
    );
};

const App = () => {
    const course = 'half stack application development';
    const part1 = 'fundamentals of react';
    const exercise1 = 10;
    const part2 = 'using props to pass data';
    const exercise2 = 7;
    const part3 = 'state of component';
    const exercise3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content
                part={[part1, part2, part2]}
                exercise={[exercise1, exercise2, exercise3]}
            />
            <Total exercises={[exercise1, exercise2, exercise3]} />
        </div>
    );
};

export default App;
