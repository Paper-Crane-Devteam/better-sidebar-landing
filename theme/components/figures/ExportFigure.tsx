import { FigureFrame, FigureFooter, Mono } from './primitives';

/**
 * FIG.05 · 导出 —— 一份对话的多个出口
 *
 * 结构忠实性说明：对话可导出为 Markdown / 纯文本 / JSON；
 * Powerpack 追加 Notion 与 Obsidian 导出（保留格式，支持批量）；
 * 片段库（Snippets）同样可导出。
 *
 * 用 mono 制表符号绘制分流图 —— 零图形资产。
 */

const OUTPUTS: { branch: string; name: string; note: string; pack?: boolean }[] = [
  { branch: '\u251c\u2500', name: 'markdown', note: '.md — headings, lists, code fences' },
  { branch: '\u251c\u2500', name: 'plain text', note: '.txt' },
  { branch: '\u251c\u2500', name: 'json', note: '.json — full structure' },
  { branch: '\u251c\u2500', name: 'notion', note: 'page in your workspace', pack: true },
  { branch: '\u2514\u2500', name: 'obsidian', note: 'note in your vault', pack: true },
];

export default function ExportFigure({ label = 'export' }: { label?: string }) {
  return (
    <FigureFrame index="fig.05" label={label} meta="batch supported">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
        <Mono size={0.68} weight={500} upper>
          conversation
        </Mono>
        <Mono size={0.6} dim>
          128 messages
        </Mono>
      </div>

      <div style={{ marginTop: '6px' }}>
        {OUTPUTS.map((o) => (
          <div
            key={o.name}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 'var(--space-xs)',
              padding: '5px 0',
            }}
          >
            <Mono size={0.66} dim style={{ whiteSpace: 'pre' }}>
              {o.branch}
            </Mono>
            <Mono size={0.68} weight={500} upper track={0.1}>
              {o.name}
            </Mono>
            <Mono size={0.6} dim>
              {o.note}
            </Mono>
            {o.pack && (
              <span style={{ marginLeft: 'auto' }}>
                <Mono size={0.54} dim upper>
                  powerpack
                </Mono>
              </span>
            )}
          </div>
        ))}
      </div>

      <FigureFooter items={['formatting preserved', 'snippets too', 'sql dump for everything']} />
    </FigureFrame>
  );
}
