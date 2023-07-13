import React from 'react';

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = (props) => {
    return (
        <div>
            <Part
                partName={props.parts[0].name}
                partExercise={props.parts[0].exercises}
            />
            <Part
                partName={props.parts[1].name}
                partExercise={props.parts[1].exercises}
            />
            <Part
                partName={props.parts[2].name}
                partExercise={props.parts[2].exercises}
            />
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
            {props.parts[0].exercises +
                props.parts[1].exercises +
                props.parts[2].exercises}
        </p>
    );
};

const App = () => {
    const course = {
        name: 'half stack application development',

        parts: [
            {
                name: 'fundamentals of react',
                exercises: 10,
            },

            {
                name: 'using props to pass data',
                exercises: 7,
            },

            {
                name: 'state of component',
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
