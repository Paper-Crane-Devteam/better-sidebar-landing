import type { ReactNode } from 'react';
import { FigureFrame, FigureRow, FigureFooter, Mono, Chip } from './primitives';

/**
 * FIG.03 · 提示词库 —— 变量、组合、斜杠唤起
 *
 * 结构忠实性说明：提示词支持 {{变量}}、提示词组合、系统提示词导入，
 * 在 Gemini 与 AI Studio 输入框中用 `/` 唤起。
 */

/** 把 {{var}} 渲染成纸片，其余保持墨色 */
function withVars(text: string): ReactNode[] {
  return text.split(/(\{\{[^}]+\}\})/g).map((part, i) => {
    if (part.startsWith('{{')) {
      return (
        <span
          key={`${part}-${i}`}
          style={{
            background: 'var(--paper-3)',
            borderRadius: '1px',
            padding: '0 3px',
            color: 'var(--ink-1)',
          }}
        >
          {part}
        </span>
      );
    }
    return <span key={`t-${i}`}>{part}</span>;
  });
}

const PROMPTS = [
  {
    name: 'Code review · strict',
    body: 'Review the following {{language}} code. Focus on {{focus}}. Be blunt.',
    vars: ['language', 'focus'],
    pinned: true,
  },
  {
    name: 'Commit message',
    body: 'Write a conventional commit for this diff. Scope: {{scope}}.',
    vars: ['scope'],
  },
  {
    name: 'Explain like a spec',
    body: 'Rewrite {{topic}} as a numbered technical specification.',
    vars: ['topic'],
  },
];

export default function PromptFigure({ label = 'prompt library' }: { label?: string }) {
  return (
    <FigureFrame index="fig.03" label={label} meta="type / to summon">
      {/* 斜杠唤起 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          padding: '7px var(--space-xs)',
          background: 'var(--paper-0)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-ai-glow-sm)',
        }}
      >
        <Mono size={0.7} weight={500}>
          /
        </Mono>
        <Mono size={0.68} dim>
          review
        </Mono>
      </div>

      <div style={{ marginTop: 'var(--space-sm)' }}>
        {PROMPTS.map((p, i) => (
          <div key={p.name} style={{ marginBottom: 'var(--space-xs)' }}>
            <FigureRow active={i === 0}>
              <Mono size={0.58} dim>
                {String(i + 1).padStart(2, '0')}
              </Mono>
              <Mono size={0.7} weight={500}>
                {p.name}
              </Mono>
              {p.pinned && (
                <span style={{ marginLeft: 'auto' }}>
                  <Mono size={0.56} dim upper>
                    pinned
                  </Mono>
                </span>
              )}
            </FigureRow>
            <div style={{ paddingLeft: '30px', marginTop: '3px' }}>
              <Mono size={0.62} color="var(--ink-2)">
                {withVars(p.body)}
              </Mono>
            </div>
            <div
              style={{
                paddingLeft: '30px',
                marginTop: '5px',
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap',
              }}
            >
              {p.vars.map((v) => (
                <Chip key={v}>{v}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>

      <FigureFooter items={['works in gemini + ai studio', 'composable', 'import system prompts']} />
    </FigureFrame>
  );
}
