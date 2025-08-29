
### 6. Answer the following questions clearly:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
1.Ans:
**getElementById, getElementsByClassName, and querySelector / querySelectorAll** all are use to get element from DOM. They have some differece like **getElementById** and **querySelector** give you only the specific element.But they take different aregument. **getElementById** take a ID as aregument in the outher side **querySelector** take a CSS seclector as argument. **getElementById** give you only the elemnt with specific ID.But **querySelector** give you first Element with The ID,Class Or tag etc valid CSS selector. Where **getElementById** And **querySelector** give you only one specific Element, on the other side **getElementsByClassName** and **querySelectorAll** Give you the collection of Element. **getElementsByClassName** give you a HTMl-Collection and **querySelectorAll** give you a NodeList. By using them you can get more then one Element.

---
2.Ans:
**To create and insert a new element into the DOM** You should follow the steps:
First you to creat a Element, we can use **document.createElement()** method for That. 
After that we can add the html code to that element using **innerHTMl**. Then we can insert that to DOM using element.appen() method. 

---
3.Ans: 
**Event Bubbling** is the thing where if I make any event to the child autometicly happent with its parent. In **Event Bubbling** event go upward from the tigard point.

---
4.Ans:
**Event Delegation** is connected with **Event Bubbling**. We know that event goes upward from its tigard point. So in **Event Delegation** we dont listen event in child level instead of that we listen event in parent. For that we don't need to handel event for all child we can handel it to its parent. it make the code more efficient.

---
5.Ans:
There are significant difference between **preventDefault() and stopPropagation()** method.We use **preventDefault()** method to stop the natural refreshing behaviour of form. We know if we clicked a button(if the button type is not difiend) inside the form its thing that it is a submit button so it refresh the webside.By using 
**preventDefualt()** method we can stop that. On the other hand **stopPropagation()** method stop **Event Bubbling**.

