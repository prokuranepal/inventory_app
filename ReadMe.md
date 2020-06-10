### Inventory Management System (Mobile App)

Inventory Management System is a cross platform mobile application based on React Native. Its primary function is to store and manage the inventory specifically medicines in the remote health posts of a country. A user can add, update, delete and display the inventory. A user can also add medicines to a cart and order them from the central distribution center. There is also a QR code scanner to quickly scan the incoming package and add it to the inventory. The user can order the items via call or messages or over internet.

For playing with the code, you need to also clone the inventory backend available at [Inventory Backend](https://github.com/prokuranepal/Inventory-backend).

#### To develop in this code base, you need to

* Fork this repository in your own github account
* Clone the repository into your local computer
* In your terminal run    ```git remote add origin https://github.com/user_name/inventory_app```
* Also run    ```git remote add upstream https://github.com/prokuranepal/inventory_app.git```
* To run the app ```npm start```

#### Project Structure

.
├── App.js
├── app.json
├── assets
│   ├── fonts
│   │   ├── OpenSans-Bold.ttf
│   │   └── OpenSans-Regular.ttf
│   ├── icon.png
│   ├── image.png
│   ├── splash.png
│   ├── user.jpg
│   └── user.png
├── babel.config.js
├── code_of_conduct.md
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov.info
│   └── lcov-report
│       ├── assets
│       │   ├── image.png.html
│       │   └── index.html
│       ├── base.css
│       ├── block-navigation.js
│       ├── favicon.png
│       ├── index.html
│       ├── prettify.css
│       ├── prettify.js
│       ├── sort-arrow-sprite.png
│       ├── sorter.js
│       └── src
│           ├── components
│           │   └── Component
│           │       ├── ButtonWIthBackground.js.html
│           │       ├── Card.js.html
│           │       ├── DefaultInput.js.html
│           │       ├── DefaultText.js.html
│           │       ├── HeadingText.js.html
│           │       ├── index.html
│           │       ├── MainButton.js.html
│           │       └── MainText.js.html
│           ├── constants
│           │   ├── Colors.js.html
│           │   └── index.html
│           ├── screens
│           │   ├── index.html
│           │   └── Splashscreen.js.html
│           └── _test_
│               └── screens
│                   └── intro
│                       ├── index.html
│                       └── intro.js.html
├── LICENSE
├── package.json
├── package-lock.json
├── ReadMe.md
├── src
│   ├── components
│   │   ├── Component
│   │   │   ├── ButtonWIthBackground.js
│   │   │   ├── Card.js
│   │   │   ├── DefaultInput.js
│   │   │   ├── DefaultText.js
│   │   │   ├── HeaderButton.js
│   │   │   ├── HeadingText.js
│   │   │   ├── IconButton.js
│   │   │   ├── InventoryItem.js
│   │   │   ├── MainButton.js
│   │   │   ├── MainText.js
│   │   │   ├── ManageItem.js
│   │   │   └── testInput.js
│   │   └── UI
│   │       ├── CartItem.js
│   │       ├── CategroyGridTile.js
│   │       ├── Input.js
│   │       ├── ItemList.js
│   │       ├── ManageList.js
│   │       └── OrderItem.js
│   ├── constants
│   │   └── Colors.js
│   ├── data
│   │   └── dummy-data.js
│   ├── models
│   │   ├── cart-items.js
│   │   ├── category.js
│   │   ├── contact.js
│   │   ├── item.js
│   │   ├── order.js
│   │   └── type.js
│   ├── navigation
│   │   └── InventoryNavigator.js
│   ├── screens
│   │   ├── AddScreen.js
│   │   ├── AuthScreen (copy).js
│   │   ├── AuthScreen.js
│   │   ├── CartScreen.js
│   │   ├── CategoriesScreen.js
│   │   ├── EditItemScreen.js
│   │   ├── ItemCategoryScreen.js
│   │   ├── ItemDetailScreen.js
│   │   ├── ItemListScreen.js
│   │   ├── LogsScreen.js
│   │   ├── ManageItemScreen.js
│   │   ├── OrderListScreen.js
│   │   ├── OrderScreen.js
│   │   ├── ReceivedItemScreen.js
│   │   ├── ScannerScreen.js
│   │   ├── SettingsScreen.js
│   │   ├── Splashscreen.js
│   │   └── SupplierContactScreen.js
│   ├── server
│   │   └── iplocation.js
│   ├── store
│   │   ├── actions
│   │   │   ├── auth.js
│   │   │   ├── cart.js
│   │   │   ├── ip.js
│   │   │   ├── items.js
│   │   │   └── orders.js
│   │   └── reducers
│   │       ├── auth.js
│   │       ├── cart.js
│   │       ├── ip.js
│   │       ├── items.js
│   │       └── orders.js
│   ├── _test_
│   │   ├── componenets
│   │   │   ├── ButtonWIthBackground.test.js
│   │   │   ├── Card.test.js
│   │   │   ├── DefaultInput.test.js
│   │   │   ├── DefaultText.test.js
│   │   │   ├── HeadingText.test.js
│   │   │   ├── MainButton.test.js
│   │   │   └── MainText.test.js
│   │   └── screens
│   │       ├── intro
│   │       │   ├── intro.js
│   │       │   ├── intro.test.js
│   │       │   └── __snapshots__
│   │       │       └── intro.test.js.snap
│   │       └── SplashScreen
│   │           ├── __snapshots__
│   │           │   └── SplashScreen.test.js.snap
│   │           └── SplashScreen.test.js
│   └── utility
│       └── validation.js
└── yarn.lock