# AspireHighNGOWebsite

To Install React:

1. npm create vite
2. Select React
3. Select Typescript
4. Enter your project name, in our case it is front-end

To Install Packages:

1. npm install bootstrap
2. npm install styled-components
3. npm install @types/styled-components
4. npm install react-hook-form styled-components
<!-- For Form Schema, install Zod -->
5. npm install react-hook-form zod @hookform/resolvers
<!-- For Routing Purposes -->
6. npm install react-router-dom
7. npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
8. npm install polished

Additional Information:

1. To simulate server responses, I added ItemsList and corresponding messages in the parent component "InteractiveList".

# Component Details

## List Group Component

The ListGroup component is a reusable React component designed to display a list of items with the ability to highlight the currently selected item. It is flexible and can be used in various contexts where a selectable list is needed, such as navigation menus, settings panels, or item selectors.

### Features

1. Selectable Items: The component allows users to select an item from the list. The selected item is highlighted based on the selectedItemId prop.
2. Customizable: The component accepts a variety of props to customize the behavior and appearance, such as items, heading, and onSelectItem.
3. Responsive Design: It is designed to be responsive and easily integrates with other components in your application.

### Props

The ListGroup component accepts the following props:

1. items: An array of objects representing the items to be displayed in the list. Each object should contain:

   1. id (number): A unique identifier for the item.

   2. name (string): The name of the item to be displayed.

   3. heading: A string representing the heading or title displayed above the list. This is useful for labeling the group of items.

   4. onSelectItem: A callback function that is triggered when an item is clicked. It receives the id of the selected item as its argument. This function is responsible for handling the selection logic in the parent component.

   5. selectedItemId: A number representing the id of the currently selected item. This prop is used to determine which item in the list should be highlighted.

### Styling

The ListGroup component uses styled-components for its styling. Each list item can be styled based on whether it is active (selected) using the active prop. This allows for easy customization of the appearance of the list items.

## Main Content Component

The MainContent component is a flexible and reusable React component designed to display structured content with a main title, an introduction, and multiple subsections. It also includes an optional action button that can be customized based on the use case.

### Features

1.  Dynamic Content Display: The component renders a main title, an introductory paragraph, and multiple subsections, making it ideal for structured content presentation.
2.  Optional Action Button: Includes a customizable action button that can be shown or hidden based on the showActionButton prop. The button label and action are also configurable.
3.  Responsive Design: The component is styled to be responsive and integrates seamlessly with other UI elements in your application.

### Props

The MainContent component accepts the following props:

    1. title: A string representing the main title of the content.

    2. introduction: A string providing an introductory paragraph or summary of the content.

    3. subheadings: An array of objects representing the subsections within the content. Each object should contain:

    4. title (string): The title of the subsection.

    5. content (string): The content or description for that subsection.

    6. showActionButton: A boolean value that determines whether the action button should be displayed. If true, the button is shown; if false, it is hidden.

    7. buttonLabel: (Optional) A string representing the label of the action button. If not provided, a default label "Default Button Label" is used.

    8. buttonAction: (Optional) A callback function that is triggered when the action button is clicked. This allows you to define custom behavior for the button.
