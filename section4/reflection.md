## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
  - It felt super different! I was able to chill out for a minute and clear my head. I feel like it's really easy to get stuck on a problem if you think too deeply about it. With the pom technique, you can separate yourself.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
  - I found myself way more focused and it was difficult to step away at times. I feel like I am focusing more on "getting the work done" and often times, I need to just slow down, step away, and reflect on what I'm learning. I think it will be much more attainable down the line that way.

3. What is an Object, and how is it different from an Array in Javascript?
  - An object is similar to an array because it also stores data. However, instead of using just the index to access the data, you can use strings. They use key/value pairs (a name and the value can be any data type) and access values by using dot notation. You can easily reassign values by using dot notation as well. Additionally, functions can be stored as values and are known as methods.

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    - Array:
  * List of states and their capitals
    - Object:
  * List of things to pack for vacation
    - Array:
  * Names of all the Instagram accounts I follow
    - Array:
  * List of student names and their cohort
    - Object:
  * Ingredients and amount of each ingredient to bake a cake
    - Object:
  * All my favorite restaurants
    - Array:

5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
  - In the Target app, I would think the shopping cart would be similar to a transaction item object. I've left a (non-dynamic) example below:
  class ShoppingCart {
    constructor() {
      this.item = "shirt";
      this.price = "$15.49";
      this.quantity = 1;
    }
  }
  - In this example, the keys are item, price, quantity and the values are shirt, 15.49, and 1.

6. What questions do you still have about classes and/or Objects?
  - I guess I'm just confused on why they would log the way they do... It doesn't really make sense yet applying them to real-world situations when they print like the below:
  Screen Shot 2021-11-02 at 10.22.25 AM

  - Also, how can you add multiple strings when calling a method? Maybe my verbiage is wrong here because I tried to Google it a couple ways and couldn't find the answer. (example in the tweet.js exercise) Surely, people comment on tweets more than just once - how would multiple comments get added to the tweet?
