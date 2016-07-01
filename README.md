# **Website Performance Optimization Project**

## Description:

The project is focused on performance, both website performance optimization and browser performance optimization. The goals are to reach a PageSpeed score of at least 90 for Mobile and Desktop for _index.html_ and a consistent frame-rate at 60fps when scrolling for _views/pizza.html_ through optimizing _views/js/main.js_.

## Getting Started:
### Check out PageSpeed Insights score for index.html: 
1. Check out the repository
1. To inspect the site on your phone, you can run a local server

      ```bash
      $> cd /path/to/your-project-folder
      $> python -m SimpleHTTPServer 8080
      ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

      ``` bash
      $> cd /path/to/your-project-folder
      $> ./ngrok http 8080
      ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights to see the score! 

### Check out Frames per Second in pizza.html:
- Open pizza.html in the browser
- Use Timeline in Chrome Dev Tools to record a scrolling event and see Frames per Second whent the event is finished recording :) 




## Optimizations:

### index.html

- Add async attribute to google analytics scripts 
- Move google font css to the footer of the page
- Inline style.css and print.css
- Optimize images using Grunt
- Resize pizzeria.jpg via making it smaller by 75% from original size of 1024 * 768 to new size of 256 * 192
- Minify index.html 



### main.js

- Removed queries and constants from for loops in updatePosition and changePizzaSize functions 
- Use document.getElementByClass instead of document.querySelectorAll to access DOM more efficiently
- Reduce the amount of sliding pizzas when the page loads from 200 to 24 
- Replace all querySelector with getElementById
- Move document.querySelector("#movingPizzas1") out of for loop
- Move document.getElementById("randomPizzas") out of for loop 
- Move determineDx function out of the for loop













 

   