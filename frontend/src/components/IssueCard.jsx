function IssueCard({ issue, onStatusChange, onDelete }) {
  return (
    <li className="issue-card">
      <div>
        <h3>{issue.title}</h3>
        <p>{issue.description}</p>
      </div>
      <div className="issue-meta">
        <label className={`status-select status-${issue.status.toLowerCase().replaceAll(' ', '-')}`}>
          <span className="sr-only">Status for {issue.title}</span>
          <select
            value={issue.status}
            onChange={(event) => onStatusChange(issue.id, event.target.value)}
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </label>
        <span className={`priority priority-${issue.priority.toLowerCase()}`}>{issue.priority} priority</span>
        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(issue.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default IssueCard
