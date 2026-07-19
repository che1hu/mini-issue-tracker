import IssueCard from './IssueCard'

function IssueList({ issues, onStatusChange, onDelete }) {
  return (
    <section className="issue-section" aria-labelledby="issues-heading">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Overview</p>
          <h2 id="issues-heading">Issues</h2>
        </div>
        <p>{issues.length} placeholder issues</p>
      </div>
      <ul className="issue-list">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  )
}

export default IssueList
