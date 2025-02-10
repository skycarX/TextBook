import Button from "./Button"
import IMG from '../assets/up_arrow_jbbuzg2tfbuw.svg'

export default function FirstTry({list, setList}){
    return(
        <main>
        <Button setList={setList} list={list}></Button>
        <div className="catch">
        <h1>Упс, похоже у вас совсем нет заметок!
        Нажмите сюда, чтобы создать первую.</h1>
        <img src={IMG}/>
        </div>
        </main>
    )
}