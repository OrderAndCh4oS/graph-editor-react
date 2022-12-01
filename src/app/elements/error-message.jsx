/* eslint-disable react/prop-types */
import React from 'react';
import {Pretitle, Title} from './typography.jsx';
import {Column} from './structure.jsx';

const ErrorMessage = ({pretitle = 'Oops...', title = 'Error', children}) =>
    <Column>
        <Pretitle>{pretitle}</Pretitle>
        <Title>{title}</Title>
        {children}
    </Column>;

export default ErrorMessage;
