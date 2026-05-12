import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const distDir = path.join(repoRoot, 'dist');

if (!existsSync(distDir)) {
  throw new Error('dist/ not found. Run `npm run build` first.');
}

const remoteUrl = execFileSync('git', ['config', '--get', 'remote.origin.url'], {
  cwd: repoRoot,
  encoding: 'utf8',
}).trim();

if (!remoteUrl) {
  throw new Error('No git remote named origin found.');
}

const tmpDir = mkdtempSync(path.join(os.tmpdir(), 'campus-quest-pages-'));
const publishDir = path.join(tmpDir, 'site');

cpSync(distDir, publishDir, { recursive: true });

const noJekyllPath = path.join(publishDir, '.nojekyll');
if (!existsSync(noJekyllPath)) {
  writeFileSync(noJekyllPath, '');
}

const git = (...args) =>
  execFileSync('git', args, {
    cwd: publishDir,
    stdio: 'inherit',
  });

try {
  git('init', '-b', 'gh-pages');
  git('config', 'user.name', process.env.GIT_AUTHOR_NAME || 'Codex');
  git('config', 'user.email', process.env.GIT_AUTHOR_EMAIL || 'codex@openai.local');
  git('add', '.');

  const files = readdirSync(publishDir).filter((name) => name !== '.git');
  if (files.length === 0) {
    throw new Error('Publish directory is empty.');
  }

  git('commit', '-m', `Deploy site ${new Date().toISOString()}`);
  git('remote', 'add', 'origin', remoteUrl);
  git('push', '--force', 'origin', 'HEAD:gh-pages');
} finally {
  rmSync(tmpDir, { recursive: true, force: true });
}
