import React from 'react';

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

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
        <h4>
            Number of exercises{' '}
            {parts.reduce((acc, curr) => acc + curr.exercises, 0)}
        </h4>
    );
};

const App = () => {
    const course = [
        {
            name: 'half stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];

    return (
        <div>
            {course.map((crse) => (
                <Course key={crse.id} course={crse} />
            ))}
        </div>
    );
};

export default App;
