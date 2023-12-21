import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Event 1'
  },
  {
    id: 'e2',
    title: 'Event 2'
  }
]

export default function EventsPage() {
  return (
    <>
      <h1>Events page</h1>
      <ul>
        {DUMMY_EVENTS.map((dummy_event) => (
          <li key={dummy_event.id} id={dummy_event.id}>
            <Link to={dummy_event.id}>{dummy_event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
