import { useState } from 'react'

function IssueForm({ onAddIssue }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      setError('Please enter an issue title.')
      return
    }

    onAddIssue({
      title: title.trim(),
      description: description.trim(),
      priority,
    })

    setTitle('')
    setDescription('')
    setPriority('Medium')
    setError('')
  }

  return (
    <section className="panel" aria-labelledby="create-issue-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">New issue</p>
          <h2 id="create-issue-heading">Create an issue</h2>
        </div>
        <p>Use this form to add a new item to your tracker.</p>
      </div>

      <form className="issue-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="What needs attention?"
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            rows="4"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Add helpful context..."
          />
        </label>
        <label>
          Priority
          <select
            name="priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit">Add issue</button>
      </form>
    </section>
  )
}

export default IssueForm
