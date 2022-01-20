import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

function App() {

  const [products, setProducts] = useState([
    {
      id: 453454,
      name: "silla"
    },
    {
      id: 4353,
      name: "taburete"
    },
    {
      id: 23234,
      name: "armario"
    },
    {
      id: 675675,
      name: "mesa"
    },
    {
      id: 443,
      name: "sofa"
    }
  ])

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = [... list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  const handleDrop = ({source, destination}: DropResult) => {
    if(!destination) return;
    if(source.index === destination.index && source.droppableId === destination.droppableId) return;
    setProducts(prevProducts => reorder(prevProducts, source.index, destination.index));
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId='productsDrop'>
          {(droppableProvided) => (
            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='grid'>
              {products.map((product, index) => (
                <Draggable key={product.id} draggableId={product.id.toString()} index={index}>
                  {(draggableProvided) => (
                    <h1
                    {... draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {... draggableProvided.dragHandleProps}
                    >{product.name}</h1>
                  )}
                </Draggable>
              ))}
            {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
