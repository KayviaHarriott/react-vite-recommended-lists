# react-vite-recommended-lists

## About the Package 👋
The Recommended List App is a React application designed to display a list of items with interactive components. Each item is displayed in a card format, featuring a thumbnail image, a title, subtitle, and a button to perform an action. Users can also remove items from the list. This app showcases the use of React hooks, Material-UI components, and basic state management.

## Demos & Previews 📹

You can find a demo of it here on [Netlify](https://react-vite-recommended-lists.netlify.app) or [CodePen](https://codepen.io/KayviaHarriott/pen/OJewxEP)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c8d80a4f-705b-4104-b3f3-9a824b27902e/deploy-status)](https://app.netlify.com/sites/react-vite-recommended-lists/deploys)

**_(NOTE: As of Aug-28-2024, the links for demo and previews are broken and being reloaded as package is updated)_**

Here’s an example of how the component looks:

![Recommended List App Screenshot](https://raw.githubusercontent.com/KayviaHarriott/react-vite-recommended-lists/main/public/imgs/sample.gif)




## How to Install the Package 💿

To install this package:

```
npm i react-vite-recommended-lists
```

or

```
yarn add react-vite-recommended-lists
```

## How to Use 📖

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
git clone https://github.com/KayviaHarriott/react-vite-recommended-lists.git
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
