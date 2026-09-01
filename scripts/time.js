  const startedAt = new Date("2026-08-31T10:00:00");

  function updateElapsedTime() {
    const now = new Date();
    const elapsed = now - startedAt;

    const seconds = Math.floor(elapsed / 1000);

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById("elapsed").textContent =
      `${days}d ${hours}h ${minutes}m ${secs}s`;
  }

  updateElapsedTime();
  setInterval(updateElapsedTime, 1000);