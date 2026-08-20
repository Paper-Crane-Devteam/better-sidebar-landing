import { FigureFrame, FigureFooter, Mono, Dot } from './primitives';

/**
 * FIG.06 · 标签与颜色 —— 自定义颜色、计数、筛选
 *
 * 结构忠实性说明：标签可自定义颜色，显示在对话标题栏；
 * 文件夹同样可着色并置顶、拖拽排序。
 */

const TAGS = [
  { name: 'infra', color: 'var(--tag-indigo)', count: 24 },
  { name: 'draft', color: 'var(--tag-ochre)', count: 18 },
  { name: 'research', color: 'var(--tag-olive)', count: 31 },
  { name: 'client', color: 'var(--tag-clay)', count: 12 },
  { name: 'shipped', color: 'var(--tag-plum)', count: 9 },
];

const MAX = 31;

export default function TagFigure({ label = 'tags & colors' }: { label?: string }) {
  return (
    <FigureFrame index="fig.06" label={label} meta="5 of 42">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {TAGS.map((t) => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <Dot color={t.color} />
            <span style={{ minWidth: '76px' }}>
              <Mono size={0.68} upper track={0.08}>
                {t.name}
              </Mono>
            </span>
            {/* 计数条 — 纸槽 + 实心色块，无边框无圆角 */}
            <span
              style={{
                flex: 1,
                height: '6px',
                background: 'var(--paper-3)',
                borderRadius: '1px',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: '100%',
                  width: `${(t.count / MAX) * 100}%`,
                  background: t.color,
                  opacity: 0.55,
                }}
              />
            </span>
            <Mono size={0.6} dim>
              {t.count}
            </Mono>
          </div>
        ))}
      </div>

      <FigureFooter items={['tags visible in chat header', 'folders colorable too', 'pin & reorder']} />
    </FigureFrame>
  );
}
