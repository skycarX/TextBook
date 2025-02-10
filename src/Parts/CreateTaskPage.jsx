import { useState, useEffect } from "react";

export default function CreateTask({ list, setList, setHidden, hidden, element, id }) {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [hiddenTime, setHiddenTime] = useState(true);
  const [Time, setTime] = useState('');
  const [hiddenComment, setHiddenComment] = useState(true);
  const [Comment, setComment] = useState('');

  useEffect(() => {
    if (id) {
      const foundTask = list.find(checkId => checkId.id === id);
      if (foundTask) {
        setName(foundTask.Name);
        setDescription(foundTask.Description);
        setComment(foundTask.Comment);
        setTime(foundTask.SystemTime);
      }
    }
  }, [id, list]);

  const handleReset = () => {
    setHidden(true);
    setName('');
    setDescription('');
    setTime('');
    setComment('');
  };

  const newTask = (Name, Description, Time, Comment) => {
    const SystemTime = Time;
    Time = Time.replace(/-/g, '/').replace('T', ' ');
    let newList;

    if (!id) {
      newList = [
        ...list,
        {
          id: new Date().getTime(),
          SystemTime,
          Name,
          Description,
          Time,
          Comment,
          HiddenPart: true,
        }
      ];
    } else {
      const foundTaskIndex = list.findIndex(checkId => checkId.id === id);
      if (foundTaskIndex !== -1) {
        newList = [...list];
        newList[foundTaskIndex] = {
          id: new Date().getTime(),
          SystemTime,
          Name,
          Description,
          Time,
          Comment,
          HiddenPart: true,
        };
      }
    }

    setList(newList);
    setHidden(true);
  };

  const Remove = () =>{
    let newList;
    const foundTaskIndex = list.findIndex(checkId => checkId.id === id);
    if (foundTaskIndex !== -1) {
        newList = [...list];
        newList.splice(foundTaskIndex, 1)
    }
    
    setList(newList);
    setHidden(true);
  }

    return (
        <div className={`TaskPage`}>
            <h1 className="Exit" onClick={handleReset}>X</h1>
            <h2>Создать заметку</h2>
            {id?<h2 className="Remove" onClick={Remove}>Удалить заметку</h2>:''}
            <h3>Название</h3>
            <p>Введите краткий заголовок, отражающий суть заметки. Пример: `Идеи для статьи`</p>
            <input type="text" name="name" id="name" value={Name} onChange={(event) => setName(event.target.value)} />
           
            <h3>Описание</h3>
            <p>Опишите основные моменты или идеи. Чем яснее, тем легче будет вернуться к заметке. Пример: `Обсудить цели проекта`.</p>
            <textarea value={Description} onChange={(event) => setDescription(event.target.value)} />
            
            <h3>Дата</h3>
            {hiddenTime ? (
                <h3 style={{ cursor: 'pointer' }} onClick={() => setHiddenTime(false)}>+</h3>
            ) : (
                <>
                    <p>Укажите срок завершения задачи. Например, `31 декабря 2023, 15:00`.</p>
                    <input type="datetime-local" value={Time} onChange={(event) => setTime(event.target.value)} />
                </>
            )}

            <h3>Комментарий</h3>
            {hiddenComment ? (
                <h3 style={{ cursor: 'pointer' }} onClick={() => setHiddenComment(false)}>+</h3>
            ) : (
                <>
                    <p>Добавьте дополнительные мысли или ссылки. Например: `Идея для дальнейшего развития: исследовать конкурентов`.</p>
                    <input type="text" value={Comment} onChange={(event) => setComment(event.target.value)} />
                </>
            )}
            <button className="confirm" onClick={() => newTask(Name, Description, Time, Comment)}>Сохранить</button>
        </div>
    );
}
