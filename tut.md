# Useful Links

- [Using Environement variables](https://docs.nestjs.com/security/authentication#authentication)
- [Env Variables](https://www.tomray.dev/nestjs-config)
- [Deloying Nest API on render](https://community.render.com/t/how-deploy-a-nestjs-app-at-the-platform/6542)
- [](https://github.dev/KashanSiddiqui/Nest-Js-Boiler-Plate)
- [](https://drive.google.com/file/d/11WlG405dHi88LpJVUYJNxc7_lFpgkNfI/view)
- [Typeorm docs](https://typeorm.io/)
- [Sending email with nest js ](https://notiz.dev/blog/send-emails-with-nestjs)
- [Nest Modules Mailer](https://nest-modules.github.io/mailer/docs/mailer#configuration)
- [Lints staged by husky](https://youtu.be/_ssKvmZqSnk)
- [reinnovate bot](https://docs.renovatebot.com/configuration-options/)
- [phone number verification]()
- [](https://nestjs-i18n.com/quick-start)
- [](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)
- [Quickly build HTML emails
  with utility-first CSS](https://maizzle.com/)

- linters for templates
  @greglim81
  @danielgara
  https://github.com/PracticalBooks/Practical-Nest

## Why env-cmd

- The env-cmd package is typically used to manage environment variables for Node.js applications. In the case of Nest.js, which is a Node.js framework, it can be used to set environment variables for tests run using Jest.

In the script you provided, test:e2e is a script that runs end-to-end tests using Jest, with a specific configuration file (jest-e2e.json). The env-cmd command is being used to set environment variables before running the Jest tests.

This can be useful for a number of reasons, such as keeping sensitive information like API keys or database credentials out of version control, or for setting up different environments for testing purposes.

By using env-cmd to set environment variables, you can specify them in a separate file (usually a .env file) and have them automatically loaded when the tests are run. This can make it easier to manage multiple environments and configurations for your Nest.js application.

- You can use a configuration file like config to manage environment variables in Nest.js applications. However, there are some cases where using a package like env-cmd can be more appropriate.

One reason to use env-cmd over config is that it allows you to set environment variables on a per-command basis. This can be useful when running tests or other commands that require a specific set of environment variables to be set.

Additionally, env-cmd can make it easier to manage environment variables across different platforms and deployment environments. With config, you would typically need to define environment-specific configuration files or use environment variables to switch between configurations. With env-cmd, you can set environment variables using a single file and then use different sets of environment variables for different commands or environments.

Ultimately, whether to use env-cmd or config depends on your specific use case and preferences. Both packages can be used to manage environment variables in Nest.js applications, and the choice between them may depend on factors such as the size of your application, the number of environments you need to support, and your team's preferred workflow.

Newman, S. - Building microservices

Figure 5-1. Online Store software architecture.
Let’s have a quick analysis of this architecture:
• On the left, we have clients (users of our application e.g., browsers in mobile/desktop devices). Clients connect
to the application through the Hypertext Transfer Protocol (HTTP). HTTP gives users a way to interact with
our web application.
• On the right, we have the server where we place our application code.
• Clients’ interactions are connected to the main application file (main.ts). This file loads the root module
(AppModule), which internally will load other modules (described in Chapter 10), and those modules pass the
clients’ interactions to the controllers.
• Controllers (described in Chapter 7) execute the clients’ interactions based on the specific requested routes, i.e.
(“/products”) or (“/cart”) routes. Controllers communicate with models (described in Chapter 13), and pass
information to the views (described in Chapter 4), which are finally delivered to the clients as HTML, CSS,
and JavaScript code

npm install hbs-utils

- Controllers are responsible for handling incoming requests and returning responses to the client. Controllers can
  group related request handling logic into a single class. For example, a UserController class might handle all
  incoming requests related to users, including showing, creating, updating, and deleting users.

the (2019 -
Thomas, D., & Hunt, A. - The Pragmatic Programmer: your journey to mastery)

- TIP: As a software developer, a good strategy is to create a document with architectural rules
  and share that document with your team (if you have one). You can make that document in the
  project repository wiki (if you have one). Encourage all the members to read that document. A
  first rule that you can include in that document could be: “controllers should only pass an
  associative array called viewData to the views”. These simple rules will save you a lot of time
  and a lot of headaches; believe us, Daniel always creates a document like that for all his projects,
  and he encourages his students to do it in their projects

- There is a good story about “The Broken Window Theory” described in the (2019 -
  Thomas, D., & Hunt, A. - The Pragmatic Programmer: your journey to mastery) book
- Always use a coding standard tool, formatter, static code analysis tool, or even a
  combination of them in your projects. It will save you a lot of time and improve the code quality.
  In addition, you will find linters available for most programming languages. Besides, include a
  rule in your architectural rules document mentioning that all code changes should be previously
  verified using these tools. You can even automate this process (with a pipeline or CI/CD
  strategy). However, this is out of the scope of this book

- add linter formatter for hbs

- Consider Using `nest-i18n` - fro internationalization

- TIP: Always try to access your entity/model attributes through getters and setters. It will make
  it easier to add functionalities in the future. You can even include a new rule saying that
  entities/models’ attributes must be accessed through their corresponding getters and setters (in
  your architectural rules document)

- reserach maildev
- add the vscode extentions
