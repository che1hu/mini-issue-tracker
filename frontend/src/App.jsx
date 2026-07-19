import { useState } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'
import IssueForm from './components/IssueForm'
import IssueList from './components/IssueList'

const initialIssues = [
  {
    id: 1,
    title: 'Add issue filtering',
    description: 'Let people narrow the list by issue status.',
    status: 'Open',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Improve empty states',
    description: 'Provide clearer guidance when there are no issues to show.',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Review issue details',
    description: 'Check the copy and labels shown on each issue card.',
    status: 'Resolved',
    priority: 'Low',
  },
]

function App() {
  const [issues, setIssues] = useState(initialIssues)
  const [selectedFilter, setSelectedFilter] = useState('All')

  function handleAddIssue({ title, description, priority }) {
    const newIssue = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      status: 'Open',
    }

    setIssues((currentIssues) => [...currentIssues, newIssue])
  }

  function handleStatusChange(issueId, status) {
    setIssues((currentIssues) =>
      currentIssues.map((issue) =>
        issue.id === issueId ? { ...issue, status } : issue,
      ),
    )
  }

  function handleDelete(issueId) {
    setIssues((currentIssues) =>
      currentIssues.filter((issue) => issue.id !== issueId),
    )
  }

  const filteredIssues =
    selectedFilter === 'All'
      ? issues
      : issues.filter((issue) => issue.status === selectedFilter)

  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">Workspace</p>
        <h1>Mini Issue Tracker</h1>
        <p className="subtitle">Capture, organize, and follow up on your team&apos;s work.</p>
      </header>

      <IssueForm onAddIssue={handleAddIssue} />
      <FilterBar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
      <IssueList
        issues={filteredIssues}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  )
}

export default App
