import { useState } from "react";
import { ItemBox } from "./ItemBox";

interface RecommendedListProps {
  items: {
    subheading: string;
    title: string;
    subtitle: string;
    thumbnail: string;
  }[];
  buttonText: string;
  buttonAction: () => void;
}

export const RecommendedList: React.FC<RecommendedListProps> = ({
  items,
  buttonText,
  buttonAction,
}) => {
  const [updatedItems, setItems] = useState(items);

  const handleRemove = (index: number) => {
    setItems(updatedItems.filter((_: unknown, i: number) => i !== index));
  };

  const handleButtonAction = (index: number) => {
    buttonAction();
    setItems(updatedItems.filter((_: unknown, i: number) => i !== index));
  };

  return (
    <div>
      {updatedItems.map(
        (item, index) =>
          index < 4 && (
            <div key={index} className="mb-[-1px]">
              <ItemBox
                subheading={item.subheading}
                title={item.title}
                subtitle={item.subtitle}
                buttonText={buttonText}
                thumbnail={item.thumbnail}
                index={index}
                onRemove={() => handleRemove(index)} // Pass handler
                onAction={() => handleButtonAction(index)}
              />
            </div>
          )
      )}
    </div>
  );
};
