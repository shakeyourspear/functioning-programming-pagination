# Gallery
This repository contains my gallery...

# Steps to view
1. Clone this repo
2. launch about.html
3. the page contains two parts : self-introduction and gallery.
4. Scroll down to see our pictures about me.

# Tools utilized and coding step
1. Adapted boostraps grid system for the responsive page layout.
   Including Navgation Bar, Writing Panels, the gallery and Page pagaination buttons.
2. Utilized Javasript, more specifically Jquery to insert function which observe user behaviour, in this case to navigate through pages. 
3. My first attempt is to assign the pictures to a list of array. Then creat show and hide functions to each page with a unique ID. When a ID, ie. "page-1" was clicked, the show and hide function was triggered in order to display the specific photo in the right pages.
4. This method,however, is redundant and not flexable enough to handle extra photos which can only be done with manually editing the code. The images are also preloaded before the button was clicked, this might be come a problem for slow network connection when accessing the page.
5. More problem discovered , as the sustainbility of the code mentioned above is limited due to that fact that "hard code" require tons of edtion each time a new element is added.
6. Therefore, upon consulting my friends, he guided me to write the pagination with "soft code" with increased readability.
7. The steps were explained in details with // comment box within the script.
 

CMD + P -> >Preview