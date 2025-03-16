import PropTypes from "prop-types"
import React from "react"
// function List(props){

// // const fruits = [{id:1, name:'apple' , calories: 100},
// //                 {id:2, name:'banana' , calories: 110},
// //                 {id:3, name:'orange' , calories: 85} ,
// //                 {id:4, name:'watermelon' , calories: 150},
// //                 {id:5, name:'pineapple' , calories: 65}]
    
    
//     // fruits.sort((a,b)=>a.name.localeCompare(b.name));
//     // fruits.sort((a,b)=>b.name.localeCompare(a.name));
//     // fruits.sort((a,b)=>a.calories - b.calories);
//     // fruits.sort((a,b)=>b.calories - a.calories);

//     // const lowCalFruits = fruits.filter(lowCalFruit => lowCalFruit.calories <= 100)
//     // const highCalFruits = fruits.filter(highCalFruit => highCalFruit.calories >100)

//     const itemList = props.items
//     const category = props.category

//     const items = itemList.map(item => <li key={item.id}>{item.name} contains {item.calories} calories</li>)

//     return (
//         <>
//             <h2>{category}</h2>
//             <ul>{items}</ul>
//         </>
//     )
// }
// List.PropTypes ={
//     category : PropTypes.string,
//     items : PropTypes.arrayOf(PropTypes.shape({ id : PropTypes.number,
//                                                 name : PropTypes.string,
//                                                 calories : PropTypes.number}))
// }

// List.defaultProps = {
//     category : "category",
//     items : []
// } 

// export default List;


export default function List({item=[],categorys='Unknown'}){

    const ListItem = item
    const category = categorys

    const items= ListItem.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <>  
            <h2>{category}</h2>
            <ol>
                {items}
            </ol>
        </>
    )
}