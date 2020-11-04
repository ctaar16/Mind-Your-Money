# Mind-Your-Money

Money Manager

This app is a useful tool that individuals can use to manage their money while allocating it into separate accounts for specific goals. Users can update their account balances through the spreadsheet listed on the app. These changes will be reflected in the progress bar for each goal. Goals and progress can be edited by the user.

[Whimsical](https://whimsical.com/EfWJXDzNqKQUZT5fpmndQf)

[Team Expectations](https://docs.google.com/document/d/15K2Ta1yJ2Ss2rmHXvIteGgVH6Zy2_ZEg30KnQLhuETo/edit?usp=sharing)

[MVP/Post MVP](https://github.com/ctaar16/Mind-Your-Money/projects/1)

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
