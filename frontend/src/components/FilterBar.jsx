const filters = ['All', 'Open', 'In Progress', 'Resolved']

function FilterBar({ selectedFilter, onFilterChange }) {
  return (
    <section className="panel" aria-labelledby="filter-heading">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">View</p>
          <h2 id="filter-heading">Filter issues</h2>
        </div>
      </div>
      <div className="filters" aria-label="Issue filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-button${selectedFilter === filter ? ' active' : ''}`}
            aria-pressed={selectedFilter === filter}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FilterBar
