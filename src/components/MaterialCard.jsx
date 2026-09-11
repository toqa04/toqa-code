export default function MaterialCard({ name, linkLabel, tagline, materialsUrl }) {
  const available = Boolean(materialsUrl);

  return (
    <article className={`material-card ${available ? "" : "is-soon"}`}>
      <div className="material-card-top">
        <h3>{name}</h3>
        {!available && <span className="material-badge">Coming soon</span>}
      </div>
      <p>{tagline}</p>
      {available ? (
        <a
          href={materialsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-gold material-card-btn"
        >
          Open {linkLabel || name} in Google Drive <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="btn btn-ghost material-card-btn is-disabled" aria-disabled="true">
          Materials coming soon
        </span>
      )}
    </article>
  );
}
