import { FigureFrame, FigureRow, FigureFooter, FigureInput, Mono, Dot, Chip } from './primitives';

/**
 * FIG.01 · 侧边栏 —— 首页主视觉
 *
 * 结构忠实性说明：标签页、文件夹树、嵌套、颜色、当前对话定位、
 * 底部计数均对应产品真实存在的界面元素。
 */

const TABS = ['files', 'search', 'prompts', 'gems', 'tags'];

interface TreeNode {
  kind: 'folder' | 'chat';
  name: string;
  color?: string;
  open?: boolean;
  indent: number;
  active?: boolean;
  tag?: string;
  count?: number;
}

const TREE: TreeNode[] = [
  { kind: 'folder', name: 'Better Sidebar', color: 'var(--tag-indigo)', open: true, indent: 0, count: 24 },
  { kind: 'chat', name: 'Manifest V3 service worker lifecycle', indent: 1, tag: 'infra' },
  { kind: 'chat', name: 'SQLite WASM bundle size', indent: 1, active: true, tag: 'infra' },
  { kind: 'chat', name: 'Firefox port · storage quirks', indent: 1 },
  { kind: 'folder', name: 'Client · Acme', color: 'var(--tag-clay)', open: true, indent: 0, count: 11 },
  { kind: 'chat', name: 'Q3 roadmap draft', indent: 1, tag: 'draft' },
  { kind: 'chat', name: 'Pricing page copy', indent: 1 },
  { kind: 'folder', name: 'Reading', color: 'var(--tag-olive)', indent: 0, count: 38 },
  { kind: 'folder', name: 'Archive', color: 'var(--tag-plum)', indent: 0, count: 55 },
];

export default function SidebarFigure({ label = 'sidebar' }: { label?: string }) {
  return (
    <FigureFrame index="fig.01" label={label} meta="local sqlite">
      {/* 标签页 — 用 mono 文本，不用图标 */}
      <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
        {TABS.map((tab, i) => (
          <span
            key={tab}
            style={{
              paddingBottom: '4px',
              borderBottom: i === 0 ? '1px solid var(--ink-1)' : '1px solid transparent',
            }}
          >
            <Mono size={0.62} upper dim={i !== 0} color="var(--ink-1)">
              {tab}
            </Mono>
          </span>
        ))}
      </div>

      <FigureInput value="service worker" />

      {/* 链式筛选条件 */}
      <div style={{ display: 'flex', gap: '6px', marginTop: 'var(--space-xs)', flexWrap: 'wrap' }}>
        <Chip deep>tag: infra</Chip>
        <Chip deep>type: gemini</Chip>
        <Mono size={0.6} dim>
          + add
        </Mono>
      </div>

      {/* 文件夹树 */}
      <div style={{ marginTop: 'var(--space-sm)' }}>
        {TREE.map((node) => (
          <FigureRow
            key={`${node.name}-${node.indent}`}
            indent={node.indent}
            active={node.active}
          >
            {node.kind === 'folder' ? (
              <>
                <Mono size={0.6} dim>
                  {node.open ? '\u25be' : '\u25b8'}
                </Mono>
                {node.color && <Dot color={node.color} />}
                <Mono size={0.7} weight={500}>
                  {node.name}
                </Mono>
                <span style={{ marginLeft: 'auto' }}>
                  <Mono size={0.6} dim>
                    {node.count}
                  </Mono>
                </span>
              </>
            ) : (
              <>
                <Mono
                  size={0.68}
                  color={node.active ? 'var(--ink-1)' : 'var(--ink-2)'}
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {node.name}
                </Mono>
                {node.tag && (
                  <span style={{ marginLeft: 'auto', flex: '0 0 auto' }}>
                    <Mono size={0.58} dim>
                      {node.tag}
                    </Mono>
                  </span>
                )}
              </>
            )}
          </FigureRow>
        ))}
      </div>

      <FigureFooter items={['4 folders', '128 chats', '2 platforms', 'nothing uploaded']} />
    </FigureFrame>
  );
}
