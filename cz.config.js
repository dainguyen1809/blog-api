/** @type {import('cz-git').UserConfig} */
module.exports = {
  useEmoji: true,
  emojiAlign: 'center',
  scopes: [],
  types: [
    { value: 'feat', name: 'feat:     ✨  A new feature', emoji: '✨' },
    { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: '🐛' },
    {
      value: 'docs',
      name: 'docs:     📝  Documentation only changes',
      emoji: '📝',
    },
    {
      value: 'style',
      name: 'style:    💄  Changes that do not affect meaning',
      emoji: '💄',
    },
    {
      value: 'refactor',
      name: 'refactor: ♻️  A code change that neither fixes a bug nor adds a feature',
      emoji: '♻️',
    },
    {
      value: 'perf',
      name: 'perf:     ⚡️  A code change that improves performance',
      emoji: '⚡️',
    },
    { value: 'test', name: 'test:     ✅  Adding missing tests', emoji: '✅' },
    {
      value: 'chore',
      name: 'chore:    🔧  Other changes that don’t modify src or test files',
      emoji: '🔧',
    },
  ],
};
