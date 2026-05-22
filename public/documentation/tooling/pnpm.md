# PNPM Commands

1. The Core Isolation Command
   Run this from the Root of the repository. Replace @<project-name>/<workname-space> with the name defined in that project's package.json.

```bash
## Installs only the <project-name> root dependencies AND the specific project dependencies
pnpm install --filter . --filter "@<project-name>/<workname-space>"
```

--filter .: Ensures the <project-name> root tools are installed.

--filter "@<project-name>/<workname-space>": Only looks at the package.json inside that specific suite folder.

1. Running a Command in Isolation

If you want to run the tests for just one project without triggering the others:

```bash
pnpm --filter "@<project-name>/<workname-space>" test
```

1. Adding a Dependency to a Specific Project

```bash
pnpm add axios --filter "@<project-name>/<workname-space>"
pnpm add axios --filter "@<project-name>/<workname-space-2>"
pnpm add axios --filter "@<project-name>/<workname-space-3>"
```

1. Adding a Dependencie to a root Project

```bash
pnpm add -wD wait-on
```

`-w`: Stands for --workspace-root. This tells pnpm to ignore the sub-packages and put it in the top-level package.json.

`-D`: Saves it as a devDependencies.
