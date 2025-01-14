import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const TranslationContainer = styled.div`
  position: relative;
  min-width: 130px;
`;

export const MenuContainer = styled(motion.div)`
  position: absolute;
  top: 35px;
  left: -25px;
  margin: 0 10px 10px 10px;

  /* padding-top: 14px; */
  /* z-index: 1; */
  min-width: 168px;
  /* height: 76px; */
  background-color: ${(props) => props.theme.colors["blue-200"]};
  border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & > button {
    padding: 12px 15px;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & > button:hover {
    background: ${(props) => props.theme.colors["blue-see-website"]};
  }

  & > button:not(:last-of-type) {
    border-bottom: 1px solid #ffffff;
  }
  & > button:nth-child(1) {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  }
  & > button:nth-child(2) {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  }
`;
