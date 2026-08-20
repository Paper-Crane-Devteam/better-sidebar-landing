import { motion } from 'framer-motion';
import { FigureFrame, FigureFooter, Mono } from './primitives';

/**
 * FIG.04 · AI Agent —— 终端式执行记录
 *
 * 结构忠实性说明：Agent 由输入框中的 `>` 唤起，对本地数据库有真实查询权限，
 * 自行编写查询、多轮决策；写操作必须先获批准（读操作直接执行）；
 * Agent Dock 常驻输入框上方显示状态 / 停止 / 审批；使用你自己的 Gemini 会话，
 * 不需要 API key。以下为一次 Auto-Organize 运行的真实形态。
 */

type Line =
  | { kind: 'input'; text: string }
  | { kind: 'step'; text: string; meta?: string }
  | { kind: 'approval'; text: string }
  | { kind: 'done'; text: string };

const LINES: Line[] = [
  { kind: 'input', text: 'organize my last 200 chats into folders and tag them' },
  { kind: 'step', text: 'query  select id, title from conversations', meta: '200 rows' },
  { kind: 'step', text: 'plan   deriving taxonomy from titles', meta: '6 folders' },
  { kind: 'approval', text: 'create 6 folders · move 200 chats · apply 187 tags' },
  { kind: 'step', text: 'write  creating folders', meta: '6/6' },
  { kind: 'step', text: 'write  moving conversations', meta: '200/200' },
  { kind: 'done', text: 'done in 41s — undo available for 10 minutes' },
];

const reveal = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0 },
};

export default function AgentFigure({ label = 'ai agent' }: { label?: string }) {
  return (
    <FigureFrame index="fig.04" label={label} meta="your own gemini session">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.14 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
      >
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            variants={reveal}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {line.kind === 'input' && (
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-xs)',
                  padding: '7px var(--space-xs)',
                  background: 'var(--paper-0)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-ai-glow-sm)',
                }}
              >
                <Mono size={0.7} weight={600}>
                  &gt;
                </Mono>
                <Mono size={0.68}>{line.text}</Mono>
              </div>
            )}

            {line.kind === 'step' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 'var(--space-xs)',
                  paddingLeft: 'var(--space-xs)',
                }}
              >
                <Mono size={0.6} dim>
                  &#10217;
                </Mono>
                <Mono size={0.64} color="var(--ink-2)" style={{ whiteSpace: 'pre' }}>
                  {line.text}
                </Mono>
                {line.meta && (
                  <span style={{ marginLeft: 'auto' }}>
                    <Mono size={0.58} dim>
                      {line.meta}
                    </Mono>
                  </span>
                )}
              </div>
            )}

            {line.kind === 'approval' && (
              <div
                style={{
                  background: 'var(--paper-3)',
                  borderRadius: 'var(--radius)',
                  padding: 'var(--space-xs) var(--space-sm)',
                  margin: '2px 0',
                }}
              >
                <Mono size={0.58} upper dim>
                  approval required
                </Mono>
                <div style={{ marginTop: '5px' }}>
                  <Mono size={0.64}>{line.text}</Mono>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: '9px' }}>
                  <Mono size={0.62} weight={500} track={0.14}>
                    [ APPROVE ]
                  </Mono>
                  <Mono size={0.62} dim track={0.14}>
                    [ REJECT ]
                  </Mono>
                </div>
              </div>
            )}

            {line.kind === 'done' && (
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-xs)',
                  paddingLeft: 'var(--space-xs)',
                  paddingTop: '2px',
                }}
              >
                <Mono size={0.62} weight={500}>
                  &#10003;
                </Mono>
                <Mono size={0.64}>{line.text}</Mono>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <FigureFooter items={['no api key', 'writes need approval', 'reads run free', 'stop anytime']} />
    </FigureFrame>
  );
}
