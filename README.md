# Mind-Your-Money

Money Manager

https://mindyourmoney.netlify.app/

This app is a useful tool that individuals can use to manage their money while allocating it into separate accounts for specific goals. Users can update their account balances through the spreadsheet listed on the app. These changes will be reflected in the progress bar for each goal. Goals and progress can be edited by the user.

## Wireframes

[Desktop](https://scene.zeplin.io/project/5f7de6d28bc2d4861ade8aa9)

[Mobile](https://scene.zeplin.io/project/5f7de398c5ac2a10900da280)

## Component Hierarchy

[Whimsical](https://whimsical.com/EfWJXDzNqKQUZT5fpmndQf)

## Team Expectations and Timeline

[The Plan](https://docs.google.com/document/d/15K2Ta1yJ2Ss2rmHXvIteGgVH6Zy2_ZEg30KnQLhuETo/edit?usp=sharing)

## MVP

[MVP](https://github.com/ctaar16/Mind-Your-Money/projects/1)

## Post MVP

[Post MVP](https://github.com/ctaar16/Mind-Your-Money/projects/1)

## Schema

```
const Account = new Schema(
  {
    accountType: { type: String, required: true },
    accountNumber: { type: String, required: true },
    routingNumber: { type: String, required: true },
    creditCardExp: { type: String, required: true },
    creditCardccv: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  }
```

## Timeframes

| Component                                                                                    | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Back End Server/ Schema/ Build react App/ Start on components and Screens             |    H     |      4hrs      |     4hrs      |    4hrs     |
| Basic Screen builds (Home Page/ Add Account/ Edit Account/ My Account) and CSS as we go      |    H     |      4hrs      |     4hrs      |    4hrs     |
| Add and Link Icons                                                                           |    H     |      4hrs      |     4hrs      |    4hrs     |
| Build Components to each Screen/ Hamburger/ Layout/ Home Button                              |    H     |      4hrs      |     4hrs      |    4hrs     |
| CSS Styling                                                                                  |    H     |      4hrs      |     4hrs      |    4hrs     |
| Tied our Front End to Back End while debugging/ Finishing 1st Iteration/ Deployed to Netlify |    H     |      4hrs      |     4hrs      |    4hrs     |
| Begin Iteration 2/ Create a Login/ Sign Up                                                   |    H     |      4hrs      |     4hrs      |    4hrs     |
| Create User Schema and add to our Back End Server                                            |    H     |      4hrs      |     4hrs      |    4hrs     |
| Debugging/ Connecting User Schema to Account Schema                                          |    H     |      4hrs      |     3hrs      |    3hrs     |
| Creating CRUD functionality                                                                  |    H     |      4hrs      |     4hrs      |    4hrs     |
| Connecting Login, Sign Up, User Detail Front End and CSS                                     |    H     |      4hrs      |     4hrs      |    4hrs     |
| Correcting any issues UX had with our Designs                                                |    H     |      4hrs      |     4hrs      |    4hrs     |
| CSS Styling Troubleshooting                                                                  |    H     |      4hrs      |     4hrs      |    4hrs     |
| Polish/ Deploy Iteration 2                                                                   |    H     |      4hrs      |     4hrs      |    4hrs     |
| Total                                                                                        |    H     |     56hrs      |     55hrs     |    55hrs    |
