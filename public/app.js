(function () {
  const base = window.location.origin;
  const META_INTERVAL_MS = 2500;

  const metaHostname = document.getElementById('meta-hostname');
  const metaVersion = document.getElementById('meta-version');
  const metaArch = document.getElementById('meta-arch');
  const metaColor = document.getElementById('meta-color');
  const metaUpdated = document.getElementById('meta-updated');
  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  const actionFeedback = document.getElementById('action-feedback');

  function formatTime() {
    return new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  function setMeta(data) {
    metaHostname.textContent = data.hostname ?? '—';
    metaVersion.textContent = data.version ?? '—';
    metaArch.textContent = data.arch ?? '—';
    metaColor.textContent = data.color ?? '—';
    metaColor.classList.remove('has-text-grey-light');
    if (data.color) {
      metaColor.style.backgroundColor = data.color.startsWith('#') ? data.color : '#e8e8e8';
      metaColor.style.border = '1px solid #dbdbdb';
    } else {
      metaColor.style.backgroundColor = '';
      metaColor.style.border = '';
    }
    metaUpdated.textContent = 'Last updated: ' + formatTime();
  }

  function fetchMetadata() {
    fetch(base + '/api/metadata')
      .then(function (res) {
        return res.ok ? res.json() : Promise.reject(new Error('Metadata unavailable'));
      })
      .then(setMeta)
      .catch(function () {
        metaHostname.textContent = '—';
        metaVersion.textContent = '—';
        metaArch.textContent = '—';
        metaColor.textContent = '—';
        metaUpdated.textContent = 'Last updated: error';
      });
  }

  function setStatus(ok, text) {
    statusDot.className = 'tag is-rounded mr-2 ' + (ok ? 'is-success' : 'is-danger');
    statusDot.textContent = '\u25CF';
    statusText.textContent = text;
  }

  function checkHealth() {
    fetch(base + '/api/health')
      .then(function (res) {
        setStatus(res.ok, res.ok ? 'API available' : 'API unavailable');
      })
      .catch(function () {
        setStatus(false, 'Offline');
      });
  }

  function showFeedback(ok, message) {
    actionFeedback.textContent = message;
    actionFeedback.className = 'notification mt-3 ' + (ok ? 'is-success' : 'is-danger');
    actionFeedback.classList.remove('is-hidden');
    actionFeedback.setAttribute('aria-live', 'polite');
    setTimeout(function () {
      actionFeedback.classList.add('is-hidden');
    }, 5000);
  }

  function handleAction(ev) {
    const btn = ev.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    let path;
    if (action === 'memoryLeak') path = '/api/bug/memory-leak';
    else if (action === 'crash') path = '/api/bug/crash';
    else if (action === 'stressCpu') path = '/api/stress/cpu';
    else if (action === 'stressMemory') path = '/api/stress/memory';
    else return;

    btn.disabled = true;
    showFeedback(true, 'Sending…');

    fetch(base + path, { method: 'POST', headers: { 'Content-Type': 'application/json' } })
      .then(function (res) {
        return res.text().then(function (raw) {
          var body;
          try { body = raw ? JSON.parse(raw) : {}; } catch (e) { body = {}; }
          return { ok: res.ok, status: res.status, body: body };
        });
      })
      .then(function (r) {
        let msg = r.body.message || (r.ok ? 'OK' : 'Error ' + r.status);
        if (r.body.count != null) msg += ' (count: ' + r.body.count + ')';
        showFeedback(r.ok, msg);
      })
      .catch(function (err) {
        showFeedback(false, err.message || 'Network error');
      })
      .finally(function () {
        btn.disabled = false;
      });
  }

  document.body.addEventListener('click', handleAction);

  checkHealth();
  fetchMetadata();
  setInterval(fetchMetadata, META_INTERVAL_MS);
  setInterval(checkHealth, 10000);
})();
