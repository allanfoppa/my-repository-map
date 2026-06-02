# How to Export Source Code for LLMs

## 1. Generating Project Directory Tree

To give the LLM or reviewer a clear view of your project's architecture, generate a visual directory tree.

Standard Tree View (Excluding node_modules and build folders):

```bash
# Generates a clean tree view ignoring heavy or irrelevant directories
tree -I 'node_modules|dist|build|.git' /path/to/project
```

## 2. Combining All TypeScript Files

If you want to find all `.ts` files recursively inside the `src` directory and print both their filename and content, use one of the commands below.

**Recommended Approach (Preserves file paths as headers):**

```bash
# Finds all .ts files, prints a header with the filepath, and outputs the content
find /path/to/project/src -name "*.ts" -exec echo "--- File: {} ---" \; -exec cat {} \;

```

**Alternative Approach (Using xargs for simple listing/dry-run):**

```bash
# Just lists the files with a custom delimiter
find /path/to/project/src -name "*.ts" | xargs -I{} echo "=== File: {} ==="

```

## 3. Targeting Specific Modules

Target only a specific file.

```bash
# Concatenates all TypeScript files inside the features/hello directory
cat src/features/hello/*.ts

```

> ⚠️ **Note:** Ensure your terminal encoding supports UTF-8 to avoid breaking special characters during the copy-paste process.
