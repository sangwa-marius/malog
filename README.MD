# Contributing to malog

First off, thank you for considering contributing to malog! It's people like you that make malog such a great tool.

---

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include your Node.js version, Express version, and OS**
* **Share your code snippet**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and the expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the JavaScript styleguide
* Include appropriate test cases
* End all files with a newline
* Avoid platform-dependent code

---

## Development Setup

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.0.0
- Git

### Local Development

1. **Fork the repository**
```bash
git clone https://github.com/yourusername/malog.git
cd malog
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a new branch**
```bash
git checkout -b feature/your-feature-name
```

4. **Make your changes**

5. **Run tests**
```bash
npm test
```

6. **Lint your code**
```bash
npm run lint
```

7. **Commit your changes**
```bash
git commit -am 'Add some feature'
```

8. **Push to the branch**
```bash
git push origin feature/your-feature-name
```

9. **Create a Pull Request**

---

## Project Structure

```
malog/
├── index.js                 # Main middleware file
├── index.d.ts              # TypeScript definitions
├── package.json            # Package configuration
├── README.md               # Documentation
├── CHANGELOG.md            # Version history
├── CONTRIBUTING.md         # This file
├── LICENSE                 # MIT License
├── examples/
│   ├── bookstore.js        # Bookstore API example
│   ├── rest-api.js         # REST API template
│   └── test-server.js      # Test server with all status codes
├── test/
│   └── index.test.js       # Test suite
└── docs/
    ├── api.md              # API documentation
    ├── examples.md         # Detailed examples
    └── troubleshooting.md  # Troubleshooting guide
```

---

## Style Guide

### JavaScript Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some modifications:

* Use semicolons
* Use 2-space indentation
* Use single quotes for strings
* Use meaningful variable names
* Comment complex logic
* Keep functions small and focused

### Example

```javascript
// ✅ Good
const malog = (req, res, next) => {
  const startTime = Date.now();
  const originalSend = res.send;
  
  res.send = function(data) {
    const responseTime = Date.now() - startTime;
    console.log(`[${res.statusCode}] ${req.method} ${req.originalUrl} ${responseTime}ms`);
    return originalSend.call(this, data);
  };
  
  next();
};

// ❌ Bad
const malog=(req,res,next)=>{const st=Date.now();const os=res.send;res.send=function(d){const rt=Date.now()-st;console.log(`[${res.statusCode}]`);return os.call(this,d)};next()};
```

---

## Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:
```
Add response time color coding

Colors are now based on response speed:
- Green for fast responses (< 100ms)
- Yellow for acceptable (100-500ms)
- Red for slow responses (> 500ms)

Fixes #123
```

---

## Testing

### Running Tests

```bash
npm test
```

### Writing Tests

* Use Jest as the testing framework
* Place test files in the `test/` directory
* Name test files with `.test.js` extension
* Write descriptive test names

Example:

```javascript
describe('malog middleware', () => {
  it('should log 200 status codes', (done) => {
    const req = { method: 'GET', originalUrl: '/' };
    const res = { 
      statusCode: 200,
      send: jest.fn(),
    };
    const next = jest.fn();
    
    malog(req, res, next);
    expect(next).toHaveBeenCalled();
  });
  
  it('should calculate response time', (done) => {
    // Test implementation
  });
});
```

---

## Documentation

### Updating README

If you add a feature, please also update the README.md with:
* Clear description of the feature
* Usage examples
* Any new configuration options

### Adding Examples

1. Add your example file to `examples/` directory
2. Include comments explaining what it does
3. Update README with reference to your example
4. Ensure the example runs without errors

---

## Release Process

1. Update version in package.json (semver)
2. Update CHANGELOG.md
3. Commit changes
4. Create git tag: `git tag v1.0.0`
5. Push to GitHub: `git push origin main --tags`
6. Publish to npm: `npm publish`

Only maintainers can publish to npm.

---

## Additional Notes

### Issue and Pull Request Labels

This project uses labels to categorize issues and pull requests:

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

---

## Get Help

* 📚 [Read the docs](https://github.com/yourusername/malog/wiki)
* 💬 [GitHub Discussions](https://github.com/yourusername/malog/discussions)
* 📧 Email: support@example.com

---

## Recognition

Contributors will be:
* Listed in the README as a contributor
* Mentioned in release notes
* Given credit in the CHANGELOG

---

## Questions?

Feel free to ask in:
* [GitHub Issues](https://github.com/yourusername/malog/issues)
* [GitHub Discussions](https://github.com/yourusername/malog/discussions)
* Email: support@example.com

---

Thank you for contributing to malog! 🎉

Your efforts help make logging beautiful for everyone.