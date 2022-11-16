import sentryPlugin from '@cloudflare/pages-plugin-sentry'

export const onRequest: PagesFunction<{
  KV: KVNamespace
}> = async (context) => {
  return sentryPlugin({ dsn: await context.env.KV.get('SENTRY_DSN') })(context);
};
