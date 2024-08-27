import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import Skeleton from "@mui/material/Skeleton";

interface ItemBoxProps {
  subheading?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  index: number;
  thumbnail?: string;
  onRemove: () => void;
  onAction: () => void;
}

export const ItemBox: React.FC<ItemBoxProps> = ({
  subheading,
  title,
  subtitle,
  buttonText,
  index,
  thumbnail,
  onRemove,
  onAction,
}) => {

  return (
    <div>
      <Box
        sx={{
          border: "1px solid #E6E6E6",
          padding: "10px 12px",
          borderRadius:
            (index == 3 && "0px 0px 5px 5px") ||
            (index == 0 && "5px 5px 0px 0px") ||
            "",
        }}
      >
        <div className="flex justify-between">
          <div className="flex gap-[12px] items-center">
            {thumbnail && (
              <img
                className=" w-[70px] h-[70px] rounded-[5px]"
                src={thumbnail}
              />
            ) 
            // : (
            //   <Skeleton variant="rounded" width={70} height={70} />
            // )
            
            }
            <div>
              {subheading && <h6 className="text-[#6F6F6F]">{subheading}</h6>}
              <div className="pt-1">
                <h4 className="font-bold">{title}</h4>
                {subtitle && <h6 className="text-[#6F6F6F]">{subtitle}</h6>}
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] ">
            <div className="flex justify-center items-center pt-[15%]">
              <Button
                sx={{
                  boxShadow: "none",
                  textTransform: "none",
                  height: "fit-content",
                  fontSize: "14px",
                  padding: "4px 16px",
                  backgroundColor: "#37ABEB",
                  color: "white",
                }}
                variant="contained"
                onClick={onAction}
              >
                {buttonText}
              </Button>
            </div>
            <div className="mt-[-5%]">
              <CloseIcon
                sx={{ color: "#999999", width: "16px", height: "16px" }}
                className="cursor-pointer"
                onClick={onRemove}
              />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
