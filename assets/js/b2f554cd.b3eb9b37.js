"use strict";(self.webpackChunkPromptPal_github_io=self.webpackChunkPromptPal_github_io||[]).push([[894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"promptPal-1-7","metadata":{"permalink":"/blog/promptPal-1-7","source":"@site/blog/2024-03-10-release-1-7.mdx","title":"PromptPal 1.7 - SSO, Tracking and bugfixes","description":"<ReleaseHero","date":"2024-03-10T00:00:00.000Z","formattedDate":"March 10, 2024","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.11,"hasTruncateMarker":false,"authors":[{"name":"AnnatarHe","title":"Maintainer of PromptPal","url":"https://github.com/AnnatarHe","imageURL":"https://github.com/annatarhe.png","key":"annatarhe"}],"frontMatter":{"slug":"promptPal-1-7","title":"PromptPal 1.7 - SSO, Tracking and bugfixes","authors":["annatarhe"],"tags":["release"]},"unlisted":false,"nextItem":{"title":"PromptPal 1.6 - Gemini Support and UI Revamp!","permalink":"/blog/promptPal-1-6"}},"content":"import ReleaseHero from \\"@site/src/components/ReleaseHero\\";\\n\\n<ReleaseHero\\n    version=\'1.7\'\\n    features={[\\n        \'Single Sign-On\',\\n        \'Prompt Tracking\',\\n        \'More improvements and bugfixes\'\\n    ]}\\n/>\\n\\n## PromptPal 1.7: Single Sign-On, Improved Tracking, and Bug Fixes\\n\\nWe\'re excited to announce the release of PromptPal 1.7! This update introduces several new features and improvements.\\n\\n### Single Sign-On (SSO) with Google Login\\n\\nPromptPal now supports seamless integration with Google Login. You can easily enable Google Login by configuring your `.env` file. Simply follow these steps:\\n\\n1. Visit the Google Cloud Console: [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) to create an OAuth 2.0 client and set up a callback URL.\\n2. Update your PromptPal `.env` file with the following details:\\n\\n```yaml\\nSSO_GOOGLE_CALLBACK_URL=\\"http://localhost:7788/auth/google\\"\\nSSO_GOOGLE_CLIENT_ID=\\"YOUR_CLIENT_ID\\"\\nSSO_GOOGLE_CLIENT_SECRET=\\"YOUR_CLIENT_SECRET\\"\\n```\\n\\n**Important Note:** You can only modify the host portion of the callback URL (`http://localhost:7788` in this example). The path (`/auth/google`) must remain unchanged.\\n\\nOnce configured, a \\"Google Login\\" button will appear on your login page.\\n\\n### Enhanced Prompt Tracking\\n\\nThe latest version of PromptPal provides deeper insights into how prompts are being used within your project. You can now view:\\n\\n- The number of times each prompt has been called in the last 7 days.\\n- The P50, P90, and P99 response times for each prompt.\\n\\n![p90-example](./assets/prompt-p90.jpeg)\\n\\n### Improvements and Bug Fixes\\n\\nFor a detailed list of improvements and bug fixes, please refer to the full changelog: Release 1.7 Changelog: [https://github.com/PromptPal/PromptPal/releases/tag/v1.7.0](https://github.com/PromptPal/PromptPal/releases/tag/v1.7.0).\\n\\n## Important Updates Regarding Database Support\\n\\nWe\'ve made the difficult decision to discontinue support for SQLite in PromptPal 1.7. Here\'s why:\\n\\n1. **Reduced Bundle Size:** We prioritize keeping the bundle size small, especially for users in regions with limited internet bandwidth. Removing SQLite support significantly reduces the overall size of the package (by approximately 83%).\\n2. **cgo Limitations:** SQLite relies on cgo, which can introduce challenges in certain environments. You can learn more about these limitations in this article: cgo is not Go: [https://dave.cheney.net/2016/01/18/cgo-is-not-go](https://dave.cheney.net/2016/01/18/cgo-is-not-go).\\n3. **Limited Functionality:** SQLite offers a restricted set of aggregate functions, hindering our ability to develop certain features.\\n\\nWe recommend migrating your data to PostgreSQL, our officially supported database.\\n\\n## Upgrading to PromptPal 1.7\\n\\nUpgrading is a simple process:\\n\\n1. Update the image version:\\n\\n```bash\\ndocker run -v $(pwd)/.env:/usr/app/.env -p 7788:7788 annatarhe/prompt-pal:v1.7.0\\n```\\n\\n2. If you intend to use Google Login, update your `.env` file accordingly before starting the server.\\n3. Users who were previously using SQLite will need to migrate their data to a different database (such as PostgreSQL).\\n\\nWe appreciate your understanding and patience. We\'re confident that these changes will enhance the overall performance and functionality of PromptPal. We look forward to your continued use and feedback!"},{"id":"promptPal-1-6","metadata":{"permalink":"/blog/promptPal-1-6","source":"@site/blog/2024-02-24-release-1-6.mdx","title":"PromptPal 1.6 - Gemini Support and UI Revamp!","description":"<ReleaseHero","date":"2024-02-24T00:00:00.000Z","formattedDate":"February 24, 2024","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.98,"hasTruncateMarker":false,"authors":[{"name":"AnnatarHe","title":"Maintainer of PromptPal","url":"https://github.com/AnnatarHe","imageURL":"https://github.com/annatarhe.png","key":"annatarhe"}],"frontMatter":{"slug":"promptPal-1-6","title":"PromptPal 1.6 - Gemini Support and UI Revamp!","authors":["annatarhe"],"tags":["release"]},"unlisted":false,"prevItem":{"title":"PromptPal 1.7 - SSO, Tracking and bugfixes","permalink":"/blog/promptPal-1-7"},"nextItem":{"title":"Introduce the PromptPal","permalink":"/blog/introduce"}},"content":"import ReleaseHero from \\"@site/src/components/ReleaseHero\\";\\n\\n<ReleaseHero\\n    version=\'1.6\'\\n    features={[\\n        \'Gemini support\',\\n        \'New UI\'\\n    ]}\\n/>\\n\\n# PromptPal 1.6: Gemini Support and UI Revamp!\\n\\nWe\'re excited to announce the release of PromptPal v1.6, bringing some fantastic updates to your favorite AI project!\\n\\nThis release focuses on two key areas:\\n\\n1. Gemini Support:\\n\\nOpenAI not longly anymore. We offically support Google Gemini. in this release you be able to use gemini for your project.\\n\\n2. User Interface Revamp:\\n\\nWe\'ve completely revamped the User Interface (UI) for a more intuitive and user-friendly experience.\\nEnjoy a streamlined layout, improved navigation, and features optimized for various screen sizes.\\n\\nAdditional highlights:\\n\\n- Enhanced Dark Mode: Experience improved dark mode support for a comfortable writing environment.\\n- Bug Fixes: We\'ve addressed various bugs to ensure a smoother user experience.\\n- Improved Toast Experience: Our toast notifications now offer a clearer and more informative reading experience.\\n\\n\\n## Upgrade now:\\n\\nTo experience the new features and enhancements in PromptPal v1.6, you can upgrade by a simple command:\\n\\n```bash\\npodman run -d --rm --network host -v \'/promptpal/.env:/usr/app/.env:ro\' annatarhe/prompt-pal:v1.6.0\\n```\\n\\nif you are a new user, please checkout [the documention](https://github.com/PromptPal/PromptPal?tab=readme-ov-file#installation) and setup your `.env`\\n\\nThank you for choosing PromptPal!"},{"id":"introduce","metadata":{"permalink":"/blog/introduce","source":"@site/blog/2024-02-01-introduce.mdx","title":"Introduce the PromptPal","description":"Introducing PromptPal","date":"2024-02-01T00:00:00.000Z","formattedDate":"February 1, 2024","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"introduce","permalink":"/blog/tags/introduce"}],"readingTime":1.805,"hasTruncateMarker":false,"authors":[{"name":"AnnatarHe","title":"Maintainer of PromptPal","url":"https://github.com/AnnatarHe","imageURL":"https://github.com/annatarhe.png","key":"annatarhe"}],"frontMatter":{"slug":"introduce","title":"Introduce the PromptPal","authors":["annatarhe"],"tags":["release","introduce"]},"unlisted":false,"prevItem":{"title":"PromptPal 1.6 - Gemini Support and UI Revamp!","permalink":"/blog/promptPal-1-6"}},"content":"## Introducing PromptPal\\n\\n**PromptPal is a prompt manager designed for on-premise environments, focusing on improving the developer experience when working with Large Language Models (LLMs).**\\n\\n## Why You Need a Prompt Manager\\n\\nWe know you\'re **eager to build** with AI, but as you start developing new features, managing your prompts can become **challenging**. Having them scattered throughout your codebase makes them difficult to **reuse, maintain, and share** with colleagues.\\n\\nImplementing a simple `PromptService` might seem inadequate, lacking proper organization for **efficient management**. Additionally, deploying, debugging, A/B testing, and monitoring prompt performance can be **time-consuming and tedious**.\\n\\nThese challenges can lead to wasted time and decreased productivity. PromptPal aims to solve these issues and **streamline your LLM development workflow**.\\n\\n## PromptPal Features\\n\\nPromptPal is a web service with **rich tools** to help developers work with LLMs.\\n\\nOf course, it can manage prompts, with tracing and debugging capabilities. But PromptPal offers more at a **low cost**:\\n\\n### On-Premise Deployment\\n\\nIt works perfectly in an on-premise environment and is **easy to set up**.\\n\\nThe only thing you need to set up PromptPal is a single `.env` configuration file and a one-line command:\\n\\n```bash\\npodman run -d --rm --network host -v \'/promptpal/.env:/usr/app/.env:ro\' annatarhe/prompt-pal:v1.6.0\\n```\\n\\n### Low Costs\\n\\nIts lightweight architecture guarantees efficient resource utilization, ensuring **optimal performance**. And all this functionality requires only **12.3MB of memory**[^1]!\\n\\n### Developer Experience\\n\\nWe are developers too, so **developer experience matters**.\\n\\nWe provide a CLI: [https://github.com/PromptPal/cli](https://github.com/PromptPal/cli) to help developers set up integration with PromptPal. With this CLI, you can set up a configuration file in your project and generate type declarations in **just one line of code**:\\n\\n```bash\\npromptpal init ## init project with config\\npromptpal g ## generate types by config\\n```\\n\\nWe also offer node.js: [https://github.com/PromptPal/node-sdk](https://github.com/PromptPal/node-sdk) and golang: [https://github.com/PromptPal/go-sdk](https://github.com/PromptPal/go-sdk) SDKs.\\n\\n## Conclusion\\n\\nPromptPal could help you **finish work earlier**, giving you time for your hobbies, like swimming or spending time with loved ones.\\n\\n**Run it right now!**\\n\\n**Please note that PromptPal is still under **heavy development**.**\\n\\n[^1]: For testing purposes, the 12.3MB was only evaluated on an M1 Pro MacBook during startup. Readers should be aware that performance may vary across different hardware configurations and operating conditions."}]}')}}]);