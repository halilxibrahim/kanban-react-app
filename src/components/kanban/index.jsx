import './kanban.scc'
import { DrahDropContext, Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import mockData from '../../mockData'
import { useState } from 'react'


const Kanban = () => {
  
  const [data, setData] = useState(mockData)
  const onDragEnd = result => {
    console.log(result)
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}> 
      <div className="kanban">
        {
          data.map(section => {
            <Droppable
                key={section.id}
            >

            </Droppable>
          })
        }
      </div> 
    </DragDropContext>
  )
}

export default Kanban