// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about_index from "./routes/about/index.tsx";
import * as $artists_index from "./routes/artists/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $introduce_index from "./routes/introduce/index.tsx";
import * as $party_index from "./routes/party/index.tsx";
import * as $programs_index from "./routes/programs/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Menus from "./islands/Menus.tsx";
import * as $Mode from "./islands/Mode.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about/index.tsx": $about_index,
    "./routes/artists/index.tsx": $artists_index,
    "./routes/index.tsx": $index,
    "./routes/introduce/index.tsx": $introduce_index,
    "./routes/party/index.tsx": $party_index,
    "./routes/programs/index.tsx": $programs_index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/Menus.tsx": $Menus,
    "./islands/Mode.tsx": $Mode,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
