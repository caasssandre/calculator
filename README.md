# Calculator

Pseudo code:

In the HTML:

Create the calculator:
  Create a div that will contain all the buttons, the name and the screen of the calculator.
  In the div create a title and an input space for the numbers to apear.
  Put a condition to block direct user input from typing from their keyboard.
  Create the buttons, 5 row of buttons:
    AC, CE, %, /
    7, 8, 9, x
    4, 5, 6, -
    1, 2, 3, +(extra tall, to span down two rows)
    0, ., =
DONE!

CSS:
Style the calculator, make sure the buttons do something when they are being clicked (pressed)/ active

JS:

Create an empty array called entries.
Create and initialze a total variable to 0 (not found the use for this variable)

Create and initialize a temp variable to an empty string.
Apply a JQuery that runs an anonymous function when the button is clicked.
  The anonymous function does all the following:
    Assigns the text content of an object (this), to value named val.

    If statement: 
      if val is a number or val is a full stop, add val to temp (as strings, not number. So for example 4 + 5 would be 45)
      Make another jquery: display the value of temp in input box as the buttons are clicked. (10 digits max)

      else if val is AC, reset the array entries and reset the string temp and reset the total 0 and reset the display to an empty string

      else if val is CE reset the temp string to empty and reset the display to empty string

      else if val is x, push temp to the array entries and push * to the array entries. reset temp string to empty (not necessary, can be done directly in the calculation line)

      else if val is ÷, push temp to entries and push / to entries and reset temp to empty string (not necessary, can be done directly in the calculation line)

      else if val is =, push temp to entries and perform calculation.

        to perform calculation, we need to pick the numbers and the symbols from the entries array and interpret them.
        we assume that the array starts with a number (problem! the array will start with an empty string if a symbol is pressed before a number. Causes error with / and *).
        Assign a variable nt the value of the first element of the entries array.
        create a for loop that iterates through entries starting at the second element and incrementing i by 1.

          Assign the element at index i to a variable named nextNum
          Assign the element at index i+1 to a variable named symbol

          do the calculations:
            if symbol is + add nextNum to nt etc
            (here we could add an action for the symbol %, currently not doing anything)

            increment i by 1 again (it would be more legible and logical. to increment i by 2 in the for loop declaration)

      Now we have a result saved in the variable nt, we can write some code to display it properly:
      
        if the result is smaller than zero, we need to display it by using the inbuilt function abs, which goves us an absolute, and display that value with the symbol -

        (I would add three display conditions: if the result is smaller than 0.0000000, or if the result is greater than 999999999, display the number in exponential form using the inbuilt toExponential() function. 
        If the number is in between these values but has many decimals, only display the number and 8 decimals. For this we can strigify the number and use the inbuilt substring method to display only the first 10 characters.
        This will allow our result to fit in the calculator display.

      else if val is not a number or a full stop or AC or CE or x or ÷ or =, that is if val is + or - or % or an empty string (I would have done this after calculation step directly for better readability):
        
        push temp to entries and val to entries
        reset temp to empty string
