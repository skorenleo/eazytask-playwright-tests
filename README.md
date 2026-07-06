# EazyTask Playwright Tests

End-to-end test automation project for the EazyTask web application using Playwright and TypeScript.

## About

This project contains automated end-to-end tests for core EazyTask user workflows.

The test suite is being developed as a practical Playwright automation project with a focus on readable, maintainable, and scalable tests.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub

## Test Coverage

### Authentication

- Sign in with valid credentials

## Project Structure

```text
eazytask-playwright-tests/
├── tests/
│   └── login.spec.ts
├── playwright-learning-notes.md
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```
## Learning Notes

Step-by-step beginner-friendly Playwright setup and learning guide:

```text
playwright-learning-notes.md
``` 

The guide documents the project setup, Playwright commands, UI Mode, Codegen, reports, and the first automated test.

## Installation

Clone the repository:

```bash
git clone [REPOSITORY_URL]
```

Open the project folder:

```bash
cd eazytask-playwright-tests
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests in a visible browser:

```bash
npx playwright test --headed
```

## UI Mode

Open Playwright UI Mode:

```bash
npx playwright test --ui
```

## HTML Report

Open the latest HTML report:

```bash
npx playwright show-report
```

## Project Status

🚧 In development

The test suite will be expanded with additional EazyTask user workflows and improved framework architecture.