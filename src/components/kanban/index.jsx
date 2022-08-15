import './kanban.scss'
import { DrahDropContext, Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import mockData from '../../mockData'

import { useState } from 'react'


const Kanban = () => {
  const [data, setData ] = useState(mockData)

  const onDragEnd = result => {
    console.log(result)
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}> 
      <div className="kanban">
        {
          data.map(section => (
            <Droppable
                key={section.id}
                droppableId={section.id}
            >
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className='kanban_section'
                    ref={provided.innerRef}
                  >
                     <div className="kanban_section_title">
                        {section.title}
                     </div>
                  </div>
                )}
            </Droppable>
          ))
        }
      </div> 
    </DragDropContext>
  )
}

export default Kanban