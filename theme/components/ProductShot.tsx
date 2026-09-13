const shots = {
  overview: 'overview-gemini', search: 'search-fulltext', prompt: 'prompts-library',
  export: 'export-formats', tag: 'files-rich-tooltip', agent: 'agent-in-action',
} as const;

/** Real screenshots on a shared backdrop; open the original for details. */
export default function ProductShot({ kind, label, priority = false }: {
  kind: keyof typeof shots; label: string; priority?: boolean;
}) {
  const src = `/better-sidebar/images/features/${shots[kind]}.webp`;
  return <figure className={`product-shot product-shot--${kind}`}>
    <a className="product-shot__stage" style={{ backgroundImage: "url(/better-sidebar/images/showcase/folded-paper.webp)", backgroundSize: "cover", backgroundPosition: "center" }} href={src} target="_blank" rel="noreferrer" aria-label={label}>
      <img src={src} alt={label} loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      <span className="product-shot__expand" aria-hidden="true">↗</span>
    </a>
    <figcaption><span>{label}</span><span aria-hidden="true">BETTER SIDEBAR ↗</span></figcaption>
  </figure>;
}
