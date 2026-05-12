import { useEffect, useMemo, useState } from 'react';
import DemoFrame from './components/DemoFrame';
import LoginModal from './components/LoginModal';
import { demoPaths, moduleCards, productHighlights } from './lib/demoData';
import { hasSupabaseEnv, supabase } from './lib/supabase';

const DEMO_USER_KEY = 'cq-demo-user';

function readDemoUser() {
  try {
    const raw = window.localStorage.getItem(DEMO_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persistDemoUser(user) {
  try {
    if (user) {
      window.localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(DEMO_USER_KEY);
    }
  } catch {}
}

function DemoCard({ title, subtitle, items, actionLabel, onClick, dark = false }) {
  return (
    <button className={`demo-card ${dark ? 'dark' : ''}`} onClick={onClick}>
      <div className="demo-card-top">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="pill">{dark ? 'MOBILE' : 'DESKTOP'}</span>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="card-action">{actionLabel}</div>
    </button>
  );
}

function Landing({ onPick, onOpenLogin, displayName, profile, progress }) {
  return (
    <div className="page-shell">
      <header className="landing-nav">
        <div className="brand-lockup">
          <div className="brand-mark">CQ</div>
          <div>
            <div className="brand-title">Campus Quest</div>
            <div className="brand-meta">SEASON 04 · 湖畔之春</div>
          </div>
        </div>
        <div className="nav-actions">
          <a href="#modules">核心模块</a>
          <a href="#mvp">MVP 范围</a>
          <button className="secondary-button" onClick={onOpenLogin}>
            {displayName || 'Demo Login'}
          </button>
          <button className="primary-button" onClick={() => onPick('web')}>
            立即试玩
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">CAMPUS-NATIVE FITNESS GAME</div>
            <h1>把校园里的日常移动，变成一场赛季运动游戏。</h1>
            <p>
              Campus Quest 面向大学生校园场景，以学期为赛季周期，把校园地图、真实运动行为、
              轻协作共玩和徽章成长合成一个更容易开始、更愿意持续的运动系统。
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => onPick('app')}>
                进入 App 端 Demo
              </button>
              <button className="secondary-button" onClick={() => onPick('web')}>
                进入网页端 Demo
              </button>
            </div>
            <div className="hero-status">
              <span>当前阶段：轻量可上线 MVP</span>
              <span>{hasSupabaseEnv ? '登录：Supabase Auth 已启用' : '登录：本地 demo 模式'}</span>
              {profile ? <span>当前用户：{profile.name}</span> : null}
              {progress ? <span>活力值：{progress.vitality}</span> : null}
              {progress ? <span>已点亮：{progress.season_lit} 区</span> : null}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <div className="eyebrow">WHY IT WORKS</div>
              <div className="stats-grid">
                <div>
                  <strong>地图任务</strong>
                  <span>地点触发任务，行为决定完成</span>
                </div>
                <div>
                  <strong>赛季成长</strong>
                  <span>任务结果沉淀为徽章、称号和档案</span>
                </div>
                <div>
                  <strong>临时共玩</strong>
                  <span>不加好友，也能加入附近挑战</span>
                </div>
                <div>
                  <strong>MVP 路线</strong>
                  <span>登录、任务、进度、徽章、组队先跑通</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-head">
            <div>
              <div className="eyebrow">PRODUCT POSITIONING</div>
              <h2>核心设计原则</h2>
            </div>
          </div>
          <div className="three-up-grid">
            {productHighlights.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="modules">
          <div className="section-head">
            <div>
              <div className="eyebrow">CORE MODULES</div>
              <h2>四个功能模块组成 MVP 主体</h2>
            </div>
          </div>
          <div className="module-grid">
            {moduleCards.map((item) => (
              <article className="module-card" key={item.title}>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="mvp">
          <div className="section-head">
            <div>
              <div className="eyebrow">MVP CLOSURE</div>
              <h2>第一版上线只先跑通这三条链路</h2>
            </div>
          </div>
          <div className="path-list">
            {demoPaths.map((item) => (
              <div className="path-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-head">
            <div>
              <div className="eyebrow">TRY THE PRODUCT</div>
              <h2>选择你要给评审展示的入口</h2>
            </div>
          </div>
          <div className="entry-grid">
            <DemoCard
              dark
              title="App 端 Demo"
              subtitle="保留手机端高保真体验，适合展示地图任务、赛季感和轻量共玩。"
              items={[
                '首页任务 → 地图任务 → 共玩 → 徽章闭环',
                '移动端沉浸式 UI',
                '适合产品评审快速试玩',
              ]}
              actionLabel="进入移动端"
              onClick={() => onPick('app')}
            />
            <DemoCard
              title="网页端 Demo"
              subtitle="适合桌面环境演示完整信息架构和多模块并列的信息表达。"
              items={[
                '左侧导航 + 多列布局',
                '适合现场讲解和大屏演示',
                '更利于展示产品结构',
              ]}
              actionLabel="进入网页端"
              onClick={() => onPick('web')}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'app' || hash === 'web' ? hash : 'home';
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [demoUser, setDemoUser] = useState(() => readDemoUser());
  const [sessionUser, setSessionUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState(null);

  async function loadUserState(user) {
    if (!supabase || !user) {
      setProfile(null);
      setProgress(null);
      return;
    }

    const [{ data: profileRow }, { data: progressRow }] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
      supabase.from('user_progress').select('*').eq('user_id', user.id).maybeSingle(),
    ]);

    setProfile(profileRow ?? null);
    setProgress(progressRow ?? null);
  }

  useEffect(() => {
    if (!hasSupabaseEnv || !supabase) return undefined;

    supabase.auth.getUser().then(({ data }) => {
      setSessionUser(data.user ?? null);
      if (data.user) loadUserState(data.user);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionUser(session?.user ?? null);
      if (session?.user) {
        loadUserState(session.user);
      } else {
        setProfile(null);
        setProgress(null);
      }
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const nextHash = mode === 'home' ? '' : `#${mode}`;
    window.location.hash = nextHash;
  }, [mode]);

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.replace('#', '');
      setMode(hash === 'app' || hash === 'web' ? hash : 'home');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeUser = useMemo(() => {
    if (sessionUser) return sessionUser;
    return demoUser;
  }, [demoUser, sessionUser]);

  function handleDemoLogin(user) {
    persistDemoUser(user);
    setDemoUser(user);
  }

  function handleLogout() {
    persistDemoUser(null);
    setDemoUser(null);
    setProfile(null);
    setProgress(null);
  }

  if (mode === 'app' || mode === 'web') {
    return (
      <>
        <DemoFrame
          mode={mode}
          onBack={() => setMode('home')}
          onOpenLogin={() => setLoginOpen(true)}
          displayName={activeUser?.user_metadata?.name || activeUser?.name || activeUser?.email}
        />
        <LoginModal
          open={loginOpen}
          onClose={() => setLoginOpen(false)}
          user={sessionUser}
          onDemoLogin={handleDemoLogin}
          onLogout={handleLogout}
        />
      </>
    );
  }

  return (
    <>
      <Landing
        onPick={setMode}
        onOpenLogin={() => setLoginOpen(true)}
        displayName={activeUser?.user_metadata?.name || activeUser?.name || activeUser?.email}
        profile={profile}
        progress={progress}
      />
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        user={sessionUser}
        onDemoLogin={handleDemoLogin}
        onLogout={handleLogout}
      />
    </>
  );
}
