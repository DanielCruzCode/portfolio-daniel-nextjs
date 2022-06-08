import css from "styled-jsx/css";

export const ContactStyles = css`
  .chat-bubbles {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
  .text-container {
    margin-top: 6.1875rem;
  }
  .send-me-message {
    margin-top: 3.625rem;
  }
  label {
    cursor: pointer;
  }
  input {
    display: block;
    width: 100%;
  }
  .email-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 15rem;
    margin-inline: auto;
    margin-top: 2.5625rem;
    gap: 1rem;
  }
`;
