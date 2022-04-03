addEventListener('scheduled', event => {
  event.waitUntil(triggerEvent(event));
});

async function updateKV() {
  await MY_KV.delete('ke')
  await MY_KV.put('ke', (new Date()).toLocaleString())
}

async function triggerEvent(event: ScheduledEvent) {
  switch (event.cron) {
    case '*/5 * * * *':
      await updateKV();
      break;
  }
}
