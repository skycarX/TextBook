import { useState } from "react";
import Button from "./Button";

//Написать функцию перебора объекта и, если имеется время, которое заканчивается, пометить его срочным!

export default function MainPart({list, setList}){
    // const timeCheck = () => {
    //     list.forEach(element => {
    //         if ((element.Time.getSeconds - new Date().getSeconds)<=86400){
    //             alert('Работает')
    //         }  
    //     });
    //}
    const [hideDescription, setHideDescription] = useState(true)
    const showDescription = (elementIndex) => {
        const newList = [...list];
        newList[elementIndex].HiddenPart = !newList[elementIndex].HiddenPart;
        setList(newList);
    };
    return(
        <main>
        <Button setList={setList} list={list} element></Button>
         {
            list.map((element, index) =>
                    <div className="itemblock" key={element.id} >
                    <Button setList={setList} list={list} ClassName={'Change'} element={element} id={element.id}>✎</Button>
                    <section><h1 title={element.Name}>{element.Name}</h1> {element.Description!=''?<button className="ShowDescription" onClick={() => showDescription(index)}>{!element.HiddenPart?"▼":"▲"}</button>:''} <h2>{(element.Time!='')?element.Time:''}</h2></section>
                   {!element.HiddenPart?
                    <article>
                   <h1>{element.Name}</h1> <h2>{element.Time}</h2>
                    <p>{element.Description}</p>
                    </article>
                    :''}
                    <hr />
                    {(element.Comment!='')?<article><p>{element.Comment}</p></article>:''}
                    </div>
                    )}
        </main>
    )
}