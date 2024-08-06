import { FreshContext } from "$fresh/server.ts";

// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/
const JOKES = [
  "1. Why do Java developers often wear glasses? They can't C#.",
  "2. A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
  "3. Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "4. I love pressing the F5 key. It's refreshing.",
  "5. Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
  "6. There are 10 types of people in the world. Those who understand binary and those who don't.",
  "7. Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  // console.log('_req >>', _req.method, _ctx.route);
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const body = JOKES[randomIndex];
  return new Response(body);
};
