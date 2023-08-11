import React from "react";
import PropTypes from 'prop-types';
import { Message } from "./Notification.styled";


const Notification = ({message}) => {
    return (
        <Message>{message}</Message>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired,
  };


export default Notification;
