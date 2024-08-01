export const Header = ({ course }) => <h1>{course}</h1> ;

export const Part = ({ name, exercises }) => 
    <p>{name} {exercises}</p>
;

export const Course = ({ content }) => {
    return (
        <div>
            <h2>{content.name}</h2>
            {content.parts.map(x => (
                <Part key={x.id} name={x.name} exercises={x.exercises} />
            ))}
        </div>
    )
};

export const Content = ({ course }) => {
    return (
        <div>
            {course.map(course => (
                <Course key={course.id} content={course} />
            ))}
            {<Totals content={course} />}
        </div>
    )
};

export const Totals = ({ content }) => {
    const totalExercises = content.reduce((total, course) => {
        return total + course.parts.reduce((sum, part) => sum + part.exercises, 0);
    }, 0);


    return (
        <div className="total_exercises">
            <p><strong>Total Exercises</strong> {totalExercises}</p>
        </div>
    )
};
