export default function DemoFrame({ mode, onBack, onOpenLogin, displayName }) {
  const src = mode === 'app' ? '/app-demo.html' : '/web-demo.html';

  return (
    <div className="demo-shell">
      <header className={`demo-topbar ${mode === 'app' ? 'is-app' : ''}`}>
        <button className="secondary-button" onClick={onBack}>
          返回首页
        </button>
        <div className="demo-title-group">
          <div className="brand-mark">CQ</div>
          <div>
            <div className="demo-title">Campus Quest · {mode === 'app' ? 'App 端' : '网页端'}</div>
            <div className="demo-subtitle">S04 · Lakeside Spring · Cornell</div>
          </div>
        </div>
        <button className="secondary-button" onClick={onOpenLogin}>
          {displayName || 'Demo Login'}
        </button>
      </header>
      <iframe className="demo-iframe" src={src} title={`${mode} demo`} />
    </div>
  );
}
