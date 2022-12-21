import { useState } from 'react'

function Explore() {
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}])

  return (
    <div>
      {list.map((item, index) => (
        <div className="alert alert-secondary" key={index}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          deleniti exercitationem alias eius. Minima dolore molestiae aliquam
          nam necessitatibus, perspiciatis doloremque pariatur blanditiis ea
          consectetur. Voluptatum dolores voluptatem quia quaerat! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eos atque dicta ducimus
          animi culpa inventore recusandae et excepturi? Vel nulla beatae quas
          repudiandae voluptate. Dolorem commodi quia sunt doloremque saepe!
        </div>
      ))}
    </div>
  )
}

export default Explore
