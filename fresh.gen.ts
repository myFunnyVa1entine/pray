// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_pages_layout from "./routes/(pages)/_layout.tsx";
import * as $_pages_about_index from "./routes/(pages)/about/index.tsx";
import * as $_pages_artists_index from "./routes/(pages)/artists/index.tsx";
import * as $_pages_introduce_index from "./routes/(pages)/introduce/index.tsx";
import * as $_pages_party_index from "./routes/(pages)/party/index.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Menus from "./islands/Menus.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(pages)/_layout.tsx": $_pages_layout,
    "./routes/(pages)/about/index.tsx": $_pages_about_index,
    "./routes/(pages)/artists/index.tsx": $_pages_artists_index,
    "./routes/(pages)/introduce/index.tsx": $_pages_introduce_index,
    "./routes/(pages)/party/index.tsx": $_pages_party_index,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Menus.tsx": $Menus,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
