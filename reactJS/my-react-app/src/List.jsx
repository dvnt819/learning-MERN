
function List(){
const fruits = [{id:1, name:'apple' , calories: 100},
                {id:2, name:'banana' , calories: 110},
                {id:3, name:'orange' , calories: 85} ,
                {id:4, name:'watermelon' , calories: 150},
                {id:5, name:'pineapple' , calories: 65}]
    
    
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));
    // fruits.sort((a,b)=>a.calories - b.calories);
    // fruits.sort((a,b)=>b.calories - a.calories);

    // const lowCalFruits = fruits.filter(lowCalFruit => lowCalFruit.calories <= 100)
    // const highCalFruits = fruits.filter(highCalFruit => highCalFruit.calories >100)

    const items = fruits.map(fruit => <li key={fruit.id}>{fruit.name} contains {fruit.calories} calories</li>)

    return <ul>{items}</ul>
}

export default List;