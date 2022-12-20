function App() {
  let title = 'map Demo'
  let user = { id: 1, city: 'mumbai' }

  // we user map object and access the city we can not access directly bcz multiple item present in the city
  return (
    <div>
      <h1>{title}</h1>
      <h1>{user.city}</h1>
    </div>
  )
}
export default App
