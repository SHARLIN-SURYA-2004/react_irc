import React from 'react'
 export default function List1(){
    const college=[{id:1,stuName:"Dhoni",age:40},
                    {id:2,stuName:"Kholi",age:36},
                    {id:3,stuName:"SKY",age:26},]
    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age} </li>)
    return(
        <div>
            <center>
            <h1>List of Cricketers🏏</h1>
            {display}
            </center>
        </div>
    )
 }