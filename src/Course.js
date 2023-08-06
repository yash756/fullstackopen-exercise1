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

export default Course;
