const arr = [
    { id: 's123', name: 'John', GPA: '3.5' },
    { id: 's234', name: 'Mary', GPA: '3.6' },
    { id: 's345', name: 'Peter', GPA: '3.7' },
    { id: 's456', name: 'Jane', GPA: '3.8' },
];

//const names = arr.map((std) = std.name);
//console.log(names);

const newStd = arr.map((std) => {

    let grade = 'pass';
    if (std.GPA < 3) {
        grade = 'fail';
    }
    return {
       ...std,
        grade : grade
    };
});

console.log( arr.filter((std) => std.GPA > 3? true : false));
