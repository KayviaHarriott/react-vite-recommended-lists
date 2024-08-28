# react-vite-recommended-lists

## About the Package


## Demos & Previews

Here’s an example of how the component looks:

![Recommended List App Screenshot](https://raw.githubusercontent.com/KayviaHarriott/react-vite-recommended-lists/main/public/imgs/sample.gif)

You can find a demo of it here on ![Netlify]() or ![CodePen]()

## How to Install the Package 💿

To install this package:

```
npm i react-vite-recommended-lists
```

or

```
yarn add react-vite-recommended-lists
```

## How to Use

To use this package in your React repo, you'll first have to install the package (as shown above). Then follow the steps below:

1. Import the component to your file:

```tsx
import { RecommendedList } from "react-vite-recommended-lists";
```

2. Create the RecommendedLists component with the necessary attributes:

```tsx
<RecommendedList
  title="List Title"
  items={list}
  buttonText={"ButtonText"}
  buttonAction={() => console.log("Hello world!")}
/>
```

Together (in your component), they should look something like this:

```tsx
"use client"; //if you're using NEXTJS
import { RecommendedList } from "react-vite-recommended-lists";

export default function Home() {
  const list = [
    {
      subheading: "Technology",
      title: "#AppleEvent",
      subtitle: "18.6K posts",
      thumbnail: "imgs/thumbnails/technology.png",
    }
    {
      subheading: "Fashion",
      title: "#OOTD",
      subtitle: "25.2K posts",
      thumbnail: "imgs/thumbnails/fashion.png",
    },
  ];
  return (
    <div>
      <div className="max-w-[600px]">
        <RecommendedList
          title="List Title"
          items={list}
          buttonText={"ButtonText"}
          buttonAction={() => console.log("Hello world!")}
        />
      </div>
    </div>
  );
}
```

## How to Start Up the Repo 🚀

If you'd like to branch of or use the entire repo, follow these steps:

1. Clone the repo:
```
```

2. Install the dependecies:
```
npm i
```

3. Start up the development:
```
npm run dev
```

4. Open to see in your browser, which is usually on [localhost:5173](http://localhost:5173)


## Dependencies 🧱

This project relies on the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides pre-built components.
- **TypeScript** (if used): A superset of JavaScript that adds static typing.

## How to Install

The Recommended List App is a React application designed to display a list of items with interactive components. Each item is displayed in a card format, featuring a thumbnail image, a title, subtitle, and a button to perform an action. Users can also remove items from the list. This app showcases the use of React hooks, Material-UI components, and basic state management.

## Demo

View demo [here](https://react-vite-recommended-lists.netlify.app).

## How to Start Up

To get started with this project, follow these steps:

1. **Clone the Repository**:

   ```
   git clone https://github.com/KayviaHarriott/react-vite-recommended-lists.git
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Start the Development Server**:
   ```
   npm run dev
   ```
   This will start the development server and open the app in your default browser.

## Dependencies

This project relies on the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides pre-built components.
- **TypeScript** (if used): A superset of JavaScript that adds static typing.
- **@mui/material**: Material-UI core components.
- **@mui/icons-material**: Material-UI icons.

## Usage

1. **Run the Application**:
   After starting the development server, the application will be available at `http://localhost:5173`.

2. **Interact with the List**:

   - **items**: This is an array of items to be displayed. Each item should include properties like `subheading`, `title`, `subtitle`, and `thumbnail`. Example:

     ```tsx
     items={[
       {
         subheading: "Travel",
         title: "#Wanderlust",
         subtitle: "22.7K posts",
         thumbnail: "imgs/thumbnails/travel.png",
       },
     ]}
     ```

   - **buttonText**: The text displayed on the button for each item. Example:

     ```tsx
     buttonText = "Follow";
     ```

   - **buttonAction**: A function to be executed when the button is clicked. Example:

     ```tsx
     buttonAction={() => console.log("Button clicked")}
     ```

   - **Remove Action**: Click the close icon to remove an item from the list.

   Here’s how you can use the `RecommendedList` component:

   ```tsx
   "use client"; //for NextJs
   import { RecommendedList } from "./components/RecommendedList";

   <RecommendedList
     items={[
       {
         subheading: "Travel", //string
         title: "#Wanderlust", //string
         subtitle: "22.7K posts", //string
         thumbnail: "imgs/thumbnails/travel.png", //string, location to image
       },
     ]}
     buttonText="Follow"
     buttonAction={() => console.log("Button clicked")}
   />;
   ```

## Example


