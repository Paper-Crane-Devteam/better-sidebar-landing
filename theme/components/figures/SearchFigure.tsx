import { FigureFrame, FigureInput, FigureFooter, Mono, Chip, Hit } from './primitives';

/**
 * FIG.02 · 链式搜索 —— 全文命中 + 多条件叠加
 *
 * 结构忠实性说明：搜索的是消息内容（不只是标题），条件可叠加
 * （标题 / 标签 / 类型），可限定在当前对话内。
 */

const RESULTS: { title: string; folder: string; before: string; hit: string; after: string }[] = [
  {
    title: 'Manifest V3 service worker lifecycle',
    folder: 'Better Sidebar',
    before: '…the ',
    hit: 'service worker',
    after: ' is terminated after 30s of idle, so the port…',
  },
  {
    title: 'Firefox port · storage quirks',
    folder: 'Better Sidebar',
    before: '…MV2 background page vs MV3 ',
    hit: 'service worker',
    after: ' — the storage API behaves…',
  },
  {
    title: 'Offline caching strategy',
    folder: 'Reading',
    before: '…register the ',
    hit: 'service worker',
    after: ' before the first paint, otherwise…',
  },
];

export default function SearchFigure({ label = 'chained search' }: { label?: string }) {
  return (
    <FigureFrame index="fig.02" label={label} meta="full-text">
      <FigureInput value="service worker" glow />

      <div
        style={{
          display: 'flex',
          gap: '6px',
          marginTop: 'var(--space-xs)',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Mono size={0.58} dim upper>
          filters
        </Mono>
        <Chip deep>in: messages</Chip>
        <Chip deep>tag: infra</Chip>
        <Chip deep>type: gemini</Chip>
      </div>

      <div style={{ marginTop: 'var(--space-sm)' }}>
        <Mono size={0.58} dim upper>
          3 results · 0.02s
        </Mono>
      </div>

      <div style={{ marginTop: 'var(--space-xs)' }}>
        {RESULTS.map((r, i) => (
          <div
            key={r.title}
            style={{
              background: i % 2 === 0 ? 'var(--paper-0)' : 'transparent',
              borderRadius: 'var(--radius)',
              padding: 'var(--space-xs)',
              marginBottom: '2px',
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'baseline' }}>
              <Mono size={0.58} dim>
                {String(i + 1).padStart(2, '0')}
              </Mono>
              <Mono size={0.68} weight={500}>
                {r.title}
              </Mono>
            </div>
            <div style={{ paddingLeft: '26px', marginTop: '3px' }}>
              <Mono size={0.62} color="var(--ink-2)">
                {r.before}
                <Hit>{r.hit}</Hit>
                {r.after}
              </Mono>
            </div>
            <div style={{ paddingLeft: '26px', marginTop: '3px' }}>
              <Mono size={0.56} dim upper>
                {r.folder}
              </Mono>
            </div>
          </div>
        ))}
      </div>

      <FigureFooter items={['searched 12,481 messages', 'index stays on device']} />
    </FigureFrame>
  );
}
