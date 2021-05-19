import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './components/navbar'
import { Sidebar } from './components/sidebar'
import { MainPage } from './pages/MainPage'
import { NotesPage } from './pages/NotesPage'
import { PostPage } from './pages/PostPage'
import { inc, dec, getPosts, deletePost } from './actions'
import './App.css'

export default function App() {
  //const [notes, setNotes] = useState([])

  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter)
  const decrement = () => dispatch(dec())
  const increment = () => dispatch(inc())

  const deleteNote = (id) => {
    dispatch(deletePost(id));
  }

  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='input-group' style={{ width: '120px' }}>
              <button className='btn btn-outline-primary' onClick={decrement}>
                -
              </button>
              <span className='form-control text-center'>{state.counter}</span>
              <button className='btn btn-outline-primary' onClick={increment}>
                +
              </button>
            </div>
          </div>
          <hr />
          <Switch>

            <Route
              path='/posts/:id'
            >
              <PostPage />
            </Route>

            {/* <Route path='/notes' component={notes} /> */}

            <Route path='/notes'>
              <NotesPage removeNote={deleteNote} />
            </Route>

            <Route path='/about'>
              <h1>About Page</h1>
            </Route>

            <Route path='/'>
              <MainPage />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  )
}
