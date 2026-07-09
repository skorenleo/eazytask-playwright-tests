# EazyTask Playwright Automation Roadmap

This roadmap tracks the development of the EazyTask Playwright test automation suite.

## 1. Project Setup

- [x] Install Playwright
- [x] Configure `baseURL`
- [x] Configure screenshots
- [x] Configure videos
- [x] Configure traces
- [x] Run example tests
- [x] Explore UI Mode
- [x] Explore Codegen
- [x] Configure Git and GitHub
- [x] Add README

## 2. Authentication Tests

- [x] Sign in with valid credentials
- [x] Sign in with invalid email
- [x] Sign in with invalid password
- [x] Sign in with empty fields
- [x] Sign out

## 3. Project Management Tests

- [ ] Create the first project
- [ ] Create an additional project
- [ ] Open a project
- [ ] Edit a project
- [ ] Delete a project

## 4. Playwright Locators

- [ ] `getByRole()`
- [ ] `getByLabel()`
- [ ] `getByPlaceholder()`
- [ ] `getByText()`
- [ ] `locator()`
- [ ] `filter()`
- [ ] `nth()`
- [ ] Choose stable locators

## 5. Assertions

- [ ] `toBeVisible()`
- [ ] `toHaveURL()`
- [ ] `toHaveText()`
- [ ] `toContainText()`
- [ ] `toHaveValue()`
- [ ] `toHaveCount()`

## 6. Page Object Model

- [ ] Create `pages/` folder
- [ ] Create `LoginPage`
- [ ] Move login locators to `LoginPage`
- [ ] Move login actions to `LoginPage`
- [ ] Refactor Sign In test
- [ ] Create Project Page Object
- [ ] Review Page Object responsibilities

## 7. Authentication Setup

- [ ] Create reusable authentication
- [ ] Learn `storageState`
- [ ] Save authenticated state
- [ ] Reuse authentication in tests
- [ ] Remove repeated UI login

## 8. Test Data

- [ ] Remove credentials from test code
- [ ] Create environment variables
- [ ] Create `.env`
- [ ] Add `.env` to `.gitignore`
- [ ] Create reusable test data

## 9. Fixtures

- [ ] Learn Playwright fixtures
- [ ] Create a custom fixture
- [ ] Connect Page Objects to fixtures
- [ ] Refactor tests to use fixtures

## 10. Test Suite Structure

- [ ] Organize tests by feature
- [ ] Review file naming
- [ ] Add `pages/`
- [ ] Add `fixtures/`
- [ ] Add `data/`
- [ ] Add `utils/` if needed

## 11. Debugging and Reports

- [ ] Debug a failed test in UI Mode
- [ ] Review a screenshot
- [ ] Review a video
- [ ] Open Trace Viewer
- [ ] Analyze a failed test using trace

## 12. Cross-Browser Testing

- [ ] Run tests in Chromium
- [ ] Run tests in Firefox
- [ ] Run tests in WebKit
- [ ] Run a test in one browser only

## 13. CI/CD

- [ ] Create GitHub Actions workflow
- [ ] Run tests on push
- [ ] Run tests on pull request
- [ ] Upload Playwright report
- [ ] Review failed CI test results

## 14. Portfolio Preparation

- [ ] Update README
- [ ] Add final project structure
- [ ] Add test coverage
- [ ] Add framework architecture
- [ ] Add CI/CD information
- [ ] Review Git commit history
- [ ] Clean the repository
- [ ] Prepare project explanation for interviews

## Final Goal

Build a maintainable Playwright automation framework for EazyTask using:

- Playwright
- TypeScript
- Page Object Model
- Fixtures
- Reusable authentication
- Test data management
- HTML reports
- Trace Viewer
- Cross-browser testing
- GitHub Actions