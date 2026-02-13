import { cpSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

// Copy scramjet files to /public/scram/
const scramjetSrc = join(__dirname, "node_modules/@mercuryworkshop/scramjet/dist");
const scramjetDest = join(__dirname, "public/scram");
ensureDir(scramjetDest);
try {
  cpSync(scramjetSrc, scramjetDest, { recursive: true });
  console.log("✓ Scramjet files copied to /public/scram/");
} catch (e) {
  console.error("✗ Could not copy scramjet:", e.message);
}

// Copy baremux files to /public/baremux/
const baremuxSrc = join(__dirname, "node_modules/@mercuryworkshop/bare-mux/dist");
const baremuxDest = join(__dirname, "public/baremux");
ensureDir(baremuxDest);
try {
  cpSync(baremuxSrc, baremuxDest, { recursive: true });
  console.log("✓ BareMux files copied to /public/baremux/");
} catch (e) {
  console.error("✗ Could not copy baremux:", e.message);
}

// Copy epoxy transport
const epoxySrc = join(__dirname, "node_modules/@mercuryworkshop/epoxy-transport/dist");
const epoxyDest = join(__dirname, "public/epoxy");
ensureDir(epoxyDest);
try {
  cpSync(epoxySrc, epoxyDest, { recursive: true });
  console.log("✓ Epoxy transport copied to /public/epoxy/");
} catch (e) {
  console.error("✗ Could not copy epoxy:", e.message);
}

// Copy libcurl transport
const libcurlSrc = join(__dirname, "node_modules/@mercuryworkshop/libcurl-transport/dist");
const libcurlDest = join(__dirname, "public/libcurl");
ensureDir(libcurlDest);
try {
  cpSync(libcurlSrc, libcurlDest, { recursive: true });
  console.log("✓ Libcurl transport copied to /public/libcurl/");
} catch (e) {
  console.error("✗ Could not copy libcurl:", e.message);
}

console.log("\n✓ Build complete! Run: node server.js");
