import React from 'react';

const Header = ({ course }) => {
    return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part
                    key={part.id}
                    partName={part.name}
                    partExercise={part.exercises}
                />
            ))}
        </div>
    );
};

const Part = ({ partName, partExercise }) => {
    return (
        <p>
            {partName} {partExercise}
        </p>
    );
};

const Total = ({ parts }) => {
    return (
        <p>
            Number of exercises{' '}
            {parts.reduce((acc, curr) => acc + curr.exercises, 0)}
        </p>
    );
};

const App = () => {
    const course = {
        id: 1,
        name: 'half stack application development',

        parts: [
            {
                name: 'fundamentals of react',
                exercises: 10,
                id: 1,
            },

            {
                name: 'using props to pass data',
                exercises: 7,
                id: 2,
            },

            {
                name: 'state of component',
                exercises: 14,
                id: 3,
            },
            {
                name: 'redux',
                exercises: 11,
                id: 4,
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
