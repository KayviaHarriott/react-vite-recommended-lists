"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ItemBox from "./ItemBox";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
export const RecommendedList = ({ title, items, buttonText, buttonAction, }) => {
    const [updatedItems, setItems] = useState(items);
    const [fadingOutIndex, setFadingOutIndex] = useState(null);
    const handleRemove = (index) => {
        setFadingOutIndex(index); // Set the item to fade out
        setTimeout(() => {
            setItems((prevItems) => prevItems.filter((_, i) => i !== index));
            setFadingOutIndex(null); // Reset the fading index
        }, 500);
    };
    const handleButtonAction = (index) => {
        if (buttonAction) {
            buttonAction();
        }
        handleRemove(index);
    };
    return (_jsxs("div", { children: [title && (_jsx("p", { style: { paddingBottom: "8px", fontWeight: "bold" }, children: title })), updatedItems.length > 0 ? (updatedItems.map((item, index) => index < 4 && (_jsx(motion.div, { initial: { opacity: 1 }, animate: { opacity: fadingOutIndex === index ? 0 : 1 }, transition: { duration: 0.5 }, style: { marginBottom: "-1px" }, children: _jsx(ItemBox, { subheading: item.subheading, title: item.title, subtitle: item.subtitle, buttonText: buttonText, thumbnail: item.thumbnail, index: index, onRemove: () => handleRemove(index), onAction: () => handleButtonAction(index) }) }, index)))) : (_jsx(Box, { sx: {
                    border: "1px solid #E6E6E6",
                    padding: "10px 12px",
                    borderRadius: "5px",
                }, children: _jsx("p", { style: {
                        textAlign: "center",
                        color: "#868686",
                        padding: "16px 8px",
                    }, children: "No items to show." }) }))] }));
};
export default RecommendedList;
//# sourceMappingURL=RecommendedList.js.map