import { test, expect } from '@playwright/test';

test('GET /posts/1', async ({ request }) => {
  const res = await request.get('/posts/1');
  expect(res.ok()).toBeTruthy();
  expect(await res.json()).toMatchObject({ id: 1 });
});

test('POST /posts', async ({ request }) => {
  const res = await request.post('/posts', { data: { title: 'foo', body: 'bar', userId: 1 } });
  expect(res.status()).toBe(201);
  expect(await res.json()).toMatchObject({ title: 'foo' });
});
