## Explanation

The app displays the Card data. The cards are displayed 3 in a row, centered, full images and underneath they have the name and relevant information.
There are 3 statuses: ready, transcribing and error. If more statuses are to be added the FileData needs updating and we should consider refactoring Card also.
- When the status is Ready we display the image and if the  user hovers over the Edit, Delete and nr of Languages are shown.
The buttons currently do not remove any data from the server.

- When the status is transcribing we display the Loading Bar and message on a greyed background. We need to test this on different browsers/screen for visibility and contrast.

- When the status is error we display the error message on a pink background.

Search by status and language functionality is included.

If server is down, for a quick test uncomment the lines from App.tsx and run with the json data.


## To dos / future improvement

1: Implement button click logic for edit, delete, report.
2. Replace images with proper svgs.
3. Some text is hardcoded we could do with putting them in a separate file en.json and implementing translations.
4. Use api folder for endpoint storage and implement Server error handling.
5. Check ui on different platforms and make code/css adjustments.
6. Run and improve tests.

## Structure

The project is structured in src 
\ api - in a real application we would have url, headers, authorisation, backup server if first one is down etc
\ assets - for production I would store official svg images for icons
\ components - There is a CardList which contains the cards. This is so if in the future we have other types of information to share alongside the cards, it is easy to add them.
Card.tsx - includes the logic for the cards and the different statuses
Card.css - css file for the above containing all the visual styling
\ test - files for testing the App and Card
data.json - useful for offline testing the code when the server is down
\ types
FileData.ts - the data type for the json information
Other relevant files are App.tsx and App.css.

To start the app the command is npm start.

