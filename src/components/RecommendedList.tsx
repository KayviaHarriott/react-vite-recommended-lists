"use client";
import { useState } from "react";
import ItemBox from "./ItemBox";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import React from "react";

interface RecommendedListProps {
  title?: string;
  items: {
    subheading?: string;
    title: string;
    subtitle?: string;
    thumbnail?: string;
  }[];
  buttonText: string;
  buttonAction?: () => void;
}

export const RecommendedList: React.FC<RecommendedListProps> = ({
  title,
  items,
  buttonText,
  buttonAction,
}) => {
  const [updatedItems, setItems] = useState(items);
  const [fadingOutIndex, setFadingOutIndex] = useState<number | null>(null);

  const handleRemove = (index: number) => {
    setFadingOutIndex(index); // Set the item to fade out
    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((_, i) => i !== index));
      setFadingOutIndex(null); // Reset the fading index
    }, 500);
  };

  const handleButtonAction = (index: number) => {
    if (buttonAction) {
      buttonAction();
    }
    handleRemove(index);
  };



  return (
    <div>
      {title && <p style={{paddingBottom: "8px", fontWeight: "bold"}}>{title}</p>}
      {updatedItems.length > 0 ? (
        updatedItems.map(
          (item, index) =>
            index < 4 && (
              <motion.div
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: fadingOutIndex === index ? 0 : 1 }}
                transition={{ duration: 0.5 }} // Fade-out duration
                style={{marginBottom: "-1px"}}
              >
                <ItemBox 
                  subheading={item.subheading}
                  title={item.title}
                  subtitle={item.subtitle}
                  buttonText={buttonText}
                  thumbnail={item.thumbnail}
                  index={index}
                  onRemove={() => handleRemove(index)}
                  onAction={() => handleButtonAction(index)}
                />
              </motion.div>
            )
        )
      ) : (
        <Box
          sx={{
            border: "1px solid #E6E6E6",
            padding: "10px 12px",
            borderRadius: "5px",
          }}
        >
          <p style={{textAlign: "center", color: "#868686", padding: "16px 8px"}}>
            No items to show.
          </p>
        </Box>
      )}
    </div>
  );
};

export default RecommendedList;