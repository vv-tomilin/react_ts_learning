import React, { FC, useState, useRef } from 'react';

const EventsExample: FC = () => {

  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(value);

    console.log(inputRef.current?.value);

  };

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <div>
        <label>
          Управляемый:
          <input
            type="text"
            value={value}
            onChange={changeHandler} />
        </label>
      </div>

      <div>
        <label>
          Неуправляемый:
          <input
            type="text"
            ref={inputRef} />
        </label>
      </div>

      <button onClick={clickHandler}>Value Log</button>

      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red' }}>
      </div>

      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}>
      </div>
    </div>
  );
};

export default EventsExample;