import React from "react";
import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import { TiTick, TiWarning } from "react-icons/ti";
import { MdInfo } from "react-icons/md";
import { FaSkullCrossbones } from "react-icons/fa";
const ALERT_MODIFIERS = {
  primary: () => `
    color: ${defaultTheme.textColorOnPrimary};
    background-color: ${defaultTheme.primaryColor};
    
      &:hover {
        background-color: ${defaultTheme.PrimaryActiveColor};
        outline: 3px solid ${defaultTheme.PrimaryHoverColor};
      //   outline-offset: 2px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
    `,

  success: () => `
    color: ${defaultTheme.textColorOnPrimary};
    background-color: ${defaultTheme.status.successColor};
    
      &:hover {
        background-color: ${defaultTheme.status.successColorActive};
        outline: 3px solid ${defaultTheme.status.successColor};
      //   outline-offset: 2px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
    `,
  warning: () => `
  color: ${defaultTheme.textColorOnPrimary};
  background-color: ${defaultTheme.status.warningColor};
  
    &:hover {
      background-color: ${defaultTheme.status.warningColorActive};
      outline: 3px solid ${defaultTheme.status.warningColor};
    //   outline-offset: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  `,
  error: () => `
  color: ${defaultTheme.textColorOnPrimary};
  background-color: ${defaultTheme.status.errorColor};
  
    &:hover {
      background-color: ${defaultTheme.status.errorColorActive};
      outline: 3px solid ${defaultTheme.status.errorColor};
    //   outline-offset: 2px;
    }
  `,
};

const AlertContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Alert = styled.div`
  display: flex;
  border-radius: 10px;
  min-width: 40vw;
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 1rem;
  font-size: 1rem;
  margin: 20px;
  .icon {
    margin-right: 1rem;
  }
  ${applyStyleModifiers(ALERT_MODIFIERS)}
`;
export const Alerts = () => {
  return (
    <AlertContainer>
      <Alert modifiers={["primary"]}>
        <MdInfo className="icon" />
        <strong>Primary Alert</strong>
      </Alert>
      <Alert modifiers={["success"]}>
        <TiTick className="icon" />
        <strong>Success Alert</strong>
      </Alert>
      <Alert modifiers={["warning"]}>
        <TiWarning className="icon" />
        <strong>Warning Alert</strong>
      </Alert>
      <Alert modifiers={["error"]}>
        <FaSkullCrossbones className="icon" />
        <strong>Error Alert</strong>
      </Alert>
    </AlertContainer>
  );
};
