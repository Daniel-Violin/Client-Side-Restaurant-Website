A web page that allows a user to browse menus for several restaurants, add items from a restaurant to an order, and simulate placing an order. 

Everything implemented for this project will involve client-side programming within the browser. Everything is implemented using Javascript

I will explain a few of my design decisions here:

1. I decided to use Descriptive Lists to hold both my menu information and my order summary information.
   I did this because it allowed me to align the "add" and "remove" images nicely.
   
2. I added a "jump to top" button out of convenience.

3. Instead of making the Confirm/Submit Order button invisible when the minimum order price was not satisfied
   I elected instead to disable and re-enable it based on the Total Price of the order. I think this way is just
   more visually appealing.
   
4. Some of the functions are pretty long, but I think are well enough documented to explain the gist of what is going on.
   Other than not looking the prettiest, I did not see another reason to split them up. I played around with it for a while
   and found it was easier to deal with a bigger function than it was to jump around a plethora of smaller ones.

5. I took the liberaty do to my tax calculation on only the subtotal, and add the
   delivery charge afterwards.
   
