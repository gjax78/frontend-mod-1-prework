## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
  - It felt super different! I was able to chill out for a minute and clear my head. I feel like it's really easy to get stuck on a problem if you think too deeply about it. With the pom technique, you can separate yourself.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
  - I found myself way more focused and it was difficult to step away at times. I feel like I am focusing more on "getting the work done" and often times, I need to just slow down, step away, and reflect on what I'm learning. I think it will be much more attainable down the line that way.

3. What is an Object, and how is it different from an Array in Javascript?
  - An object is similar to an array because it also stores data. However, instead of using just the index to access the data, you can use strings. They use key/value pairs (a name and the value can be any data type) and access values by using dot notation. You can easily reassign values by using dot notation as well. Additionally, functions can be stored as values and are known as methods.

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    - Array: You can have multiple strings listed here
  * List of states and their capitals
    - Object: capitals would be a property of the state
  * List of things to pack for vacation
    - Array: You can have multiple strings
  * Names of all the Instagram accounts I follow
    - Array: You can have multiple strings and "accounts" would be the variable
  * List of student names and their cohort
    - Object: The variable would be "Turing" and there could be multiple key value pairs such as student names, cohort, program, etc.
  * Ingredients and amount of each ingredient to bake a cake
    - Object: Again, lots of related data pertaining to one thing so object would be best.
  * All my favorite restaurants
    - Array: This would be a simple list of multiple strings.

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
  ![Screenshot]("https://user-images.githubusercontent.com/88151743/141192464-2ade7959-acbe-48dc-8ecd-b9abf6f8577f.png")

  - Also, how can you add multiple strings when calling a method? I assume this is just through an array - how does the computer know it's inputted as an array? Because if it isn't, it seems it would log as an error...
