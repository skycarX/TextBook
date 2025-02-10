import CreateTask from "./CreateTaskPage"
import { useState } from "react"
import '../App.css'

export default function Button({setList, list, ClassName, element, id, children}){
    const [Hidden, setHidden] = useState(true)
    const openModal = () => {
        setHidden(false)
    }
    return(
        <>
        <button className={ClassName?ClassName:''}  onClick={openModal}><h1>{children?children:'+'}</h1></button>
        {!Hidden && <CreateTask setList={setList} list={list} setHidden={setHidden} hidden={Hidden} id={id} element={element} />}
        </>
    )
}