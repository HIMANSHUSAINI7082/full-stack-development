
import React from 'react';

const FruitList = () => {
    const fruits = ["Apple", "Banana"];

    return (
        <ul>
            {fruits.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
};

export default FruitList;
