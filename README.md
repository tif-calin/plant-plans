**Miro**: https://miro.com/app/board/o9J_lJBY_gI=/
**Figma**: https://www.figma.com/file/EZv0rNiCrOf1poqVGIKLj4/Garden-Planner

## Plan

### Header Nav
    -HTML "Logo" on L, Nav bar on R w/ create garden, garden setup, garden, chart
        - Culi's function

### Create Garden Page (Home)
    -HTML
    0) <Header> above with app name and nav
    1) List of gardens user may have already created
        - Clicking a garden will redirect to garden setup page.
        - button (to clear garden already created) 
    2) Create garden input field 
        - button (to create that garden)

    -JS
    0) onLoad() - load existing gardens
    1) javascript saves inputted garden name(s) into localStorage
    2) If you select an existing garden, redirect to the garden page (bypass setup)

### Setup Garden Page
    -HTML
    0) <Header> above with app name and nav
    1) Loads default if new garden, or saved garden data if saved
        - Input with garden name already loaded (from create garden page)
        - Garden avatar beside garden name
        - Choose from preset location (determines things TBD)
    2) Create Garden button 
        - redirects to Garden Page

    -JS
    0) onLoad() - load default if new garden, or saved garden data if saved
    1) allow user to rename garden 
        - check to be unique
    2) Auto generate cute garden avatar icon
    3) select element for dropdown locations
    4) select element for soil type dropdown
    5) button eventListener

### Garden Page
    -HTML
    0) <Header> above with app name and nav
    1) Load selected garden
        - 5x5 grid - *how is this implemented?
        - When plant is selected, grid background changes to ideal pH color (HSL)
        - Plant portrait has unicode icon with related color to plant
            - like, tree, flower, etc
        - L-Click may be a container with display grid that has form data
    2) Link below to chart
    
    -JS
    1) On click change grid plant choice and soil choice
        -hover pointer finger

### Chart Page
    -HTML
    0) <Header> above with app name and nav
    1) <canvas> for chart and script tag w/ link to install 
    2) Displays when you should plant and harvest
    3) ideal pH range
    4) Ability to change data to show?

    -JS
    1) Timeline Chart
        - options stored in variables to change data sets
        - We want to allow user to choose that reflects ideal harvest time
            - If I plant on this date, when can I see vegetable

### About Us Page
    -HTML
    0) <header> with app name and nav
    1) Table: 
        - Portrait or avatar in L TD
        - Blurb in R TD
        - Austin, Annaleigh, Casey, Clem, Culi
        
### Local Storage
    -Gardens (3)
        - name (unique)
        - avatar
        - location
        - row arrays: each row array contains (5) box objects 
            - plant object

### Plant Data Model
    - ideal plant and harvest date
    - pH
    - Habit determinds plant icon (flower, tree, bush, grass, etc...)
    - more...
