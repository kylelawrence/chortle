# Copilot Instructions for Chortle

## Repository Overview

**Chortle** is a chore chart web application built as a simple, static website. The repository is small and focused, containing only the essential files needed for a client-side web application.

### High-Level Repository Information
- **Purpose**: A chore chart app for managing household tasks
- **Type**: Static web application (no backend)
- **Size**: Minimal (~8 files total)
- **Languages**: HTML, CSS, JavaScript (ES6 modules)
- **Framework**: VanJS (lightweight reactive framework)
- **Styling**: Water.css (classless CSS framework)
- **Runtime**: Modern web browsers (no server-side runtime required)

## Development Environment Setup

### Prerequisites
- **Node.js**: v20+ (tested with v20.19.4)
- **npm**: v10+ (tested with v10.8.2)
- No additional package installation required - all dependencies are CDN-based

### Local Development Commands

**Start Development Server:**
```bash
cd /path/to/chortle
npx http-server -o -c-1 -s public
```

**Command Breakdown:**
- `npx http-server`: Uses http-server package (auto-installs if not present)
- `-o`: Opens browser automatically when server starts
- `-c-1`: Disables caching (ensures fresh resources during development)
- `-s`: Silent mode (no request logs)
- `public`: Serves the public directory as web root

**Alternative Server Command (without auto-opening browser):**
```bash
cd public
npx http-server -p 8080 -c-1 .
```

### Build Process
**NO BUILD STEP REQUIRED** - This is a static site served directly from source files.

### Testing
- **No automated test suite exists**
- Manual testing: Start the server and verify the app loads in browser
- Check browser console for JavaScript errors
- Verify VanJS loads from CDN and displays "Welcome to chortle"

### Linting
- **No linting configuration exists**
- Recommend standard JavaScript/HTML/CSS validation when making changes

### Validation Steps
1. Start the development server using the command above
2. Verify server starts on port 8080 (or specified port)
3. Check that index.html loads without errors
4. Verify VanJS CDN dependency loads successfully
5. Confirm "Welcome to chortle" message displays

## Project Architecture & Layout

### Directory Structure
```
chortle/
├── .github/           # GitHub configuration (currently minimal)
├── docs/              # Web application source files (deployment directory)
│   ├── index.html     # Main HTML entry point
│   ├── main.js        # Main JavaScript application file
│   └── main.css       # Custom styles (minimal - mostly uses Water.css)
├── planning/          # Project management documentation
├── LICENSE            # MIT license
└── README.md          # Development instructions
```

### Key Files

**`docs/index.html`** - Main entry point:
- Links to Water.css CDN for base styling
- Links to local main.css for custom styles
- Loads main.js as ES6 module
- Contains minimal HTML structure (VanJS renders content dynamically)

**`docs/main.js`** - Application logic:
- Imports VanJS from CDN (van-1.5.5.min.js)
- Currently displays a simple welcome message
- Uses VanJS reactive components for DOM manipulation

**`docs/main.css`** - Custom styling:
- Currently minimal (contains only "1.")
- Water.css provides the base styling
- Add custom overrides here as needed

### Dependencies
- **VanJS v1.5.5**: Loaded from `cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js`
- **Water.css v2**: Loaded from `cdn.jsdelivr.net/npm/water.css@2/out/water.css`
- **http-server**: Development dependency (installed via npx when needed)

### No CI/CD Pipeline
- **No GitHub Actions workflows exist**
- **No automated checks before commit**
- Manual validation recommended before making changes

## Development Guidelines for Agents

### Making Changes
1. **Always test locally** using `npx http-server -o -c-1 -s public`
2. **Validate in browser** - check console for errors
3. **Keep it simple** - this is intentionally a minimal static site
4. **Respect the architecture** - avoid adding build steps or complex tooling

### Common Operations

**Adding new features:**
- For simple features: Edit `public/main.js` directly
- For complex features: Create new modules to compartmentalize code
  - Create new `.js` files in `public/` directory (e.g., `public/chore-manager.js`, `public/chart-display.js`)
  - Use ES6 module exports: `export { functionName, ComponentName }`
  - Import modules in `main.js`: `import { functionName } from './chore-manager.js'`
  - Follow naming convention: kebab-case for files, camelCase for functions/components
- Use VanJS patterns (reactive components, van.tags) in all modules
- Add custom styles to `public/main.css` if needed

**Modifying styles:**
- Use Water.css classes when possible
- Add overrides to `public/main.css` for custom styling
- Avoid complex CSS frameworks - keep it simple

**Testing changes:**
- Start development server
- Check browser console for errors
- Verify functionality works as expected
- Test on different screen sizes (Water.css is responsive)

**Writing Documentation:**
- Write and edit documents in markdown format
- Save new files to the `docs/` folder

### File Locations Quick Reference
- **Main app**: `docs/main.js`
- **Feature modules**: `docs/[feature-name].js` (e.g., `docs/chore-manager.js`)
- **HTML template**: `docs/index.html`
- **Custom styles**: `docs/main.css`
- **Project management documentation**: `planning/`
- **Development documentation**: `README.md`
- **Serve directory**: `docs/` (this is the web root)

### Avoiding Common Pitfalls
1. **Don't add a build process** - the simplicity is intentional
2. **Don't install local npm packages** - use CDN dependencies
3. **Always serve from docs/ directory** - not from repository root
4. **Check CDN availability** - ensure external dependencies load
5. **Test without cache** - use `-c-1` flag to avoid stale resources

### Environment Notes
- **No package.json** - not needed for this static site approach
- **No node_modules** - all dependencies are CDN-based
- **No bundling** - browser loads ES6 modules directly
- **No transpilation** - uses modern JavaScript features directly

**Trust these instructions** - they have been validated through manual testing. Only search for additional information if these instructions prove incomplete or incorrect.