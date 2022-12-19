// we call the function in the function with Attribute
function App() {
  return (
    <div>
      <Person name="Rohit" />
      <Person name="Ronit" />
      <Person name="Rutu" />
      <Person name="Sagar" />
      <Person name="Vishal" />
      <Person name="Kiran" />
      <Person name="Vipul" />
    </div>
  )
}

// <Person />
function Person() {
  return (
    <div>
      <img src="https://picsum.photos/400" alt="" />
      <h1>Rohit!!!! </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        delectus placeat? Consequuntur iusto perferendis voluptatibus, ipsa sit
        non. Quo cumque veniam nostrum voluptatem qui accusantium ipsa labore
        libero! Tempore, consequuntur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        adipisci blanditiis sapiente doloremque consequatur quod nemo itaque,
        deleniti accusamus fugit nihil architecto quidem voluptas repellendus
        velit officia nulla vitae ullam.
      </p>
    </div>
  )
}

export default App
