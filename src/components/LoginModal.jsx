import { useEffect, useMemo, useState } from 'react';
import { hasSupabaseEnv, supabase } from '../lib/supabase';

const initialForm = {
  name: '毛柯兰',
  email: 'kelan@cornell.edu',
};

export default function LoginModal({
  open,
  onClose,
  user,
  onDemoLogin,
  onAuthStateChange,
  onLogout,
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!open) {
      setStatus('idle');
      setMessage('');
      return;
    }
    setForm({
      name: user?.user_metadata?.name || initialForm.name,
      email: user?.email || initialForm.email,
    });
  }, [open, user]);

  const submitLabel = useMemo(() => {
    if (status === 'submitting') return '发送中...';
    return hasSupabaseEnv ? '发送 Magic Link' : '进入 Demo';
  }, [status]);

  if (!open) return null;

  async function handleLogout() {
    if (hasSupabaseEnv && supabase && user) {
      await supabase.auth.signOut();
    }
    onLogout?.();
    onClose();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    if (!hasSupabaseEnv || !supabase) {
      onDemoLogin({
        name: form.name.trim() || initialForm.name,
        email: form.email.trim() || initialForm.email,
      });
      setStatus('idle');
      onClose();
      return;
    }

    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error } = await supabase.auth.signInWithOtp({
      email: form.email.trim(),
      options: {
        emailRedirectTo: redirectTo,
        data: { name: form.name.trim() || initialForm.name },
      },
    });

    if (error) {
      setStatus('error');
      setMessage(error.message || '登录链接发送失败');
      return;
    }

    setStatus('success');
    setMessage('Magic link 已发送，请去邮箱完成登录。');
    onAuthStateChange?.();
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="eyebrow">AUTH ENTRY</div>
            <h2>登录 Campus Quest</h2>
            <p>
              现在支持两种模式：有 Supabase 环境变量时走真实邮箱登录；没有时回退为本地 demo
              登录，方便继续演示。
            </p>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="关闭">
            ×
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            <span>姓名</span>
            <input
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              placeholder="毛柯兰"
            />
          </label>
          <label>
            <span>邮箱</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              placeholder="name@cornell.edu"
            />
          </label>

          <div className="auth-tip">
            {hasSupabaseEnv
              ? '推荐上线方案：使用 Supabase Auth 的 Magic Link，省掉密码体系和基础会话管理。'
              : '当前未配置 Supabase 环境变量，先使用本地 demo 登录。复制 .env.example 为 .env 后可切到真实登录。'}
          </div>

          {message ? <div className={`auth-message ${status}`}>{message}</div> : null}

          <div className="modal-actions">
            {user ? (
              <button type="button" className="secondary-button" onClick={handleLogout}>
                退出登录
              </button>
            ) : null}
            <button type="button" className="secondary-button" onClick={onClose}>
              取消
            </button>
            <button type="submit" className="primary-button">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
