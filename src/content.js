import {useState} from 'react';
import{FaTrashAlt} from 'react-icons/fa';
// import DeleteIcon from '@mui/icons-material/Delete';
const Content = () => {
    
        const [items,setItems]= useState([
            { 
                id:1,
                checked: true,
                item:"one half pound bag of cocoa covered Almonds Unsalted"
               },
           {

            id:2,
            checked:false,
            item:"Item 2"
           },
           {

            id:3, 

            checked:false,
            item:"Item 3"
           }

         ] );
         const handleCheck= (id)=> {
             const listItems = items.map((item)=> item.id === id? {...item, checked: 
             ! item.checked } : item); 
             setItems(listItems);
             localStorage.setItem("Shopping list ",JSON.stringify(listItems));


             

         }
        
    
//     const handleNames=()=>{
//         const people=['Mary','Joseph','Peter'];
//         const int=Math.floor(Math.random()*3);
//         setName(people[int]);
      
//       }
//       const handleClick=()=>{
//           setCount(count+1)
//           setCount(count+1)
//           console.log(count)
//  }
//  const handleClick2=(name)=>{
//     console.log(count)
// }
// // const handleClick3=(e)=>{
// //     console.log(e.target.innerText)
// // }

    return (

        <main>

            {/* <p onDoubleClick={handleClick}>
                Hello {name}
            </p>
            <button onClick={handleNames}>change names  </button>
            <button onClick={handleClick}>click here</button>

            
            <button onClick={handleClick2}>click here</button> */}
            <ul>
                {items.map((item)=>(
                    <li className="item" key={item.id}>
                        <input type="checkbox"
                        onChange={ () =>handleCheck
                            (item.id)}
                        checked={item.checked}
                        />
                        <label onDoubleClick={()=>handleCheck(item.id)}> {item.item}</label>
                        <FaTrashAlt role="button" 
                        tabIndex="0" 
                        />
                         

                    </li>
                ))}
            </ul>
        </main>
                
        
    )
}

export default Content;
