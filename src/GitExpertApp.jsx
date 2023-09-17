import { useState } from "react"
// import {AddCategory} from './components/addCategory';
// import { GifGrid } from "./GitGrid";

//Como usamos el Archivo de barril, pindex.js, por tanto importamos de esta forma 
import {AddCategory,GifGrid} from './components';

export const GifExpertApp = ()=>{

    const[categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (NewCategory)=>{
        // console.log(NewCategory);
        if(categories.includes(NewCategory)) return;
        setCategories([NewCategory,...categories]);
    }

    return (
        <>
            <h1>
                GitExpertApp
            </h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
                // onNewCategory = { onAddCategory} //Otra forma de hacerlo

            />

            {
                categories.map( ( category ) => (
                    < GifGrid 
                        key = {category} 
                        category = {category} 
                    />
                ))

                
            }

        </>
    )
}