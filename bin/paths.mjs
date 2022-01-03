import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const STORIES_PATH = path.join(
  __dirname,
  "../stories/DbIcon.stories.ts"
);
