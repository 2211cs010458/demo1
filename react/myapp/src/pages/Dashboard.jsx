import React from 'react'

const Dashboard = () => {
  return (
    // <div>Dashboard</div>
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <input type="submit" value="Submit" />
        <p>Already have an account? <a href="#">Login</a></p>
      </form>
    </div>
  )
}

export default Dashboard