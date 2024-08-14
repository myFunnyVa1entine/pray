import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <title>페이퍼그라운드 - 틀림없는 기도</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
